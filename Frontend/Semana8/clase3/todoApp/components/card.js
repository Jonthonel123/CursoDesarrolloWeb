class Card extends HTMLElement {
  constructor() {
    super();
    this.class = "card p-3";
    this.classname = "";
  }
  static get observedAttributes() {
    return ["class", "classname", "shadow"];
  }
  attributeChangedCallback(prop, oldvalue, newvalue) {
    this[prop] = newvalue;
    if (prop == "shadow") {
      this.classList.remove("shadow");
      if (newvalue == "true") this.class += " shadow";
    }
  }
  connectedCallback() {
    if (this.class) {
      const lista_de_clases = this.class.split(" ");
      lista_de_clases.forEach((xclass) => {
        this.classList.add(xclass);
      });
    }
    if (this.classname) {
      const lista_de_clases = this.classname.split(" ");
      lista_de_clases.forEach((xclass) => {
        this.classList.add(xclass);
      });
    }
  }
  disconnectedCallback() {}
}
customElements.define("my-card", Card);
