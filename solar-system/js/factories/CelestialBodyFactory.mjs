import * as THREE from 'three';

function CelestialBodyFactory(radius, textureMap, normalMap = null) {
    const textureLoader = new THREE.TextureLoader();

    const material = new THREE.MeshPhongMaterial({
        map: textureLoader.load(textureMap),
    });

    material.map.colorSpace = THREE.SRGBColorSpace;

    if (normalMap) {
        material.normalMap = textureLoader.load(normalMap);
    }

    const geometry = new THREE.SphereGeometry(radius, 100, 50);
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

export { CelestialBodyFactory };
