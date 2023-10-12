import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Importações dos objetos (Planetas)
import { Sun } from './src/sun.js';

// Inicialização da Cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.4, 1000)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 8
new OrbitControls(camera, renderer.domElement);

// Instâncias dos objetos
const sun1 = new Sun();
scene.add(sun1.getMesh)

const sun2 = new Sun();
scene.add(sun2.getMesh)

sun2.getMesh.position.x = 5

const orbitRadius = 3; // Raio da órbita
const orbitSpeed = 0.005; // Velocidade da órbita (em radianos por quadro)

function animate() {
	requestAnimationFrame( animate );

	sun1.animate()

	sun2.getMesh.position.x = sun1.getMesh.position.x + orbitRadius * Math.cos(orbitSpeed * performance.now());
    sun2.getMesh.position.z = sun1.getMesh.position.z + orbitRadius * Math.sin(orbitSpeed * performance.now());


	renderer.render(scene, camera );
}

animate();

