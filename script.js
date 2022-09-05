// console.log('hello');

// let items = document.querySelectorAll('.item');

// // Show description
// items.forEach(b=>b.addEventListener('click', function ShowDescription() {
//     let a = '.' + this.getAttribute('num');
//     document.querySelector(a).classList.toggle('show-description');
//     // this.getAttribute('')
    
//     console.log(a);
// }));

// console.log(navigator.userAgent);
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

let phone = '';

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

console.log(IsPC()) 
console.log(phone)

document.querySelector('.test1').innerHTML = IsPC();
document.querySelector('.test2').innerHTML = phone;