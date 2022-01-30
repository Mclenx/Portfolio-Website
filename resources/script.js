const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navList');

toggleButton.addEventListener('click',() =>{
    naviList.classList.toggle('active');
})