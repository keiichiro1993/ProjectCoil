function AjaxJsonGetter(markerId, url) {
    console.log("loading in progress");
    var mymorph = new MyMorph();
    $.ajax({
        type: "GET",
        url: url,
        data: { markerId: markerId },
        dataType: "json",
        cache: false,
        success: function (data) {
            var loader = new THREE.JSONLoader();
            var result = loader.parse(data, null);
            mymorph.morph = JsonGetterCallback(result.geometry, result.materials);
            mymorph.markerId = markerId;
            console.dir(mymorph);
            console.log("loaded!!");
        },
        error: function (xhr, textStatus, errorThrown) {
            // エラー処理
            console.log("An error has occured while loading json.");
        }
    });
    return mymorph;
}

function JsonGetterCallback(geometry, materials) {
    var material = materials[0];
    material.morphTargets = true;;

    var faceMaterial = new THREE.MeshFaceMaterial(materials);
    var morph = new THREE.MorphAnimMesh(geometry, faceMaterial);
    morph.duration = 1000;  // one second duration

    var s = 100
    morph.scale.set(s, s, s);
    morph.position.set(0, 0, -200);
    /*scene.add(morph);
    morphs.push(morph);*/
    return morph;
}