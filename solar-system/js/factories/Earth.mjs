import * as THREE from 'three';
import { Moon } from './Moon.mjs';
import { createOrbitLine, orbitObjectAround } from '../utils/utils.js';

class Earth {
    constructor(scene, sunRadius) {
        this.radius = 6371;
        this.rotationSpeed = 0.15;
        this.orbitRadius = 150000;
        this.orbitSpeed = 0.001;

        this.cloudsScale = 1.005;
        this.clock = new THREE.Clock();

        const textureLoader = new THREE.TextureLoader();

        const material = new THREE.MeshPhongMaterial({
            specular: 0x7c7c7c,
            shininess: 10,
            map: textureLoader.load('../assets/textures/planetsAndMoons/earth/earth_atmos_2048.jpg'),
            specularMap: textureLoader.load('../assets/textures/planetsAndMoons/earth/earth_specular_2048.jpg'),
            normalMap: textureLoader.load('../assets/textures/planetsAndMoons/earth/earth_normal_2048.jpg'),
            normalScale: new THREE.Vector2(0.85, - 0.85)
        });

        material.map.colorSpace = THREE.SRGBColorSpace;

        // planet

        this.geometry = new THREE.SphereGeometry(this.radius, 100, 50);
        this.meshPlanet = new THREE.Mesh(this.geometry, material);
        this.meshPlanet.rotation.y = 0;

        // clouds

        const materialClouds = new THREE.MeshLambertMaterial({

            map: textureLoader.load('./assets/textures/planetsAndMoons/earth/earth_clouds_2048.png'),
            transparent: true

        });
        materialClouds.map.colorSpace = THREE.SRGBColorSpace;

        this.meshClouds = new THREE.Mesh(this.geometry, materialClouds);
        this.meshClouds.scale.set(this.cloudsScale, this.cloudsScale, this.cloudsScale);
        // this.meshClouds.rotation.z = this.tilt;

        this.Moon = new Moon(this.geometry, this.radius, this.rotationSpeed, this.clock);

        this.moonOrbit = createOrbitLine(this.radius * 3, this.radius * 3, 0xffffff, 100, 90);

        const earthOrbit = createOrbitLine(sunRadius + this.orbitRadius, sunRadius+ this.orbitRadius, 0x0000ff, 100, 90);

        scene.add(earthOrbit);

        this.meshPlanet.add(this.moonOrbit);
        this.meshPlanet.add(this.meshClouds);
        scene.add(this.meshPlanet);
        scene.add(this.Moon.meshMoon);
    }

    animate() {
        const delta = this.clock.getDelta();

        this.moonOrbit.rotation.set(90 * (Math.PI / 180),0,0);
        orbitObjectAround(this.meshPlanet, this.Moon.meshMoon, this.Moon.OrbitRadius, 0.001);

        this.Moon.animate();
        this.meshPlanet.rotation.y += this.rotationSpeed * delta;
        this.meshClouds.rotation.y += 1.25 * this.rotationSpeed * delta;
    }
}

export { Earth };