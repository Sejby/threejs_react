import React, { Component } from 'react'
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export class Scene extends Component {
    componentDidMount(){
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
        
        this.mount.appendChild(this.renderer.domElement)

        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.setZ(30)


        var geometry = new THREE.DodecahedronGeometry(10,0)
        var material = new THREE.MeshStandardMaterial({color: 0x72d4db})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)        

        const grid = new THREE.GridHelper(50,50)
        this.scene.add(grid)
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 10);
        this.scene.add(light)
        //const pointLight = new THREE.PointLight(0xffffff, 100, 50)
        //pointLight.position.set(5,5,5)
        // const lighthelper = new THREE.HemisphereLightHelper(light)
        // this.scene.add(lighthelper)
        

        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        this.animation()
        this.renderer.render(this.scene, this.camera)
       
    }

    animation = () => {
        requestAnimationFrame(this.animation)
        this.cube.rotation.x += 0.006
        this.cube.rotation.y += 0.006
        this.cube.rotation.z += 0.006        
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }

  render() {
    return (
      <div
        ref={mount => {
            this.mount = mount;
        }}
      />
    )
  }
}

export default Scene;