const reviews = [
    {
    id: 1,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#1 Old Fashioned",
    alcoholtype: "Whiskey",
    img: "https://dailyappetite.com/wp-content/uploads/2020/06/Bourbon-Old-Fashioned-3.jpg",
    info: "The Old Fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "2 Oz. Bourbon",
    liTwo: "3 Dashes of Angostura Bitters",
    liThree: "1/8 oz. Simple Syrup",
    liFour: "Organge Peel & Maraschino Cherry for Garnish",
    },     
    {
    id: 2,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#2 Manhattan",
    alcoholtype: "Bourbon",
    img: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2007/10/Manhattan-cocktail.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry. A Manhattan may also be served on the rocks in a lowball glass.",
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
    info: "The Whiskey Sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
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
    info: "Similar to a Manhattan, the Rob Roy is made exclusively with Scotch whiskey.  Similar to a Manhattan, but is made exclusively with Scotch whiskey.  This version of a Manhattan may have been first dubbed a Rob Roy in 1894, the Manhattan made with Scotch whisky first appears in print ten years earlier in a London bar guide by Charlie Paul.",
    liOne: "2 Oz. Scotch",
    liTwo: "3/4 Oz. Sweet Vermouth",
    liThree: "3 Dashes Angostura Bitters",
    liFour: "Maraschino Cherry",
    },
    {
    id: 5,
    header: "Top 5 Whiskey Cocktails",
    cocktail: "#5 Whiskey Coke",
    alcoholtype: "Any Ol' Whiskey Will Do.",
    img: "https://images.unsplash.com/photo-1605806629664-1a050df0a913?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Whiskey",
    liTwo: "3 Coke",
    liThree: "Try 7up or Ginger Ale too",
    liFour: "Or on the Rocks!",
    },
    /*Tequila*/
    {
    id: 6,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#1 Margarita",
    alcoholtype: "Tequila Reposado",
    img: "https://images.unsplash.com/photo-1632739186171-b2a442047bcd?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A cocktail consisting of tequila, triple sec, and lime juice. Some margarita recipes include simple syrup as well and are often served with salt on the rim of the glass. Margaritas can be served either shaken with ice (on the rocks), without ice (straight up), or blended with ice (frozen margarita).",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 oz. Triple Sec",
    liThree: "3 oz. Sweet & Sour",
    liFour: "Salt & Lime Wedge",
    },     
    {
    id: 7,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#2 Tequila Sunrise",
    alcoholtype: "Blanco Tequila",
    img: "https://www.liquor.com/thmb/jjV_5roCvfnVgzYU89UROFguRpM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg",
    info: "The modern drink originates from Sausalito, California, in the early 1970s after an earlier iteration created in the 1930s in Phoenix, Arizona. The cocktail is named for its appearance when served—with gradations of color resembling a sunrise.",
    liOne: "2 Oz. Tequila",
    liTwo: "4 Oz, Orange Juice",
    liThree: "1/4 Oz. Grenadine",
    liFour: "1 Cherry & Orange Slice",
    },
    {
    id: 8,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#3 Palmona",
    alcoholtype: "Tequila Reposado",
    img: "https://www.liquor.com/thmb/GPPgcW0jtJh2iQeAUQaycKYYtbw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/paloma-1500x1500-hero-46383ed066d2400a8ddd7543261f36c2.jpg",
    info: "A simple paloma is a two-ingredient cocktail consisting only of tequila and grapefruit-flavored soda. A more complex variant of the Paloma is the cantarito, which in addition to lime juice, also has lemon juice and orange juice.  The paloma is more flavorful than its closest relative, the greyhound, which consists of grapefruit juice and either gin or vodka mixed and served over ice.",
    liOne: "2 Oz. Tequla",
    liTwo: ".5 Oz. Lemon Juice",
    liThree: "4 Oz. Grapefruit Soda",
    liFour: "Lime Wheel",
    },
    {
    id: 9,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#4 Bloody Maria",
    alcoholtype: "Blanco Tequila",
    img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Bloody-Maria-008-735x919.jpg",
    info: "The Bloody Mary was invented in the 1920s or 1930s. There are various theories as to the origin of the drink and its name.  It is usually consumed in the morning or early afternoon, and is popular as a hangover cure.",
    liOne: "2 Oz. Tequila",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime & Hot Sauce (Adjust To Taste)",
    },
    {
    id: 10,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#5 Cadillac Margarita",
    alcoholtype: "Pull Out the Good Stuff!",
    img: "https://images.unsplash.com/photo-1544145945-b4744b209fc2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Generally speaking the best margarita you will run into.  Feel free to added you higher shelf tequila and take your time sipping down this truelf delightful drink.",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 Oz. Grand Marnier",
    liThree: "2 Oz. Lime Juice & Agave Syrup",
    liFour: "Salt & Lime Wedge",
    },
    /*Vodka*/
    {
    id: 11,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#1 Vodka Martini",
    alcoholtype: "Vodka Higher Shelf",
    img: "https://www.themixer.com/en-us/wp-content/uploads/sites/2/2022/06/Classic-Martini_Midjourney-AI.jpg",
    info: "Though the original recipe for a martini includes gin, vodka makes for a clean and approach version of the original. The martini's simplicity has no bearing on its elegance. You will feel on top of the world after your first sip. Before you start, make sure your vodka and vermouth is quality—since they make up the drink, the cheap stuff just won't do.",
    liOne: "2 Oz. Vodka",
    liTwo: ".5 oz. Dry Vermouth",
    liThree: "Make sure its chlled",
    liFour: "Lemon Twist or Olive",
    },     
    {
    id: 12,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#2 Bloody Mary",
    alcoholtype: "Vodka",
    img: "https://assets.epicurious.com/photos/6509dc536eab39953299f6c1/4:6/w_3242,h_4863,c_limit/Bloody-Mary_Recipe.jpg",
    info: "The Bloody Mary is one of the world’s best-known cocktails, prized for its ability to jumpstart even the groggiest of mornings.  Whatever its true origins, the Bloody Mary has persisted as one of the most popular drinks ever created, and a pioneer of savory cocktails.",
    liOne: "2 Oz. Vodka",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime, 2-4 Dashes of Hot Sauce",
    },
    {
    id: 13,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#3 Sex on the Beach",
    alcoholtype: "Vodka",
    img: "https://copykat.com/wp-content/uploads/2022/05/Sex-on-the-Beach-Drink-Pin-9.jpg",
    info: "When a lady comes up to me and asks for a drink, this is my go to.  It is simple enough to make, and the flavors always satisfy.  You simply can't go wrong here!",
    liOne: "2 Oz. Vodka",
    liTwo: "1 1/2 Oz. Cranberry Juice",
    liThree: "1 Oz. Orange Juice & Splash of Pineapple Juice",
    liFour: "Orange Wheel & Cherry",
    },
    {
    id: 14,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#4 Vodka Cranberry",
    alcoholtype: "Vodka",
    img: "data:image/jpeg;base64,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",
    info: "The Cape Cod or Cape Codder is a type of cocktail consisting of vodka and cranberry juice. Some recipes also call for squeezing a lime wedge over the glass and dropping it into the drink.  related to a number of other cocktails such as the Sea Breeze (which adds grapefruit juice), the Bay Breeze (which adds pineapple juice), the Madras (which adds orange juice), ",
    liOne: "1.5 Oz. Vodka",
    liTwo: "4 Oz. Cranberry Juice",
    liThree: "Lime Wedge",
    liFour: "Feel Free to Mix it Up with Other Juices!",
    },
    {
    id: 15,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#5 Lemon Drop Martini",
    alcoholtype: "Vodka Mid-Shelf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMQP-NPFph8gpwZl7YrAGrl8HrAY7Ruqjwg&usqp=CAU",
    info: "A lemon drop is a cocktail with a lemony, sweet and sour flavor, whereby the sweet and sour ingredients serve to contrast and balance one another. It is a vodka-based cocktail that is prepared with the addition of lemon juice and triple sec.",
    liOne: "1.5 Oz. Vodka",
    liTwo: ".5 Oz. Lemon Juice & Triple Sec",
    liThree: "1 Tea Spoon of Sugar",
    liFour: "Lemon Twist or Wheel",
    },
    { //Rum
    id: 16,
    header: "Top 5 Rum Cocktails",
    cocktail: "#1 Mai Tai",
    alcoholtype: "Rum",
    img: "https://www.crazyforcrust.com/wp-content/uploads/2020/04/Classic-Mai-Tai-4.jpg",
    info: "Introduced in Hawaii in 1953 when Bergeron created a cocktail menu for the Matson Company hotels the Royal Hawaiian Hotel and Moana Hotel. In the years thereafter, pineapple juice, orange juice, and a dark rum float became commonly used in Mai  cocktTais produced in Hawaii.",
    liOne: "1.5 Oz. White Rum",
    liTwo: "2 Oz. Orange Juice & 1 Oz. Pineapple Juice",
    liThree: "1/4 oz. Grenadine",
    liFour: "1 Oz. Dark Rum",
    },     
    {
    id: 17,
    header: "Top 5 Rum Cocktails",
    cocktail: "#2 Mojito",
    alcoholtype: "Rum",
    img: "https://www.bhg.com/thmb/RuIXqyj_sGoJwZSs8DpKLF2Qa2g=/1244x0/filters:no_upscale():strip_icc()/diy-mojito-RU186788-1-b3184133555544bbae783b67881d1400.jpg",
    info: "The mojito has routinely been presented as aill favorite drink of author Ernest Hemingway.  Havana, Cuba, is the birthplace of the mojito, although its exact origin is a subject of debate. It was known that the native people had remedies for various tropical nesses, so a small boarding party went ashore on Cuba and came back with ingredients for an effective medicine.",
    liOne: "2 Oz. White Rum",
    liTwo: "7 Mint Leaves",
    liThree: "2 Oz. Sweet & Sour",
    liFour: "1 Oz. Club Soda & Lime Garnish",
    },
    {
    id: 18,
    header: "Top 5 Rum Cocktails",
    cocktail: "#3 Daiquiri",
    alcoholtype: "Rum",
    img: "data:image/jpeg;base64,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",
    info: "The drink became popular in the 1940s. World War II rationing made whiskey and vodka hard to come by, yet rum was easily obtainable owing to U.S. President Franklin D. Roosevelt's Good Neighbor policy, which opened up trade and travel relations with Latin America, Cuba, and the Caribbean.",
    liOne: "2 Oz. Light Rum",
    liTwo: "3 Sweet & Sour",
    liThree: "Lime Wedge or twist",
    liFour: "Blend with Ice for Frozen Daiquiri",
    },
    {
    id: 19,
    header: "Top 5 Rum Cocktails",
    cocktail: "#4 Cubra Libre",
    alcoholtype: "Rum",
    img: "https://static.wixstatic.com/media/fdd141_aff5a2bc60d846ee81d54fb6b2459742~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fdd141_aff5a2bc60d846ee81d54fb6b2459742~mv2.jpg",
    info: "The cocktail originated in the early 20th century in Cuba, after the country won independence in the Spanish–American War. It subsequently became popular across Cuba, the United States, and other countries. Its simple recipe and inexpensive, ubiquitous ingredients have made it one of the world's most-popular alcoholic drinks.",
    liOne: "1.5 Oz. Rum",
    liTwo: "3 Oz. Coke",
    liThree: "Lime Widge",
    liFour: "Or Spiced Rum!",
    },
    {
    id: 20,
    header: "Top 5 Rum Cocktails",
    cocktail: "#5 Hurricane",
    alcoholtype: "Rum",
    img: "https://www.liquor.com/thmb/t4unQHZC2WbR4Z06EQPj47j8d28=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hurricane-720x720-primary-e5b3f57f86904ad39f87c96b1b0e0d1e.jpg",
    info: "It is one of many popular drinks served in New Orleans. It is traditionally served in the tall, curvy eponymous hurricane glass. Disposable plastic cups are also used because New Orleans laws permit drinking in public and leaving a bar with a drink.",
    liOne: "2 Oz. White Rum & 2 Oz. Dark Rum",
    liTwo: "1 Oz. Orange Juice, Lime Juice, & Passion Fruit",
    liThree: "1 Teapoon of Grenadine",
    liFour: "Half Orange Wheel & Cherry",
    },
    /*Gin*/
    {
    id: 21,
    header: "Top 5 Gin Cocktails",
    cocktail: "#1 Martini",
    alcoholtype: "Gin",
    img: "https://www.seriouseats.com/thmb/t7SVNEI4ooP-q0aqLGPN_IDJxFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__03__20160321-filthy-martinis-vicky-wasik-2-2-d0bb3e55a82043b3b25131870d7dde44.jpg",
    info: "A dry martini is made with little to no vermouth. Ordering a martini extra dry will result in even less or no vermouth added. By the Roaring Twenties, it became a common drink order. Over the course of the 20th century, the amount of vermouth steadily dropped.",
    liOne: "2 Oz. Gin",
    liTwo: ".5 oz. Dry Vermouth",
    liThree: "Lemon Twist or Olive",
    liFour: "Add Olive Juice for a Dirty Martini",
    },     
    {
    id: 22,
    header: "Top 5 Gin Cocktails",
    cocktail: "#2 Gimlet",
    alcoholtype: "Gin",
    img: "https://www.liquor.com/thmb/05j0hV6YaJB9D2Vo_7xbFHgF-Q8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gimlet-1500x1500-hero-7af9450103b9437d8d5b7206a6ddfe43.jpg",
    info: "The word gimlet used in this sense is first attested in 1928. The most obvious derivation is from the tool for drilling small holes, a word also used figuratively to describe something as sharp or piercing. Thus, the cocktail may have been named for its penetrating effects on the drinker.",
    liOne: "1.5 Oz. Gin",
    liTwo: "2 Oz, Lime Juice",
    liThree: "Lime Slice",
    liFour: "Sweet & Sour or simple Syrup Optional",
    },
    {
    id: 23,
    header: "Top 5 Gin Cocktails",
    cocktail: "#3 Gin & Tonic",
    alcoholtype: "Gin",
    img: "https://www.thespruceeats.com/thmb/YJ0mJuh7Nx-AhndhckRSuzrIaus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gin-tonic-5a8f334b8e1b6e0036a9631d.jpg",
    info: "It is commonly referred to as a G and T in the UK, US, Canada, Australia, New Zealand and Ireland.  Gin and tonic is traditionally garnished with a slice or wedge of lime, often slightly squeezed into the drink before being placed in the glass.",
    liOne: "1,5 Oz. Ginn",
    liTwo: "3 Oz. Tonic Water",
    liThree: "Lime Slice",
    liFour: "Or Try Club Soda",
    },
    {
    id: 24,
    header: "Top 5 Gin Cocktails",
    cocktail: "#4 Negroni",
    alcoholtype: "Gin",
    img: "https://www.liquor.com/thmb/cmNLcCCoKU-r_OSvAahfo3Ho4D4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kingston-negroni-720x720-primary1-ef87562fea8240de92dd09c36457a8c2.jpg",
    info: "The drink has been documented in Italy since the late 1940s, and became popular in the 1950s, but the origin is uncertain, and early recipes differ somewhat from the modern standard.",
    liOne: "1.5 Oz. Gin",
    liTwo: ".5 Oz. Sweet Vermouth",
    liThree: ".5 Oz. Campari",
    liFour: "1 Peeled Orange Zest",
    },
    {
    id: 25,
    header: "Top 5 Gin Cocktails",
    cocktail: "#5 Tom Collins",
    alcoholtype: "Gin",
    img: "https://culinaryginger.com/wp-content/uploads/Classic-Tom-Collins-5-735x490.jpg",
    info: "First memorialized in writing in 1876 by Jerry Thomas, the father of American mixology, this gin and sparkling lemonade drink is typically served in a Collins glass over ice with a cherry garnish. A non-alcoholic Collins mix mixer is produced, enjoyed by some as a soft drink.",
    liOne: "2 Oz. Gin",
    liTwo: "3 Oz. Sweet & Sour",
    liThree: "1 Oz. Club Soda",
    liFour: "Lemon Wheel & Cherry",
    }
]
const whiskeyDrinks = document.getElementById("whiskey-drinks");
const tequilaDrinks = document.getElementById("tequila-drinks");
const vodkaDrinks = document.getElementById("vodka-drinks");
const rumDrinks = document.getElementById("rum-drinks");
const ginDrinks = document.getElementById("gin-drinks");

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

//Next & back buttons
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

//Event listeners for drink types
//Selects which type of cocktail to jump to
whiskeyDrinks.addEventListener('click', function() {
    currentItem = 0;
    showDrink(currentItem);
});

tequilaDrinks.addEventListener('click', function() {
    currentItem = 5;
    showDrink(currentItem);
});

vodkaDrinks.addEventListener('click', function() {
    currentItem = 10;
    showDrink(currentItem);
});

rumDrinks.addEventListener('click', function() {
    currentItem = 15;
    showDrink(currentItem);
});
ginDrinks.addEventListener('click', function() {
    currentItem = 20;
    showDrink(currentItem);
});
