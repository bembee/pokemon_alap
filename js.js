$(function () {
    const szuloElem = $(".tartalom");
    const sablonElem = $("section .sablon");

    const myAszinkron = new MyAszinkron();

    let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + 1;
    myAszinkron.getAdat(apivegpont, pokemonLista);

    function pokemonLista(pokemonok) {
        let node = sablonElem.clone().appendTo(szuloElem);
        const obj = new Pokemon(node, pokemonok);
        sablonElem.remove();
    }
});
