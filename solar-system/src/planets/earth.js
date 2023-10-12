import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Earth {

    constructor(){
        this.sphereGeometry = new THREE.SphereGeometry(1.3, 32, 32);
        this.textureLoader = new THREE.TextureLoader();
        this.texture = this.textureLoader.load("https://images.unsplash.com/photo-1542732056-648731297c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvbmUlMjB0ZXh0dXJlfGVufDB8fDB8fHww&w=1000&q=80")
        this.material = new THREE.MeshBasicMaterial({color: 0xffffff, map: this.texture});
    
        this.sphere = new THREE.Mesh(this.sphereGeometry, this.material);

        this.sphere.position.x = 5
        this.sphere.position.y = 0
        this.sphere.position.z = 0
    }

    get getMesh(){
        return this.sphere
    }
    
    animate(){
        this.sphere.rotation.x += 0.02;
    }




}