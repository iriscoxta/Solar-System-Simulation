import * as THREE from 'three';
import { CelestialBodyFactory } from './CelestialBodyFactory.mjs';
import { createOrbitLine, orbitObjectAround, orbitObjectAroundSun} from '../utils/utils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

class AsteroidBelt {
    constructor(scene) {
                // Crie um carregador GLTF
                const loader = new THREE.GLTFLoader();

                // Carregue o modelo GLTF
                loader.load('../assets/models/asteroid_belt/scene.gltf', (gltf) => {
                    const asteroid = gltf.scene;
                    asteroid.scale.set(100, 100, 100); // Escala do modelo (ajuste conforme necessário)
                    asteroid.position.set(0, 0, 0); // Posição inicial (ajuste conforme necessário)
                    scene.add(asteroid);
        
                    // Inicialize a animação
                    animate();
                });
    }

    animate() {
    }
}

export { AsteroidBelt };
