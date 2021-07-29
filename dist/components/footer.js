// Define a custom element
class Footer extends HTMLElement {
    constructor() {
        super();
    }


    // Lifecycle callback
    connectedCallback() {
        this.innerHTML = `
        <footer id="main-footer">Copyright &copy; 2021</footer>
        `;
    }
}

// register custom element
customElements.define('footer-component', Footer);