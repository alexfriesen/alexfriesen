import { Vector2, Vector3, WebGLRenderer, Scene, PerspectiveCamera, Clock } from "https://cdn.jsdelivr.net/npm/three@0.113.2/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.113.2/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "https://cdn.jsdelivr.net/npm/three@0.113.2/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "https://cdn.jsdelivr.net/npm/three@0.113.2/examples/jsm/postprocessing/ShaderPass.js";
import { RenderPass } from "https://cdn.jsdelivr.net/npm/three@0.113.2/examples/jsm/postprocessing/RenderPass.js";
import { CopyShader } from "https://cdn.jsdelivr.net/npm/three@0.113.2/examples/jsm/shaders/CopyShader.js";

const VERTEX = `
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const FRAGMENT = `
    uniform vec3 iResolution;
    uniform float iTime;
    
    void mainImage(out vec4 fragColor, in vec2 fragCoord)
    {
        vec3 res = iResolution;
        // vec3 accent = vec3(0.73725490196, 0.0, 0.17647058823);
        vec3 accent = vec3(.5, 0.2, 0.0);
    
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(res.x, res.y);
        
        vec3 col = vec3(0.3, 0.5, 0.5);
        
        float r = 20.0 * smoothstep(0.0, 0.1, sin(atan(uv.y, uv.x) * 16.0 - iTime * 0.9));

        col += accent * smoothstep(r, r + 0.01, length(uv));
        
        fragColor = vec4(col, 1.0);
    }

    void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
    }
`;

const FOV = 45;
const NEAR = 0.1;
const FAR = 1000;
let height = document.body.clientHeight;
let width = document.body.clientWidth;
const ASPECT = width / height;

const canvas = document.getElementById('bg');
const renderer = new WebGLRenderer({ antialias: true, canvas });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setClearColor(0x000000);


const clock = new Clock();
const scene = new Scene();

const camera = new PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
camera.position.set(-2, 2, 2);
camera.target = new Vector3(0, 0, 0);

const controls = new OrbitControls(camera, canvas);

scene.add(camera);

const resolution = new Vector2(width, height);

const drawShader = {
    uniforms: {
        iTime: { type: 'f', value: 0.0 },
        iResolution: { type: 'v2', value: resolution },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
};

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const shader = new ShaderPass(drawShader);
shader.renderToScreen = true;
composer.addPass(shader);

const resize = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    composer.setSize(width, height);

    renderer.setSize(width, height);
};

const render = () => {
    const tmpHeight = document.body.clientHeight;
    const tmpWidth = document.body.clientWidth;
    if (tmpHeight !== height || tmpWidth !== width) {
        height = tmpHeight;
        width = tmpWidth;
        resize(width, height);
    }

    controls.update();

    const ellapsed = clock.getElapsedTime();
    shader.uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
    shader.uniforms.iTime.value = ellapsed;
    composer.render();

    requestAnimationFrame(render);
};

resize(width, height);
render();
