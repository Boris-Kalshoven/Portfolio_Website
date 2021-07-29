// Define a custom element
class Footer extends HTMLElement {
    constructor() {
        super();
    }


// Lifecycle callback
    connectedCallback() {
        this.innerHTML = `
        <style>
            nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
            }
            
            ul li {
            list-style: none;
            display: inline;
            }
            
            a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
            }
            
            a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
            }
        </style>
        <footer>
            <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            </nav>
        </footer>
        `;
    }
}

// register custom element
customElements.define('footer-component', Footer);