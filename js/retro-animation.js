import {
    Float32BufferAttribute,
    Vector2,
    Vector3,
    BackSide,
    DoubleSide,
    Color,
    Fog,
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    Clock,
    BufferGeometry,
    PlaneGeometry,
    SphereGeometry,
    Mesh,
    Points,
    MeshBasicMaterial,
    PointsMaterial,
    ShaderMaterial,
    ReinhardToneMapping,
    GridHelper,
} from "https://cdn.jsdelivr.net/npm/three@0.126.0/build/three.module.js";
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GlitchPass } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/postprocessing/GlitchPass.js';
import { FilmPass } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/postprocessing/FilmPass.js';

import { Terrain } from './terrain.js'

// const pink = 0xe52379;
const pink = 0xbc1974;
const skyColor = 0x1b073b;
// const skyColor = 0x000000;
// const groundColor = 0x0d052a;
const groundColor = 0x0c062a;

const FOV = 45;
const NEAR = 1;
const FAR = 350;
let height = document.body.clientHeight;
let width = document.body.clientWidth;
const ASPECT = width / height;

const canvas = document.getElementById('bg');

function createSkydome() {

    const vertexShader = `
        varying vec3 vWorldPosition;

        void main() {

            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

        }
    `;
    const fragmentShader = `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;

        varying vec3 vWorldPosition;

        void main() {

            float h = normalize(vWorldPosition + offset).y;
            float w = normalize(vWorldPosition).x;
            gl_FragColor = vec4(
                mix(
                    bottomColor, 
                    topColor,
                    max(h / exponent, 0.0)
                ),
                1.0
            );

        }
    `;
    const uniforms = {
        "topColor": { value: new Color(skyColor) },
        "bottomColor": { value: new Color(pink) },
        "offset": { value: 0 },
        "exponent": { value: 0.15 }
    };

    const skyGeometry = new SphereGeometry(FAR / 2, 32, 15);
    const skyMataterial = new ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: BackSide
    });

    return new Mesh(skyGeometry, skyMataterial);

}

function createGround() {
    const geometry = new PlaneGeometry(FAR, FAR, 100, 100);
    const material = new MeshBasicMaterial({ color: groundColor });
    material.side = DoubleSide;
    const mesh = new Mesh(geometry, material);
    mesh.rotateX(Math.PI / 2); // 90deg

    return mesh;
}

function createSunset(size = 40) {

    const geometry = new SphereGeometry(size, size, 32);
    const material = new MeshBasicMaterial({ color: pink });
    const mesh = new Mesh(geometry, material);

    mesh.position.set(0, size * 0.35, -FAR / 1.8);

    return mesh;
}

function createStars() {
    const geometry = new BufferGeometry();

    const vertices = [];
    const vertex = new Vector3();

    for (let i = 0; i < 2000; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar(3);

        vertices.push(vertex.x, vertex.y, vertex.z);
    }

    geometry.setAttribute(
        "position",
        new Float32BufferAttribute(vertices, 3)
    );

    const starsMaterials = [
        0x555555,
        0x333333,
        0x3a3a3a,
        // 0x1a1a1a
    ].reduce((materials, color) => {
        materials.push(
            new PointsMaterial({
                color,
                size: 2,
                sizeAttenuation: false,
            }),
            new PointsMaterial({
                color,
                size: 1,
                sizeAttenuation: false,
            }),
        );
        return materials;
    }, []);

    const materialCount = starsMaterials.length;

    const stars = []
    for (let i = 10; i < 20; i++) {
        const points = new Points(
            geometry,
            starsMaterials[i % materialCount]
        );

        points.rotation.x = Math.random() * 2;
        points.rotation.y = Math.random() * 2;
        points.rotation.z = Math.random() * 2;
        points.scale.setScalar(i * 10);

        points.matrixAutoUpdate = false;
        points.updateMatrix();

        stars.push(points);
    }

    return stars;
}

const clock = new Clock();
const scene = new Scene();

scene.background = new Color(skyColor);
scene.fog = new Fog(pink, 1, FAR / 2);

scene.add(createSkydome());

scene.add(createSunset());

createStars().map(star => scene.add(star));

const camera = new PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
camera.position.set(0, 6, 30);
camera.target = new Vector3(0, 0, 20);

scene.add(camera);

// const terrainChunks = [
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
//     new Terrain(),
// ].map((terrain, index) => {
//     const x = ((index % 3) - 1) * terrain.size;
//     const z = parseInt(index / 3) * terrain.size;

//     terrain.offsetX = x;
//     terrain.offsetZ = -z;
//     terrain.mesh.position.set(x, 0, -z);

//     scene.add(terrain.mesh);
//     return terrain;
// })
const terrain = new Terrain(FAR);
terrain.addTo(scene)

const renderer = new WebGLRenderer({ antialias: true, canvas });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.toneMapping = ReinhardToneMapping;
renderer.toneMappingExposure = Math.pow(1, 4.0);

const renderPass = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1.5, 0, 0.8);
bloomPass.threshold = 0;
bloomPass.strength = 1.5;
bloomPass.radius = 0.8;

const glitchPass = new GlitchPass();

const effectFilm = new FilmPass(
    0.2, // noise intensity
    0.75, // scanline intensity
    2048, // scanline count
    false // grayscale
);

const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
// composer.addPass(bloomPass);
composer.addPass(effectFilm);
// composer.addPass(glitchPass);

const resize = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);
};

const render = function () {
    const tmpHeight = document.body.clientHeight;
    const tmpWidth = document.body.clientWidth;
    if (tmpHeight !== height || tmpWidth !== width) {
        height = tmpHeight;
        width = tmpWidth;
        resize(width, height);
    }

    // const delta = clock.getDelta();
    // const ellapsed = clock.getElapsedTime();

    // shader.uniforms.iTime.value = ellapsed;
    // terrain.update();
    // terrainChunks.forEach(item => item.update());
    terrain.update();

    composer.render();
    // renderer.render(scene, camera);

    requestAnimationFrame(render);
};

resize(width, height);
render();
