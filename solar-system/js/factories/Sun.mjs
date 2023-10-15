import * as THREE from 'three';
import { createOrbitLine, orbitObjectAround } from '../utils/utils.js';
import { CelestialBodyFactory } from './CelestialBodyFactory.mjs';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

class Sun {
    constructor(scene, sunRadius) {
        this.radius = sunRadius;
        
        const textureLoader = new THREE.TextureLoader();


        const material = new THREE.MeshStandardMaterial( {
            map: textureLoader.load('../assets/textures/planetsAndMoons/sun/2k_sun.jpg'),
            emissive: 0xfad56e,
            emissiveIntensity: 1,
        } );

        material.map.colorSpace = THREE.SRGBColorSpace;

        const geometry = new THREE.SphereGeometry(this.radius, 100, 50);
        const mesh = new THREE.Mesh(geometry, material);


        this.sunLight = new THREE.PointLight( 0xffffff, 5, 200000000, 0.000001 );
        this.sunLight.add( mesh );
        this.sunLight.position.set( 0, 0, 0 );
	    this.sunLight.castShadow = true;

        

	    scene.add( this.sunLight );
    }

    animate() {
        
    }
}

export { Sun };