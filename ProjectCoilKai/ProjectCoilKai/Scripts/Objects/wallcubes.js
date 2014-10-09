function wallCubes() {
    var mesh = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );
    // scene.add( mesh );

    var cubeGeometry = new Array;
    cubeGeometry[0] = new THREE.BoxGeometry(2, 2, 2);
    cubeGeometry[1] = new THREE.BoxGeometry(4, 4, 4);
    cubeGeometry[2] = new THREE.BoxGeometry(8, 8, 8);

    var cubeMaterial = new Array;
    cubeMaterial[0] = new THREE.MeshPhongMaterial( { color: 0x40ff40, ambient: 0x00ff00 } );
    cubeMaterial[1] = new THREE.MeshPhongMaterial( { color: 0x40bf40, ambient: 0x00bf00 } );
    cubeMaterial[2] = new THREE.MeshPhongMaterial( { color: 0x407f40, ambient: 0x007f00 } );
    cubeMaterial[3] = new THREE.MeshPhongMaterial( { color: 0x7fff40, ambient: 0x7fff00 } );

    // 正規乱数の生成 http://lostlinksearch.net/blog/2012/10/javascript%E3%81%A7%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83%E3%81%AB%E5%BE%93%E3%81%86%E4%B9%B1%E6%95%B0%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B/
    var nrn = new Array;
    for (var i = 0; i < 270; i++) {
      var x = Math.random();
      var y = Math.random();

      var z1 = Math.sqrt(-2 * Math.log(x)) * Math.cos(2 * Math.PI * y);
      var z2 = Math.sqrt(-2 * Math.log(x)) * Math.sin(2 * Math.PI * y);

      nrn.push( Math.floor(z1*6)*2 + 0.05 - Math.random()*0.1 );
      nrn.push( Math.floor(z2*6)*2 + 0.05 - Math.random()*0.1 );
    }

    var cubes = new THREE.Mesh( new THREE.Geometry(), new THREE.MeshPhongMaterial() );

    var cube = new Array;
    for (var i = 0; i < 180; i++) {
        var g, m;
        var r1 = Math.random();
        if (r1 <= 0.50) {
            g = 0;
        } else if (r1 <= 0.97) {
            g = 1;
        } else {
            g = 2;
        }
        var r2 = Math.floor( Math.random() * 4 );
        m = r2;
        cube[i] = new THREE.Mesh( cubeGeometry[g], cubeMaterial[m] );

        cube[i].position = {x: nrn[i*3], y: nrn[i*3+1], z: nrn[i*3+2]};
        if (g == 0) {
            cube[i].position.x += 1;
            cube[i].position.y += 1;
            cube[i].position.z += 1;
        } else {
        }
        cubes.add( cube[i] );
    }

    cubes.rotation.set(0.61547970867, 0.78539816339, 0);

    mesh.add( cubes );

    mesh.scale.set(40,40,20);

    return mesh;
}
