import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.4, 1000)


const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const sphereGeometry = new THREE.SphereGeometry(1.3, 32, 32);

//    _____________Texture______________
const textureLoader = new THREE.TextureLoader();
const texture01 = textureLoader.load("https://images.unsplash.com/photo-1542732056-648731297c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvbmUlMjB0ZXh0dXJlfGVufDB8fDB8fHww&w=1000&q=80")
const texture02 = textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzRMobKtKRxKRXQfCFCOydiHWqA2aTGsGWwPILo70eg&s")



const material01 = new THREE.MeshBasicMaterial({color: 0x777777, map: texture01});
const material02 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texture02});

const cube01 = new THREE.Mesh(cubeGeometry, material01);
const sphere01 = new THREE.Mesh(sphereGeometry, material02);

const axesHelper = new THREE.AxesHelper( 5 );

scene.add( axesHelper );

scene.add(cube01);
scene.add(sphere01);


cube01.position.x = -2
sphere01.position.x = 2

let swt = true
camera.position.z = 5

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
	requestAnimationFrame( animate );

    cube01.rotation.y += 0.01;
	cube01.rotation.x += 0.04;

	sphere01.rotation.y += 0.08;
	sphere01.rotation.x += 0.02;

	// camera.rotation.y += 0.01


	// if (swt){
	// 	camera.position.z += 0.1
	// 	if(camera.position.z > 10) swt = false
	// }else{
	// 	camera.position.z -= 0.1;
	// 	if(camera.position.z < 0) swt = true
	// }
		

	renderer.render( scene, camera );
}

animate();

