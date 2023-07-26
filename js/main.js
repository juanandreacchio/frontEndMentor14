const toggleBtn = document.querySelector('.toggle-btn');
const circleBtn = document.querySelector('.btn-circle');
let mode = "mensual";
const basicText = document.querySelector('#basic-price');
const professionalText = document.querySelector('#professional-price');
const masterText = document.querySelector('#master-price');

toggleBtn.addEventListener('click',() =>{
    circleBtn.classList.remove('anually');
    if(mode === "mensual"){
        mode = "anual";
        circleBtn.classList.add('anually');
        basicText.innerHTML = '<span class="money">$</span> 199.99';
        professionalText.innerHTML = '<span class="money">$</span> 249.99';
        masterText.innerHTML = '<span class="money">$</span> 399.99';
    }
    else{
        mode = "mensual";
        circleBtn.classList.remove('anually');
        basicText.innerHTML = '<span class="money">$</span> 19.99';
        professionalText.innerHTML = '<span class="money">$</span> 24.99';
        masterText.innerHTML = '<span class="money">$</span> 39.99';
    }
})
