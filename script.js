console.log('hello');

let items = document.querySelectorAll('.item');
let body = document.querySelector('.body');
let overlay = document.querySelector('.over');
let phone = '';
let money = document.querySelectorAll('.money');
let price = document.querySelector('.price');


//
// PREVENT SENDING ON ENTER
//(Important staff)
//

document.querySelector('body').addEventListener('keydown', function PreventSending(e) {
    if (e.keyCode == 13){
    e.preventDefault();
    }
 })   



//Identify devise

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
        break;
       }
   }
   return flag;
}



var u = navigator.userAgent;
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
phone = 'Android';
} 
else if (u.indexOf('iPhone') > -1) {
   phone = 'iPhone';
} 
else if (u.indexOf('Windows Phone') > -1) {
   phone = 'winphone';
}




console.log(navigator.userAgent);




if (IsPC() == false) {

// Show description

    items.forEach(b=>b.addEventListener('click', function ShowDescription() {
        let a = '.' + this.getAttribute('num');
        
        document.querySelector(a).classList.add('show-description');
        body.append(overlay);
        overlay.classList.add('overlay');
        console.log(a);
        body.style.overflow = 'hidden';
    }));


// Show price

    money.forEach(с=>с.addEventListener('click', function ShowPrice() {
        
        price.classList.add('show-price');
        overlay.classList.add('overlay');
        console.log('2222222');
    }));



// Close description

    overlay.onclick = function () {
        closeDescription();

    }


function closeDescription() {
    try {
        document.querySelector('.show-description').classList.remove('show-description');    
    } catch (error) {
        document.querySelector('.show-price').classList.remove('show-price');
    }
    
    
    overlay.classList.remove('overlay');
    
    body.style.overflow = 'visible';
}


const screenWidth = window.innerWidth;


console.log(IsPC()) 
console.log(phone)
console.log(screenWidth)







// document.querySelector('.test1').innerHTML = screenWidth;
// document.querySelector('.test2').innerHTML = phone;

}


// Reports auto sending block

let autoSend = document.querySelector('#autoReportsYes');
let auto = document.querySelector('.auto');


document.onclick = function() {
    if (autoSend.checked) {
        console.log('yes');
        auto.classList.remove('hide');
    }
    else{
        auto.classList.add('hide');
    }
}

