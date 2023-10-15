import * as THREE from 'three';
import { CelestialBodyFactory } from './CelestialBodyFactory.mjs';
import { createOrbitLine, orbitObjectAround, orbitObjectAroundSun } from '../utils/utils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

class AsteroidBelt {
    
    constructor(scene) {
        const loader = new GLTFLoader();
        loader.load('../assets/models/asteroid_belt/scene.gltf', (gltf) => {
            this.object = gltf.scene;
            this.object.scale.set(825, 650, 825);
            this.object.position.set(0,-20000,0);
            scene.add(this.object);
        });
    }

    animate() {
    }
}

export { AsteroidBelt };
