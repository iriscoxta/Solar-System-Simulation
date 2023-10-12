import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Importações dos objetos (Planetas)
import { Sun } from './src/sun.js';
import { Earth } from './src/planets/earth.js';
import {orbitObjectAround} from './src/assistant.js'

// Inicialização da Cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.4, 1000)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 8
new OrbitControls(camera, renderer.domElement);

// Instâncias dos objetos
const sun = new Sun();
scene.add(sun.getMesh)

const earth = new Earth();
scene.add(earth.getMesh)


const orbitRadius = 3; // Raio da órbita
const orbitSpeed = 0.005; // Velocidade da órbita (em radianos por quadro)

function animate() {
	requestAnimationFrame( animate );


	orbitObjectAround(sun.getMesh, earth.getMesh, 3, 0.001)


	renderer.render(scene, camera );
}

animate();

