// ---------------------
//      lock icons  
// ---------------------
let lock = document.querySelector('.login-sign');
// console.log(lock.firstElementChild.firstChild);
lock.addEventListener('mouseover', (e) => {
    e.currentTarget.firstElementChild.firstChild.setAttribute('src', './assets/icons8-lock(1).svg')
})
lock.addEventListener('mouseleave', (e) => {
    e.currentTarget.firstElementChild.firstChild.setAttribute('src', './assets/icons8-lock.svg')
})

// -------------------------
//       nav bar        
// -------------------------
let manu = document.querySelector('#manu');
let nav_List = document.querySelector('header > nav > ul');
manu.addEventListener('click', (e) => {
    if (e.currentTarget.className === 'toggle') {
        nav_List.style.top = '5.25rem';
        nav_List.style.right = '0%';
        e.currentTarget.className = '';
    } else {
        e.currentTarget.className = 'toggle';
        nav_List.style.top = '-8.85rem';
        nav_List.style.right = '0%';
    }
})

// ----------------------------
//         icon change
// ----------------------------
let buy_Btn = document.querySelector('.job_grid_version .content button');

let buy_Text = document.querySelector('.job_grid_version .content button p');

let buy_Icon = document.querySelector('.job_grid_version .content button img');


buy_Btn.addEventListener('mouseover',()=>{
    if(buy_Btn.className === 'change'){
        buy_Btn.style.background = '#333';
        buy_Text.style.color = '#fff';
        buy_Icon.setAttribute('src','./assets/cart (2).png')
        buy_Btn.className === ''
    }
})
buy_Btn.addEventListener('mouseleave',()=>{
        buy_Btn.style.background = '#fff';
        buy_Text.style.color = '#333';
        buy_Icon.setAttribute('src','./assets/cart.png')
        buy_Btn.classList.add('change')
})


// ------------------------------------
//             footer icons
// ------------------------------------
let footer_icons = document.querySelectorAll('footer .footer .logo_contect .social_icon > img');
footer_icons.forEach((icons)=>{
    icons.addEventListener('mouseover',(e)=>{
        if(e.target.classList[1] === 'icon_4'){
            e.target.setAttribute('src','./assets/pinterest.png') 
        }
        if(e.target.classList[1] === 'icon_3'){
            e.target.setAttribute('src','./assets/linked-big-square-logo.png') 
        }
        if(e.target.classList[1] === 'icon_2'){
            e.target.setAttribute('src','./assets/twitter-sign.png') 
        }
        if(e.target.classList[1] === 'icon_1'){
            e.target.setAttribute('src','./assets/facebook.png') 
        }
    })
})
footer_icons.forEach((icons)=>{
    icons.addEventListener('mouseleave',(e)=>{
        if(e.target.classList[1] === 'icon_4'){
            e.target.setAttribute('src','./assets/pinterest (1).png') 
        }
        if(e.target.classList[1] === 'icon_3'){
            e.target.setAttribute('src','./assets/linked-big-square-logo (1).png') 
        }
        if(e.target.classList[1] === 'icon_2'){
            e.target.setAttribute('src','./assets/twitter-sign (1).png') 
        }
        if(e.target.classList[1] === 'icon_1'){
            e.target.setAttribute('src','./assets/facebook (1).png') 
        }
    })
})