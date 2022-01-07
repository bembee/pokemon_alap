class PokemonController {
  constructor() {

    const myAszinkron = new MyAszinkron();
    let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + 1;
    myAszinkron.getAdat(apivegpont, this.pokemonLista);
  }

  pokemonLista(pokemonok) {
    const szuloElem = $(".tartalom");
    const sablonElem = $("section .sablon");
    let node = sablonElem.clone().appendTo(szuloElem);
    const obj = new Pokemon(node, pokemonok);
    sablonElem.remove();
  }
}
