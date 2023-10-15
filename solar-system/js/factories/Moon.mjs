import * as THREE from 'three';

class Moon {
    constructor(geometry, radius, rotationSpeed, clock) {
        this.moonScale = 0.273;
        this.rotationSpeed = rotationSpeed;
        this.clock = clock;
        this.OrbitRadius = radius * 3;

        const textureLoader = new THREE.TextureLoader();

        const materialMoon = new THREE.MeshPhongMaterial({

            map: textureLoader.load('../assets/textures/planetsAndMoons/moon/moon_1024.jpg')

        });
        materialMoon.map.colorSpace = THREE.SRGBColorSpace;

        this.meshMoon = new THREE.Mesh(geometry, materialMoon);
        this.meshMoon.position.set(radius * 5, 0, 0);
        this.meshMoon.scale.set(this.moonScale, this.moonScale, this.moonScale);
    }

    animate() {
        const delta = this.clock.getDelta();

        this.meshMoon.rotation.y += this.rotationSpeed * delta;
    }
}

export { Moon };