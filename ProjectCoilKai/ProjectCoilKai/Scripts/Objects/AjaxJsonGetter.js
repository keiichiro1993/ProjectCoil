function AjaxJsonGetter(markerId, url) {
    console.log("loading in progress");
    var mymorph = new MyMorph();
    $.ajax({
        type: "GET",
        url: url,
        data: { markerId: markerId },
        dataType: "json",
        cache: false,
        async: false,
        success: function (data) {
            if (data != null) {
                var loader = new THREE.JSONLoader();
                var result = loader.parse(data, null);
                mymorph.morph = JsonGetterCallback(result.geometry, result.materials);
                mymorph.markerId = markerId;
                mymorph.checkedFlg = false;
                mymorph.animationFlg = true;
                console.log("loaded!!");
            }
            else {
                console.log("requested model is unknown");
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            // エラー処理
            console.log("An error has occured while loading json.");
        }
    });
    $('#loadingModal').modal('hide');
    return mymorph;
}

function JsonGetterCallback(geometry, materials) {
    var material = materials[0];
    material.morphTargets = true;;

    var faceMaterial = new THREE.MeshFaceMaterial(materials);
    var morph = new THREE.MorphAnimMesh(geometry, faceMaterial);
    morph.duration = 1000;  // one second duration

    var s = 50
    morph.scale.set(s, s, s);
    morph.position.set(0, 0, -200);
    //scene.add(morph);
    //morphs.push(morph);
    return morph;
}