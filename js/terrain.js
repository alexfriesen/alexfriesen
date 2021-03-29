import {
    BufferAttribute,
    Vector3,
    Color,
    Mesh,
    MeshPhongMaterial,
    PlaneGeometry,
} from 'https://cdn.jsdelivr.net/npm/three@0.126.0/build/three.module.js';
import SimplexNoise from 'https://cdn.jsdelivr.net/npm/simplex-noise-esm@2.5.0-esm.0/dist-esm/simplex-noise.js';

const seed = Date.now();

export class Terrain {

    chunks = new Set();

    constructor(chunksize = 50) {
        this.chunksize = chunksize;
    }

    addChunk(chunk) {
        this.chunks.add(chunk);
    }

    addTo(scene) {
        for (const chunk of this.chunks) {
            console.log(chunk.offset.z);
            chunk.mesh.position.z = chunk.offset.z;

            scene.add(chunk.mesh);
        }
    }

    update(speed) {
        for (const chunk of this.chunks) {
            chunk.update(speed);
            if (chunk.mesh.position.z > this.chunksize) {
                const skip = this.chunksize * 2;
                chunk.updateOffset(new Vector3(0, 0, -skip));

                chunk.mesh.position.z -= skip;
            }
        }
    }

}

export class TerrainChunk {

    height = 3;
    smoothing = 10 + Math.pow(this.height, 2.5);

    constructor(size = 50, offset = new Vector3()) {
        this.size = size;
        this.segments = size / 2;
        this.offset = offset;
        this.simplex = new SimplexNoise(seed);


        this.geometry = new PlaneGeometry(
            this.size,
            this.size,
            this.segments,
            this.segments
        );
        this.setGeometryHeight();

        this.material = new MeshPhongMaterial({
            color: new Color(0.225, 0.593, 0.162),
            flatShading: true,
            shininess: 0
        });

        this.mesh = new Mesh(this.geometry, this.material);
    }

    setGeometryHeight() {
        const vertices = this.geometry.getAttribute('position').array;

        for (let i = 2; i < vertices.length; i += 3) {
            const x = vertices[i - 2] + this.offset.x;
            const y = vertices[i - 1];
            vertices[i] = -y;
            const z = vertices[i] + this.offset.z;

            if (this.findRoad({ x, y, z })) {
                vertices[i - 1] = 0;
                continue; // skip noise
            }

            vertices[i - 1] = this.simplex.noise2D(x / this.smoothing, z / this.smoothing) * this.height;
        }

        this.geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        this.geometry.computeVertexNormals();
    }

    findRoad(position) {
        const roadMin = -15;
        const roadMax = 15;
        if (position.x > roadMin && position.x < roadMax) {
            return true;
        }
    }

    addTo(scene) {
        scene.add(this.mesh);
    }

    update(speed) {
        this.mesh.position.z = this.mesh.position.z + speed;
    }

    updateOffset(offset) {
        this.offset.add(offset);

        this.updateGeometry();
    }

    updateGeometry() {
        const vertices = this.geometry.getAttribute('position').array;

        for (let i = 2; i < vertices.length; i += 3) {
            const x = vertices[i - 2] + this.offset.x;
            const y = vertices[i - 1];
            const z = vertices[i] + this.offset.z;

            if (this.findRoad({ x, y, z })) {
                continue; // skip noise
            }

            vertices[i - 1] = this.simplex.noise2D(x / this.smoothing, z / this.smoothing) * this.height;
        }

        this.geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        this.geometry.computeVertexNormals();
    }
}