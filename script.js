console.log('hello');

let items = document.querySelectorAll('.item');

// Show description
items.forEach(b=>b.addEventListener('click', function ShowDescription() {
    let a = '.' + this.getAttribute('num');
    document.querySelector(a).classList.toggle('show-description');
    // this.getAttribute('')
    
    console.log(a);
}));