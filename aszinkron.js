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

    getAllSzin(map) {
        $.ajax({
            url: "szinek.json",
            type: "GET",
            success: function (result) {
                result.typeColor.forEach((element) => {
                    for (let key in element) {
                        /* console.log(key + " " + element[key]); */
                        map.set(key, element[key]);
                    }
                });

                //cb(map);
            },
        });
    }
}
