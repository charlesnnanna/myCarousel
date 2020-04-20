//Get the necessary elements from the HTML Document
const myCarousel = document.querySelector('#my-carousel');
const carouselItem = document.querySelectorAll('.carousel-item');
const description = document.querySelectorAll('.description');
const left = document.getElementById('left');
const right = document.getElementById('right');
const radio = document.querySelectorAll('.my-radio');


//Use the spread operator to clone all items in carouselItem to arr
const backgroundArr = [];
const descArr = [];
const radioArr = [];
backgroundArr.push(...carouselItem);
descArr.push(...description);
radioArr.push(...radio);

// Create a counter needed for the loop to be created
let i = 0;

// The function responsible for changing the Items to be displayed on screen automatically
const changeItem = () => {
    //Checks if the counter is 4, and acts depending on the condition
    if (i == 4 ){
        i = -1;
    }
    
    //Increases the counter by one
    i++;
    
    itemStyling(i);
    console.log(i);
       
}

const itemStyling = (counter) => {
    //Sets every element opacity styling to zero
    backgroundArr.map((item) => {
        item.style.opacity = 0;
    })
    descArr.map((item) => {
        item.style.opacity = 0;
    })

    radioArr.map((item) => {
        item.removeAttribute('checked');
    })

//Sets the current array element opacity styling to 1
    backgroundArr[counter].style.opacity = 1;
    descArr[counter].style.opacity = 1;
    radioArr[counter].setAttribute("checked", "checked");
}



const myInterval = setInterval(changeItem, 3000);

const addToCounter = () => {
    clearInterval(myInterval);
    if (i == 4 ){
        i = -1;
    }
    i++;
    itemStyling(i);
    console.log(i);
    
    
}

const removefromCounter = () => {
    clearInterval(myInterval);
    if(i == 0){
        i = 5;
    }
    i--;
    itemStyling(i);
    console.log(i);
    
}

left.addEventListener('click', removefromCounter);
right.addEventListener('click', addToCounter);

 let selectRadio = () => {

    radioArr.map((item) => {
    let index = radioArr.indexOf(item)
    item.addEventListener('click', () => {
        clearInterval(myInterval);
        i = index;
        console.log(i);
        itemStyling(i);
        
    } )
})
}

selectRadio();