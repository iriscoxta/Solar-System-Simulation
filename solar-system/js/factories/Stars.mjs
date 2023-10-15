import * as THREE from 'three';

class Stars {
    constructor(scene, radius) {
        this.addStars(scene, radius);
    }

    addStars(scene, radius) {
        const starsGeometry = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

        const vertices1 = [];
        const vertices2 = [];

        const vertex = new THREE.Vector3();

        //era 250
        for (let i = 0; i < 100; i++) {
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar(radius);

            vertices1.push(vertex.x, vertex.y, vertex.z);
        }
        //era 1500
        for (let i = 0; i < 500; i++) {
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar(radius);

            vertices2.push(vertex.x, vertex.y, vertex.z);
        }

        starsGeometry[0].setAttribute('position', new THREE.Float32BufferAttribute(vertices1, 3));
        starsGeometry[1].setAttribute('position', new THREE.Float32BufferAttribute(vertices2, 3));

        const starsMaterials = [
            new THREE.PointsMaterial({ color: 0x9c9c9c, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x9c9c9c, size: 1, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x7c7c7c, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x838383, size: 1, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x5a5a5a, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x5a5a5a, size: 1, sizeAttenuation: false })
        ];

        for (let i = 10; i < 30; i++) {
            const stars = new THREE.Points(starsGeometry[i % 2], starsMaterials[i % 6]);

            stars.rotation.x = Math.random() * 6;
            stars.rotation.y = Math.random() * 6;
            stars.rotation.z = Math.random() * 6;
            stars.scale.setScalar(i * 10);

            stars.matrixAutoUpdate = false;
            stars.updateMatrix();

            scene.add(stars);
        }
    }
}

export { Stars };
