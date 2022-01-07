class MyAszinkron {
    constructor() {}

    getAdat(vegpont, myCallback) {
        let obj = {};
        $.ajax({
            url: vegpont,
            type: "GET",
            success: function (result) {
                obj = result;
                
                myCallback(obj);
            },
        });
    }

   
}
