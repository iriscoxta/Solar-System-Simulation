import * as THREE from 'three';
import { CelestialBodyFactory } from '../factories/CelestialBodyFactory.mjs';

function createOrbitLine(raioX, raioY, cor, segmentos, anguloInicial) {
	const ellipseMaterial = new THREE.LineBasicMaterial({ color: cor, opacity: 0.02, transparent: true });

	const points = [];

	for (let i = 0; i <= segmentos; i++) {
		const theta = (i / segmentos) * Math.PI * 2;
		const x = raioX * Math.cos(theta);
		const y = raioY * Math.sin(theta);
		points.push(new THREE.Vector3(x, y, 0));
	}

	const ellipseGeometry = new THREE.BufferGeometry().setFromPoints(points);
	const ellipse = new THREE.Line(ellipseGeometry, ellipseMaterial);

	// Defina a rotação da elipse em radianos
	ellipse.rotation.x = anguloInicial * (Math.PI / 180);

	return ellipse;

}

function orbitObjectAround(centerObject, orbitingObject, radius, speed) {
	const time = performance.now() * speed;
	const angle = time % (2 * Math.PI); // Um ciclo completo (360 graus) em radianos

	const x = centerObject.position.x + radius * Math.cos(angle);
	const z = centerObject.position.z + radius * Math.sin(angle);

	orbitingObject.position.set(x, orbitingObject.position.y, z);
}

function orbitObjectAroundSun(orbitingObject, radius, speed) {
	const time = performance.now() * speed;
	const angle = time % (2 * Math.PI); // Um ciclo completo (360 graus) em radianos

	const x = 0 + radius * Math.cos(angle);
	const z = 0 + radius * Math.sin(angle);

	orbitingObject.position.x = x;
	orbitingObject.position.z = z;
}


export { createOrbitLine, orbitObjectAround, orbitObjectAroundSun};

