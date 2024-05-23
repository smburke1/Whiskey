const reviews = [
    {
    id: 1,
    cocktail: "Old Fashioned",
    alcoholtype: "Whiskey",
    img: "https://dailyappetite.com/wp-content/uploads/2020/06/Bourbon-Old-Fashioned-3.jpg",
    info: "Whiskey 1 The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    },     
    {
    id: 2,
    cocktail: "Manhattan",
    alcoholtype: "Bourbon",
    img: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2007/10/Manhattan-cocktail.jpg",
    info: "Whiskey 2 A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    },
    {
    id: 3,
    cocktail: "Whiskey Sour",
    alcoholtype: "Scotch",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    },
    {
    id: 4,
    cocktail: "Drink 4",
    alcoholtype: "Scotch",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    },
    {
    id: 5,
    cocktail: "Whiskey Coke",
    alcoholtype: "Often Jack Daniel's but any ol' whiskey will do.",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111.jpg",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",

    }
]

const img = document.getElementById("whiskey-img");
const cocktail = document.getElementById("cocktail");
const alcoholtype = document.getElementById("alcoholtype");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener('load', function(){
    showDrink(currentItem);
});

function showDrink() {
    const item = reviews[currentItem];
    img.src = item.img;
    cocktail.textContent = item.cocktail;
    alcoholtype.textContent = item.alcoholtype;
    info.textContent = item.info;
}

//Next
nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
     currentItem = 0;
 }
 showDrink(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showDrink(currentItem);
    
   });
   function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
