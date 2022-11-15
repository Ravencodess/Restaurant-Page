const createContactPage = () =>{
    const container = document.createElement('div');
    container.id = 'contact';
    container.classList.add('contact-container');
    container.setAttribute('data-content', '');

    const createContact = (content, class1, class2) =>{
        const contact = document.createElement('div');
        contact.classList.add('contact');
        const contactDetails = (info) =>{
            const p = document.createElement('p');
            p.textContent = info;
            return p
        };

        const details = contactDetails(content);

        contact.appendChild(createIcon(class1, class2));
        contact.appendChild(details);
        return contact;
    };

    
    
    const ravenName = createContact('Raven','fa-solid', 'fa-user');
    const ravenNumber = createContact(`+2345678909876`, 'fa-solid', 'fa-phone');
    const ravenEmail = createContact(`raven@gmail.com`, 'fa-solid', 'fa-envelope');
    container.appendChild(ravenName);
    container.appendChild(ravenNumber);
    container.appendChild(ravenEmail);
    return container
};

const createIcon = (class1, class2) =>{
    const i = document.createElement('i');
    i.classList.add(class1);
    i.classList.add(class2);
    return i;
}
const loadContact = () =>{
    const main = document.getElementById('main');
    main.appendChild(createContactPage());

};

export default loadContact