function HeapCubes() {
    this.cube = new Array();
    this.createMesh = function () {
        var mesh = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );
        // scene.add( mesh );

        var cubes = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );

        for (var i = 0; i < 5; i++) {
            var hsl = new THREE.Color().setHSL(Math.random(), 1, 0.5);
            this.cube[i] = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshPhongMaterial( { color: hsl, ambient: 0x000000 } )
            );

            this.cube[i].position.set(0,0,i+0.5);
            this.cube[i].rotation.set(0,0,Math.random() * Math.PI);

            cubes.add( this.cube[i] );
        }

        mesh.add( cubes );

        mesh.scale.set(200,200,200);

        return mesh;
    }

    this.changeVisible = function (b) {
        for (var i = this.cube.length - 1; i >= 0; i--) {
            this.cube[i].visible = b;
        }
    }
}