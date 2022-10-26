class Card extends HTMLElement {
  // como esta clase tiene un extends requerimos de un super
  constructor() {
    // usando supper() dentro del contructur vamos a podrear atributos propios
    super();
    this.title=""
    this.message=""
    this.img=""
  }

  static get observedAttributes(){
    return ['title','message','img']
  }
  attributeChangedCallback(name,oldvalue,newvalue){
    switch(name){
      case "title":
        this.title=newvalue
        break;
        default: break
    }
  }
  // Para poder asignar html dentro de mi tag
  // debemos llamar a la funcion connectedCallback()

  // esta funcion se ejecuta de forma automatica
  // cuando nuestro component se crea en html
  connectedCallback() {
    this.classList.add("col-12","col-sm-4","col-md-3");
    this.innerHTML = `
      <div class="card mt-5" style="width=18rem">
        <img width="100%" src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/lionel-messi-gettyimages-1186194253.jpg?quality=100&strip=info&w=460&h=260&crop=1" /> 
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">lMessiiiii MessssiMSSDasjdnasjbdhasbdjdjasd</p>
            <button class="btn btn-link">Leer mas </button>
        </div>
      </div>
      `;
  }
}
customElements.define("my-card", Card);
