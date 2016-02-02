console.log("ajax_fns loaded");

Requests = {
   baseUrl: "http://localhost:3000",
    // baseUrl: "https://clasadoo.herokuapp.com",
    addAcceptHeader: function(xhr, ajaxRequest) {
        xhr.setRequestHeader("Accept","application/json");
    },

    // saveNote: function (args, callback) {
    //     $.ajax({
    //         url: Requests.baseUrl + "/notes",
    //         type: "post",
    //         data: {
    //           "note":  args.note              
    //         },
    //         beforeSend: Requests.addAcceptHeader,
    //         success: function(resp){ callback && callback(resp) },
    //         error: function() { callback(false) }
    //     })
    // },
}
