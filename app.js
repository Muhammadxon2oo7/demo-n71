let hamburger = document.querySelector('.hamburger')
let ul = document.querySelector('.ul')
hamburger.addEventListener('click',()=>{
    console.log('salom');
    document.querySelector('.navwrapper').classList.toggle('display')
})
ul.addEventListener('click',()=>{
    console.log('salom');
    document.querySelector('.navwrapper').classList.toggle('display')
})