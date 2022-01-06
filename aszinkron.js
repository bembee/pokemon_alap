class MyAszinkron {
    constructor() {}

    getAdat(vegpont, myCallback) {
        let tomb = [];
        $.ajax({
            url: vegpont,
            type: "GET",
            success: function (result) {
                tomb = result;
                
                myCallback(tomb);
            },
        });
    }

   
}
