class Pokemon {
    constructor(node, adat, i) {
        this.adat = adat;
        this.adat.i = i;
        this.node = node;
        this.id = this.node.children(".id");
        this.Nev = this.node.children(".nev");
        this.Kep = this.node.children(".kep");
        this.Kepesseg = this.node.children(".kepesseg");
        this.Gomb = this.node.children(".kivalaszt");

        this.setAdat(adat);

        this.Gomb.on("click", () => {
            this.kattintasTrigger();
        });
    }
    setAdat(adat) {
        this.id.text(adat.id);
        this.Nev.text(adat.name);
        this.Kep.attr("src", adat.sprites.front_default);
        this.Kepesseg.text(adat.abilities[0].ability.name);
        this.Gomb.text("Kiválaszt");
        this.node.css("backgroundColor", adat.szin);
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("szereploKattintas", {
            detail: this.adat,
        });
        window.dispatchEvent(esemeny);
    }
}
