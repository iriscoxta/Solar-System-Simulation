import * as THREE from 'three';
import { CelestialBodyFactory } from './CelestialBodyFactory.mjs';
import { createOrbitLine, orbitObjectAround, orbitObjectAroundSun} from '../utils/utils.js';

class Jupiter {
    constructor(scene, radiusEarth, sunRadius) {
        this.radius = 11.209 * radiusEarth;
        this.orbitRadius =  778300;
        this.textureMap = '../assets/textures/planetsAndMoons/jupiter/Jupiter_Texture.jpg';
        this.textureNormalMap = '../assets/textures/planetsAndMoons/jupiter/Jupiter_Normal.png';
        this.rotationSpeed = 0.01;
        this.OrbitSpeed = 0.0009;

        this.ganimedesTextureMap = '../assets/textures/planetsAndMoons/moons/Moon1_Texture.jpg'
        this.ganimedesNormalMap = '../assets/textures/planetsAndMoons/moons/Moon1_Normal.png'
        
        this.europaTextureMap = '../assets/textures/planetsAndMoons/moons/Moon2_Texture.jpg'
        this.europaNormalMap = '../assets/textures/planetsAndMoons/moons/Moon2_Normal.png'

        this.calistoTextureMap = '../assets/textures/planetsAndMoons/moons/Moon3_Texture.jpg'
        this.calistoNormalMap = '../assets/textures/planetsAndMoons/moons/Moon3_Normal.png'


        this.mesh = CelestialBodyFactory(this.radius, this.textureMap, this.textureNormalMap);

        const jupiterOrbit = createOrbitLine(sunRadius + this.orbitRadius, sunRadius + this.orbitRadius, 0xADFF2F, 100, 90);

        scene.add(jupiterOrbit);
        scene.add(this.mesh);

        this.moonsInfo = [
            { name: 'Ganimedes', radius: 0.413*radiusEarth, texture:this.ganimedesTextureMap, normalMap:this.ganimedesNormalMap,orbitRadius: 1070000,orbitSpeed: 0.001},
            { name: 'Europa', radius: 0.0044*radiusEarth, texture:this.deimosTextureMap, normalMap:this.deimosNormalMap, orbitRadius: 23460,orbitSpeed: 0.001},
            { name: 'Calisto', radius: 0.0044*radiusEarth, texture:this.deimosTextureMap, normalMap:this.deimosNormalMap, orbitRadius: 23460,orbitSpeed: 0.001},
        ];

        this.moons = {};

        this.moonsInfo.forEach((moonInfo) => {
            this.moons[moonInfo.name] = CelestialBodyFactory(moonInfo.radius, moonInfo.texture, moonInfo.normalMap);

            this.mesh.add(createOrbitLine(moonInfo.orbitRadius, moonInfo.orbitRadius, 0xffffff, 100, 90));
            scene.add(this.moons[moonInfo.name]);
        });
    }

    animate() {
        const clock = new THREE.Clock();
        const delta = clock.getDelta();

        this.mesh.rotation.y += this.rotationSpeed;  

        this.moonsInfo.forEach((moonInfo) => {
            orbitObjectAround(this.mesh, this.moons[moonInfo.name], moonInfo.orbitRadius, moonInfo.orbitSpeed);
        });
    }
}

export { Jupiter as Mars };
