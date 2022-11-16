import amalaImg from "../dist/assets/amala.jpg";
import jollof from "../dist/assets/jollof.jpg";
import fried from "../dist/assets/fried rice.jpg";
import yam from "../dist/assets/yam and egg.jpg";
import spagImg from "../dist/assets/spag.jpg";
import ewa from "../dist/assets/ewa.jpg";
import plantain from "../dist/assets/plantain.jpg";
import poundedYam from "../dist/assets/poundedyam.jpg";

const createMenu = () =>{
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-content', '');

    const amala = createMenuItem(amalaImg, 'Amala and Ewedu', '₦1000', 'A south-western dish made from fine yam flour ')
    const jollofRice = createMenuItem(jollof, 'Jollof Rice', '₦2500', 'Critically acclaimed best jollof on the continent')
    const friedRice = createMenuItem(fried, 'Fried Rice', '₦2000', 'It\'s available everyday not only on christmas!')
    const yamEgg = createMenuItem(yam, 'Yam and Eggs', '₦1200', 'Known to be the meal that everyone enjoys')
    const spag = createMenuItem(spagImg, 'Spaghetti Bolognese', '₦900', 'Enjoy it stir fried just as you like it!')
    const ewaAgoyin = createMenuItem(ewa, 'Ewa-Agoyin', '₦500', 'A dish of mashed beans seasoned with palm oil and a lot of yumminess')
    const plantainPorrige = createMenuItem(plantain, 'Plantain Porridge', '₦1250', 'It tastes great while still hot')
    const egusi = createMenuItem(poundedYam, 'Pounded Yam and Egusi', '₦1500', 'Come enjoy the fastest selling dish in this part of the world!')
    
    menu.appendChild(amala);
    menu.appendChild(jollofRice);
    menu.appendChild(friedRice);
    menu.appendChild(yamEgg);
    menu.appendChild(spag);
    menu.appendChild(ewaAgoyin);
    menu.appendChild(plantainPorrige);
    menu.appendChild(egusi);
    return menu
}

const createMenuItem = (image, title, price, description) =>{
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    const foodImage = document.createElement('img');
    foodImage.src = image;

    const foodTitle = document.createElement('p');
    foodTitle.textContent = title;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    const foodInfo = document.createElement('span');
    foodInfo.textContent = description;

    foodCard.appendChild(foodImage);
    foodCard.appendChild(foodTitle);
    foodCard.appendChild(foodPrice);
    foodCard.appendChild(foodInfo);

    return foodCard;
}

const loadMenu = () =>{
    const main = document.getElementById('main');
    main.appendChild(createMenu())
}

export default loadMenu