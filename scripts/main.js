let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
   let mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/pureblue.jpg')
   {
        myImage.setAttribute('src', 'images/blue.png');
        console.log('blue');
   }
   else{
        myImage.setAttribute('src', 'images/pureblue.jpg');
        console.log('pure');
   }
}

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'blue is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


// document.querySelector('html').onclick = function () {
//     alert('don\'t click'); 
// }