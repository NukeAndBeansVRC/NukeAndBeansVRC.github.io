class Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
        <style>
        .topnav{
            background-color: #222;
            width: 100%;
            height: 48px;
            overflow: hidden;
        }
        .topnav a{
            display: block;
            float: left;
            color: #ccc;
            text-align:center;
            text-decoration: none;
            width: 100px;
            height: 48px;
        }

        .topnav a:hover{
            color: #222;
            background-color: #aaa;
        }

        .current-link a{
            color: #ccc;
            background-color: #aaa;
        }
        </style>

        <script>
        currentLinks = document.querySelectorAll('a[href="'+'document.URL+'"]');
        currentLinks.forEach(link => link.className += ' current-link');
        </script>

        <nav class="topnav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
        </nav>
        `;
    }
}

customElements.define("nav-bar", Header);
