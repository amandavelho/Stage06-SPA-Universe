 export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const {pathname} = window.location
        const route = this.routes[pathname] 

        const links = document.querySelectorAll("a");
        const container = document.getElementById("container")


        switch (window.location.pathname) {
          case "/home":
            links[0].classList.add("active");
            links[1].classList.remove("active");
            links[2].classList.remove("active");

            container.classList.add("bgHome")
            container.classList.remove("bgUniverse")
            container.classList.remove("bgExplorer")
            break;
          case "/about":
            links[0].classList.remove("active");
            links[1].classList.add("active");
            links[2].classList.remove("active");

            container.classList.remove("bgHome")
            container.classList.add("bgUniverse")
            container.classList.remove("bgExplorer")
            break;
          case "/exploration":
            links[0].classList.remove("active");
            links[1].classList.remove("active");
            links[2].classList.add("active");

            container.classList.remove("bgHome")
            container.classList.remove("bgUniverse")
            container.classList.add("bgExplorer")
            break;
          default:
            alert('Página não encontrada')
            break;
        }
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}

