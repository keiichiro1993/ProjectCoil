function SpiralSpheres() {
    this.sphere = new Array;
    this.createMesh = function() {
        var mesh = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );
        // scene.add( mesh );

        var spiral = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );

        for (var i = 0; i < 24; i++) {
            var hsl = new THREE.Color().setHSL(Math.random(), 1, 0.5);
            this.sphere[i] = new THREE.Mesh(
                new THREE.SphereGeometry(1),
                new THREE.MeshPhongMaterial( { color: hsl, ambient: 0x000000 } )
            );

            this.sphere[i].position.set(3*Math.sin(i),3*Math.cos(i),i+10);
            // this.sphere[i].rotation.set(0,0,0);

            spiral.add( this.sphere[i] );
        }

        mesh.add( spiral );

        mesh.scale.set(30,30,30);

        return mesh;
    }

    this.changeVisible = function (b) {
        for (var i = this.sphere.length - 1; i >= 0; i--) {
            this.sphere[i].visible = b;
        }
    }
}
