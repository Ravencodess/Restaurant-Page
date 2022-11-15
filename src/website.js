import loadHome from "./home";
import loadcontact from "./contact";
import loadMenu from "./menu";
import crest from './assets/ravenclaw crest.png'


const createHeader = (id) =>{
    const header = document.createElement('header');
    header.setAttribute('id', id);
    header.classList.add('header');

    const createTitle = (name) =>{
        const title = document.createElement('h1');
        title.textContent = name;
        return title;
    }

    const ravenCrest = document.createElement('img');
    ravenCrest.src = crest;
    
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container')
    titleContainer.appendChild(ravenCrest);
    titleContainer.appendChild(createTitle(`Crow's Nest Restaurant`))

    header.appendChild(titleContainer);
    header.appendChild(createNav('nav'));
    return header;
}

const createNav = (id) =>{
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
    nav.classList.add('nav');
    nav.classList.add('links');
    
    const createTab = (id, name) =>{
        const tab = document.createElement('div');
        tab.setAttribute('id', `${id}-nav`);
        tab.setAttribute('data-nav', id);
        tab.classList.add('nav-item');
        tab.textContent = name;

        return tab
    }

    const homeTab = createTab('home','HOME');
    homeTab.classList.add('active');
    const menuTab = createTab('menu','MENU');
    const contactTab = createTab('contact','CONTACT US');

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    return nav;
}

const createMain = (id) =>{
    const main = document.createElement('main');
    main.setAttribute('id', id);
    main.classList.add(id)

    return main;
}

const createFooter = (id) =>{
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    footer.classList.add(id)
    
    const createParagraph = (content) =>{
        const p = document.createElement('h3');
        p.textContent = content
        return p
    }

    const createLink = (link) =>{
        const l = document.createElement('a');
        l.setAttribute('href', link)
        l.appendChild(createIcon())
        return l
    }

    const createIcon = () =>{
        const i = document.createElement('i');
        i.classList.add("fa-brands");
        i.classList.add("fa-github");
        return i;
    }

    footer.appendChild(createParagraph(`Copyright © ${new Date().getFullYear()} Raven.js`))
    footer.appendChild(createLink('https://github.com/Ravencodess'))
    return footer
}

const runWebsite = () =>{
    const content = document.getElementById('content');
    content.appendChild(createHeader('header'));
    content.appendChild(createMain('main'));
    content.appendChild(createFooter('footer'));
    loadHome()
    loadMenu()
    loadcontact()
}



export default runWebsite