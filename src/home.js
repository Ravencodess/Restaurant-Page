const createHome = () =>{
    const home = document.createElement('div');
    home.id = 'home'
    home.classList.add('home');
    home.classList.add('active');
    home.setAttribute('data-content', '')

    const createParagraph = (content) => {
        const p = document.createElement('p');
        p.textContent = content;
        return p;
    };
    const orderBtn = document.createElement('button');
    orderBtn.classList.add('orderBtn');
    orderBtn.textContent = 'ORDER NOW';
    orderBtn.addEventListener('click', ()=>{
        document.querySelector('.home').classList.remove('active');
        document.getElementById('home-nav').classList.remove('active');
        document.getElementById('menu-nav').classList.add('active');
        document.querySelector('.menu').classList.add('active');

    })
    
    const description = document.createElement('div');
    description.classList.add('description');

    description.appendChild(createParagraph(`Welcome to Africa's very own wizardry themed restuarant`));
    description.appendChild(createParagraph(`Where we serve the finest spell bound cuisine`));
    description.appendChild(createParagraph(`as well as the most tasty indigenous African dishes`));
    description.appendChild(orderBtn)

    home.appendChild(description)

    return home;
}

const loadHome = () => {
    const main = document.getElementById('main');
    main.appendChild(createHome());
}

export default loadHome