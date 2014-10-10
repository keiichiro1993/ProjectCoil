function HeapCoins() {
    this.coin = new Array();
    this.createMesh = function() {
        var mesh = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );
        // scene.add( mesh );

        var coins = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );

        for (var i = 0; i < 5; i++) {
            var hsl = new THREE.Color().setHSL(Math.random(), 1, 0.5);
            this.coin[i] = new THREE.Mesh(
                new THREE.CylinderGeometry(0.5,0.5,0.1,32),
                new THREE.MeshPhongMaterial( { color: hsl, ambient: 0x000000 } )
            );

            this.coin[i].position.set(0,0,i+0.5);
            this.coin[i].rotation.set(0,0,Math.random() * Math.PI);

            coins.add( this.coin[i] );
        }

        mesh.add( coins );

        mesh.scale.set(200,200,200);

        return mesh;
    }

    this.changeVisible = function (b) {
        for (var i = this.coin.length - 1; i >= 0; i--) {
            this.coin[i].visible = b;
        }
    }
}