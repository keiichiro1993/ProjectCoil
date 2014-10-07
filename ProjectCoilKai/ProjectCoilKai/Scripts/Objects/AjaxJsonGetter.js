function AjaxJsonGetter(markerId) {
    $.ajax({
        type: "GET",
        url: "ajax-test.html",
        data: new {markerId: markerId},
        dataType: "json",
        cache: false,
        success: function (data) {

        },
        error: function (xhr, textStatus, errorThrown) {
            // エラー処理
        }
    });
}