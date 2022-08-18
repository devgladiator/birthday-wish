let valobtn = document.getElementById('valo');
let valo2btn=document.getElementById('valo2');
let chooseValo=document.getElementById('chooseValo');
let chooseValo2=document.getElementById('chooseValo2');
let okbtn = document.getElementById('ok');
let janibtn = document.getElementById('janibtn');
let janinabtn = document.getElementById('janinabtn');
let newpart = document.getElementById('new-part');
let datesay = document.getElementById('datesay');
let dateok = document.getElementById('dateok');
let Openbtn = document.getElementById('open');
let overlay1 = document.getElementById('overlay1');
let overlay2 = document.getElementById('overlay2');
let Card1 = document.getElementById('card1');
let Card2 = document.getElementById('card2');
let Card3 = document.getElementById('card3');
let Card4 = document.getElementById('card4');
let Card5 = document.getElementById('card5');
let Card6 = document.getElementById('card6');
let Card7 = document.getElementById('card7');
let Card8 = document.getElementById('card8');
let choose = document.getElementById('choose');
let audio = document.getElementById("audio");
// let briyani = document.getElementById("briyani");

let firstPart = document.getElementById('first-part');
let thirdPart = document.getElementById('third-part');
let secondPart = document.getElementById('second-part');
let fourthPart = document.getElementById('fourth-part');

let image =document.getElementById('image-block');

janibtn.style.display='none';
janinabtn.style.display='none';


function valo (){
    valobtn.style.display='none';
    valo2btn.style.display='none';
    chooseValo.style=` display:inherit;`;
    janibtn.style.display='inline-block';
    janinabtn.style.display='inline-block';
    firstPart.style.display='none';
    secondPart.style.height='100vh';
}
function valo2 (){
    valobtn.style.display='none';
    valo2btn.style.display='none';
    chooseValo2.style=` display:inherit;`;
    okbtn.style.display='inline-block';
    firstPart.style.display='none';
    thirdPart.style.height='100vh';
}
function ok(){
    chooseValo.style='display:inherit';
    janibtn.style.display='inherit';
    janinabtn.style.display='inherit';
    thirdPart.style.display='none';
    secondPart.style.height='100vh';
}
function jani(){
    fourthPart.style.display='flex';
    fourthPart.style.height='auto';
    secondPart.style.display='none';
}

function janina(){
    datesay.style.display= 'inherit';
    dateok.style.display= 'inherit';
    secondPart.style.display= 'none';
    newpart.style.height = '100vh';
}

function dateokay(){
    fourthPart.style.display='flex';
    fourthPart.style.height='auto';
    newpart.style.display = 'none'
}

Card1.addEventListener('click' , function(){
    Card1.classList.toggle('active');
    Card2.classList.remove('active');
    Card4.classList.remove('active');
    Card5.classList.remove('active');
    Card6.classList.remove('active');
    Card7.classList.remove('active');
    Card8.classList.remove('active');
})

Card2.addEventListener('click' , function(){
    Card1.classList.remove('active');
    Card2.classList.toggle('active');
    Card4.classList.remove('active');
    Card5.classList.remove('active');
    Card6.classList.remove('active');
    Card7.classList.remove('active');
    Card8.classList.remove('active');
})

Card4.addEventListener('click' , function(){
    briyani.play();
    Card4.classList.toggle('active');
    Card2.classList.remove('active');
    Card1.classList.remove('active');
    Card5.classList.remove('active');
    Card6.classList.remove('active');
    Card7.classList.remove('active');
    Card8.classList.remove('active');
})

Card5.addEventListener('click' , function(){
    Card5.classList.toggle('active');
    Card1.classList.remove('active');
    Card2.classList.remove('active');
    Card4.classList.remove('active');
    Card6.classList.remove('active');
    Card7.classList.remove('active');
    Card8.classList.remove('active');
})

Card6.addEventListener('click' , function(){
    briyani.play();
    Card6.classList.toggle('active');
    Card1.classList.remove('active');
    Card2.classList.remove('active');
    Card4.classList.remove('active');
    Card5.classList.remove('active');
    Card7.classList.remove('active');
    Card8.classList.remove('active');
})

Card7.addEventListener('click' , function(){
    Card7.classList.toggle('active');
    Card1.classList.remove('active');
    Card2.classList.remove('active');
    Card4.classList.remove('active');
    Card6.classList.remove('active');
    Card5.classList.remove('active');
    Card8.classList.remove('active');
})

Card8.addEventListener('click' , function(){
    briyani.play();
    Card8.classList.toggle('active');
    Card1.classList.remove('active');
    Card2.classList.remove('active');
    Card4.classList.remove('active');
    Card6.classList.remove('active');
    Card7.classList.remove('active');
    Card5.classList.remove('active');
})


Card3.addEventListener('click' , function(){
    audio.play();
    Card3.classList.toggle('maincard');
    Card1.style.display='none';
    Card2.style.display='none';
    Card4.style.display='none';
    Card5.style.display='none';
    Card6.style.display='none';
    Card7.style.display='none';
    Card8.style.display='none';
    Card3.style.display='none';
    choose.style.display= 'none';
    image.style.display= 'flex'
})

