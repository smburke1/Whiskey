const reviews = [
    {
    id: 1,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#1 Old Fashioned",
    alcoholtype: "Whiskey",
    img: "https://dailyappetite.com/wp-content/uploads/2020/06/Bourbon-Old-Fashioned-3.jpg",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "2 Oz. Bourbon",
    liTwo: "3 Dashes of Angostura Bitters",
    liThree: "1/8 oz. Simple Syrup",
    liFour: "Organge Peel & Maraschino Cherry for Garnishe",
    },     
    {
    id: 2,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#2 Manhattan",
    alcoholtype: "Bourbon",
    img: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2007/10/Manhattan-cocktail.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    liOne: "2 Oz. Bourbon",
    liTwo: "3/4 Oz Sweet Vermouth",
    liThree: "Chilled Cocktail Glass",
    liFour: "1 Maraschino Cherry",
    },
    {
    id: 3,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#3 Whiskey Sour",
    alcoholtype: "Whiskey",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "1.5 Oz. Bourbon",
    liTwo: "3 Oz Lemon Juice",
    liThree: "1/8 Oz Simple Syrup",
    liFour: "Slice of Lemon & Cherry",
    },
    {
    id: 4,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#4 Rob Roy",
    alcoholtype: "Scotch",
    img: "https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Scotch",
    liTwo: "3/4 Oz. Sweet Vermouth",
    liThree: "3 Dashes Angostura Bitters",
    liFour: "Maraschino Cherry",
    },
    {
    id: 5,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "5 Whiskey Coke",
    alcoholtype: "Any ol' whiskey will do.",
    img: "https://images.unsplash.com/photo-1605806629664-1a050df0a913?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Whiskey",
    liTwo: "3 Coke",
    liThree: "Works With 7UP and others sodas",
    liFour: "When in doubt, on the rocks works too!",
    }
]

const img = document.getElementById("whiskey-img");
const cocktail = document.getElementById("cocktail");
const alcoholtype = document.getElementById("alcoholtype");
const info = document.getElementById("info");
const cocktailHeader = document.getElementById("cocktail-header");
const liOne = document.getElementById("liOne");
const liTwo = document.getElementById("liTwo");
const liThree = document.getElementById("liThree");
const liFour = document.getElementById("liFour");

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
    cocktailHeader.textContent = item.header;
    liOne.textContent = item.liOne;
    liTwo.textContent = item.liTwo;
    liThree.textContent = item.liThree;
    liFour.textContent = item.liFour;
    
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

