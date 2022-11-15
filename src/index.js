import runWebsite from './website'
import './styles/general.css'


runWebsite()

const navlist = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('[data-content]');

navlist.forEach(nav =>{
    nav.addEventListener('click', (e)=>{
        const target = document.getElementById(e.target.dataset.nav)
        if(e.target.matches('.nav-item')){
            tabs.forEach(tab =>{
                tab.classList.remove('active')
            })
            navlist.forEach(nav =>{
                nav.classList.remove('active')
            })
            nav.classList.toggle('active')
        }
        
        target.classList.add('active');
    })
})