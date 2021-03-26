import {
    BufferAttribute,
    Color,
    Mesh,
    MeshPhongMaterial,
    PlaneGeometry,
} from 'https://cdn.jsdelivr.net/npm/three@0.126.0/build/three.module.js';
import SimplexNoise from 'https://cdn.jsdelivr.net/npm/simplex-noise-esm@2.5.0-esm.0/dist-esm/simplex-noise.js';

const seed = Date.now();

export class Terrain {
    constructor(size = 50, height = 3, smoothing = 2.5, segments) {
        this.size = size;
        this.height = height;
        this.segments = (segments || size / 2);
        this.smoothing = 10 + Math.pow(this.height, smoothing);
        this.simplex = new SimplexNoise(seed);

        this.offsetX = 0;
        this.offsetZ = 0;

        this.geometry = new PlaneGeometry(
            this.size,
            this.size,
            this.segments,
            this.segments
        );
        this.setHeight();
        this.material = new MeshPhongMaterial({
            color: new Color(0.225, 0.593, 0.162),
            flatShading: true,
            shininess: 0
        });

        this.mesh = new Mesh(this.geometry, this.material);
    }

    setHeight() {
        const vertices = this.geometry.getAttribute('position').array;

        for (let i = 2; i < vertices.length; i += 3) {
            const x = vertices[i - 2];
            const y = vertices[i - 1];

            vertices[i] = -y;

            if (this.findRoad(x, y)) {
                vertices[i - 1] = 0;
                continue; // skip noise
            }
            
            vertices[i - 1] = this.simplex.noise2D(x / this.smoothing, y / this.smoothing) * this.height;
        }

        this.geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        this.geometry.computeVertexNormals();
    }

    findRoad(x, y, z) {
        const roadMin = -15;
        const roadMax = 15;
        if (x > roadMin && x < roadMax) {
            return true;
        }
    }

    addTo(scene) {
        scene.add(this.mesh);
    }

    update() {
        this.offsetZ -= 0.5;
        const vertices = this.geometry.getAttribute('position').array;

        for (let i = 2; i < vertices.length; i += 3) {
            const x = vertices[i - 2] + this.offsetX;
            const y = vertices[i - 1];
            const z = vertices[i] + this.offsetZ;

            if (this.findRoad(x, y, z)) {
                continue; // skip noise
            }

            vertices[i - 1] = this.simplex.noise2D(x / this.smoothing, z / this.smoothing) * this.height;
        }

        this.geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        this.geometry.computeVertexNormals();
    }
}