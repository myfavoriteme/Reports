console.log('hello');

let items = document.querySelectorAll('.item');
let body = document.querySelector('.body');
let overlay = document.createElement('div');
let phone = '';


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




if (phone == "Android") {

// Show description

    items.forEach(b=>b.addEventListener('click', function ShowDescription() {
        let a = '.' + this.getAttribute('num');
        
        document.querySelector(a).classList.add('show-description');
        body.append(overlay);
        overlay.classList.add('overlay');
        console.log(a);
    }));




// Close description

overlay.onclick = function () {
     closeDescription();
}


function closeDescription() {
    document.querySelector('.show-description').classList.remove('show-description');
    overlay.classList.remove('overlay');
}



console.log(IsPC()) 
console.log(phone)

document.querySelector('.test1').innerHTML = IsPC();
document.querySelector('.test2').innerHTML = phone;

}