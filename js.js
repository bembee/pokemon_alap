$(function () {
    const szuloElem = $(".tartalom");
    const sablonElem = $("section .sablon");
    const max = 50;
    const myAszinkron = new MyAszinkron();

    /* Aszinkron  */
    /*  aktPokemon();
    function aktPokemon(){
        for (i = 1; i < 51; i++) {
            let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
            myAszinkron.getAdat(apivegpont, pokemonLista, i);
        }
    }   

    function pokemonLista(pokemonok) {
        let node = sablonElem.clone().appendTo(szuloElem);
        const obj = new Pokemon(node, pokemonok);
    }  */

    /**Gyorsan és rendezetten */
    const pokemonTomb = [];
    const szinek = new Map();
    myAszinkron.getAllSzin(szinek);

    aktPokemon();
    function aktPokemon() {
        for (i = 1; i < max; i++) {
            let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
            myAszinkron.getAdat(apivegpont, pokemonLista, i);
        }
    }

    function pokemonLista(pokemonok) {
        if (pokemonTomb.length < max - 2) {
            pokemonTomb.push(pokemonok);
        } else {
            pokemonTomb.push(pokemonok);
            console.log(pokemonTomb);
            pokemonmegjelenit(pokemonTomb);
        }
    }

    function pokemonmegjelenit(tomb) {
        tomb.sort((a, b) => {
            return Number(a.id > b.id) - 0.5;
        });
        tomb.forEach((element) => {
            let node = sablonElem.clone().appendTo(szuloElem);
            console.log(element.types[0].type.name);
            //console.log(szinek);
            element.szin = szinek.get(element.types[0].type.name);
            const obj = new Pokemon(node, element);
        });
        sablonElem.remove();
    }

    /**rekurzio - Asszinkron kiegyensítve*/
    /*  sablonElem.remove();

    let i = 1;
    aktPokemon(i);
    function aktPokemon(i) {
        if (i <= max) {
            let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
            myAszinkron.getAdat(apivegpont, pokemonLista, i);
        }
    }

  

    function pokemonLista(pokemonok) {
        let node = sablonElem.clone().appendTo(szuloElem);
        const obj = new Pokemon(node, pokemonok);
        i++;
        aktPokemon(i);
    } */
});
