import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export class Sun {

    constructor(){
        this.sphereGeometry = new THREE.SphereGeometry(1.3, 32, 32);
        this.textureLoader = new THREE.TextureLoader();
        this.texture = this.textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzRMobKtKRxKRXQfCFCOydiHWqA2aTGsGWwPILo70eg&s")
        this.material = new THREE.MeshBasicMaterial({color: 0xffffff, map: this.texture});
    
        this.sphere = new THREE.Mesh(this.sphereGeometry, this.material);

        this.sphere.position.x = 0
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