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
    cocktail: "#5 Whiskey Coke",
    alcoholtype: "Any ol' whiskey will do.",
    img: "https://images.unsplash.com/photo-1605806629664-1a050df0a913?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Whiskey",
    liTwo: "3 Coke",
    liThree: "Works With 7UP and others sodas",
    liFour: "When in doubt, on the rocks works too!",
    },
    /*Tequila*/
    {
    id: 6,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#1 Margarita",
    alcoholtype: "Tequila Reposado",
    img: "https://images.unsplash.com/photo-1632739186171-b2a442047bcd?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 oz. Triple Sec",
    liThree: "3 oz. Sweet & Sour",
    liFour: "Salt the rim of glass & garnish lime wedge",
    },     
    {
    id: 7,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#2 Tequila Sunrise",
    alcoholtype: "Blanco Tequila",
    img: "https://www.liquor.com/thmb/jjV_5roCvfnVgzYU89UROFguRpM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
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
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Bourbon",
    liTwo: "/5 Oz. Lemon Juice",
    liThree: "4 Oz. Grapefruit Soda",
    liFour: "Lime wheel",
    },
    {
    id: 9,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#4 Bloody Maria",
    alcoholtype: "Blanco Tequila",
    img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Bloody-Maria-008-735x919.jpg",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Tequila",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime, 2-4 Ddashes of Hot Sauce",
    },
    {
    id: 10,
    header: "Top 5 Tequila Cocktails",
    cocktail: "#5 Cadillac Margarita",
    alcoholtype: "Pull out the good stuff",
    img: "https://images.unsplash.com/photo-1544145945-b4744b209fc2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 Oz. Grand Marnier",
    liThree: "2 Oz. Lime Juice & Agave Syrup",
    liFour: "Salt the rim of glass & garnish lime wedge",
    },
    /*Vodka*/
    {
    id: 11,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#1 Vodka Martini",
    alcoholtype: "Vodka Higher Shelf",
    img: "https://www.themixer.com/en-us/wp-content/uploads/sites/2/2022/06/Classic-Martini_Midjourney-AI.jpg",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
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
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    liOne: "2 Oz. Vodka",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime, 2-4 Ddashes of Hot Sauce",
    },
    {
    id: 13,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#3 Sex on the Beach",
    alcoholtype: "Vodka",
    img: "https://copykat.com/wp-content/uploads/2022/05/Sex-on-the-Beach-Drink-Pin-9.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Bourbon",
    liTwo: "/5 Oz. Lemon Juice",
    liThree: "4 Oz. Grapefruit Soda",
    liFour: "Lime wheel",
    },
    {
    id: 14,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#4 Vodka Cranberry",
    alcoholtype: "Vodka",
    img: "data:image/jpeg;base64,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",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "1.5 Oz. Vodka",
    liTwo: "4 Oz. Cranberry Juice",
    liThree: "Lime Wedge",
    liFour: "Feel free to add other juices!",
    },
    {
    id: 15,
    header: "Top 5 Vodka Cocktails",
    cocktail: "#5 Lemon Drop Martini",
    alcoholtype: "Vodka mid-shelf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMQP-NPFph8gpwZl7YrAGrl8HrAY7Ruqjwg&usqp=CAU",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Vodka",
    liTwo: ".5 Oz. lemon juice",
    liThree: "1 tea spoon of sugar",
    liFour: "Lemon twist or wheel",
    },
    { //Rum
    id: 16,
    header: "Top 5 Rum Cocktails",
    cocktail: "#1 Old Fashioned",
    alcoholtype: "Rum",
    img: "https://dailyappetite.com/wp-content/uploads/2020/06/Bourbon-Old-Fashioned-3.jpg",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "2 Oz. Bourbon",
    liTwo: "3 Dashes of Angostura Bitters",
    liThree: "1/8 oz. Simple Syrup",
    liFour: "Organge Peel & Maraschino Cherry for Garnishe",
    },     
    {
    id: 17,
    header: "Top 5 Rum Cocktails",
    cocktail: "#2 Manhattan",
    alcoholtype: "Rum",
    img: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2007/10/Manhattan-cocktail.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    liOne: "2 Oz. Bourbon",
    liTwo: "3/4 Oz Sweet Vermouth",
    liThree: "Chilled Cocktail Glass",
    liFour: "1 Maraschino Cherry",
    },
    {
    id: 18,
    header: "Top 5 Rum Cocktails",
    cocktail: "#3 Whiskey Sour",
    alcoholtype: "Rum",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "1.5 Oz. Bourbon",
    liTwo: "3 Oz Lemon Juice",
    liThree: "1/8 Oz Simple Syrup",
    liFour: "Slice of Lemon & Cherry",
    },
    {
    id: 19,
    header: "Top 5 Rum Cocktails",
    cocktail: "#4 Rob Roy",
    alcoholtype: "Rum",
    img: "https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Scotch",
    liTwo: "3/4 Oz. Sweet Vermouth",
    liThree: "3 Dashes Angostura Bitters",
    liFour: "Maraschino Cherry",
    },
    {
    id: 20,
    header: "Top 5 Rum Cocktails",
    cocktail: "#5 Whiskey Coke",
    alcoholtype: "Rum",
    img: "https://images.unsplash.com/photo-1605806629664-1a050df0a913?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Whiskey",
    liTwo: "3 Coke",
    liThree: "Works With 7UP and others sodas",
    liFour: "When in doubt, on the rocks works too!",
    },
    /*Gin*/
    {
    id: 21,
    header: "Top 5 Gin Cocktails",
    cocktail: "#1 Margarita",
    alcoholtype: "Gin",
    img: "https://images.unsplash.com/photo-1632739186171-b2a442047bcd?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 oz. Triple Sec",
    liThree: "3 oz. Sweet & Sour",
    liFour: "Salt the rim of glass & garnish lime wedge",
    },     
    {
    id: 22,
    header: "Top 5 Gin Cocktails",
    cocktail: "#2 Tequila Sunrise",
    alcoholtype: "Gin",
    img: "https://www.liquor.com/thmb/jjV_5roCvfnVgzYU89UROFguRpM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    liOne: "2 Oz. Tequila",
    liTwo: "4 Oz, Orange Juice",
    liThree: "1/4 Oz. Grenadine",
    liFour: "1 Cherry & Orange Slice",
    },
    {
    id: 23,
    header: "Top 5 Gin Cocktails",
    cocktail: "#3 Palmona",
    alcoholtype: "Gin",
    img: "https://www.liquor.com/thmb/GPPgcW0jtJh2iQeAUQaycKYYtbw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/paloma-1500x1500-hero-46383ed066d2400a8ddd7543261f36c2.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Bourbon",
    liTwo: "/5 Oz. Lemon Juice",
    liThree: "4 Oz. Grapefruit Soda",
    liFour: "Lime wheel",
    },
    {
    id: 24,
    header: "Top 5 Gin Cocktails",
    cocktail: "#4 Bloody Maria",
    alcoholtype: "Gin",
    img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Bloody-Maria-008-735x919.jpg",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Tequila",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime, 2-4 Ddashes of Hot Sauce",
    },
    {
    id: 25,
    header: "Top 5 Gin Cocktails",
    cocktail: "#5 Cadillac Margarita",
    alcoholtype: "Gin",
    img: "https://images.unsplash.com/photo-1544145945-b4744b209fc2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Tequila",
    liTwo: "1 Oz. Grand Marnier",
    liThree: "2 Oz. Lime Juice & Agave Syrup",
    liFour: "Salt the rim of glass & garnish lime wedge",
    },
    /*Vodka*/
    {
    id: 26,
    header: "Top 5 Other Cocktails",
    cocktail: "#1 Vodka Martini",
    alcoholtype: "TBD",
    img: "https://www.themixer.com/en-us/wp-content/uploads/sites/2/2022/06/Classic-Martini_Midjourney-AI.jpg",
    info: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey (typically rye or bourbon), and garnishing with orange twist or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
    liOne: "2 Oz. Vodka",
    liTwo: ".5 oz. Dry Vermouth",
    liThree: "Make sure its chlled",
    liFour: "Lemon Twist or Olive",
    },     
    {
    id: 27,
    header: "Top 5 Other Cocktails",
    cocktail: "#2 Bloody Mary",
    alcoholtype: "TBD",
    img: "https://assets.epicurious.com/photos/6509dc536eab39953299f6c1/4:6/w_3242,h_4863,c_limit/Bloody-Mary_Recipe.jpg",
    info: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. s include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.[1][2] A Manhattan may also be served on the rocks in a lowball glass.",
    liOne: "2 Oz. Vodka",
    liTwo: "3.5 Oz. Bloody Mary Mix",
    liThree: ".5 Oz. Lime Juice",
    liFour: "Lime, 2-4 Ddashes of Hot Sauce",
    },
    {
    id: 28,
    header: "Top 5 Other Cocktails",
    cocktail: "#3 Sex on the Beach",
    alcoholtype: "TBD",
    img: "https://copykat.com/wp-content/uploads/2022/05/Sex-on-the-Beach-Drink-Pin-9.jpg",
    info: "The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "2 Oz. Bourbon",
    liTwo: "/5 Oz. Lemon Juice",
    liThree: "4 Oz. Grapefruit Soda",
    liFour: "Lime wheel",
    },
    {
    id: 29,
    header: "Top 5 Other Cocktails",
    cocktail: "#4 Vodka Cranberry",
    alcoholtype: "TBD",
    img: "data:image/jpeg;base64,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",
    info: "The Rob You is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white or cocktails foamer. With the egg white, it is sometimes called a Boston Sour. With a few bar spoons of full-bodied red wine floated on top, it is often referred to as a New York Sour. It is shaken and served either straight up or over ice.",
    liOne: "1.5 Oz. Vodka",
    liTwo: "4 Oz. Cranberry Juice",
    liThree: "Lime Wedge",
    liFour: "Feel free to add other juices!",
    },
    {
    id: 30,
    header: "Top 5 Other Cocktails",
    cocktail: "#5 Lemon Drop Martini",
    alcoholtype: "TBD",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMQP-NPFph8gpwZl7YrAGrl8HrAY7Ruqjwg&usqp=CAU",
    info: "A simple, but classic way of drinking your whiskey.  Whether you want a Jack & coke or one of the many variations, if you like whiskey you cant go wront here and no one will judge you for it.",
    liOne: "1.5 Oz. Vodka",
    liTwo: ".5 Oz. lemon juice",
    liThree: "1 tea spoon of sugar",
    liFour: "Lemon twist or wheel",
    }
]
const whiskeyDrinks = document.getElementById("whiskey-drinks");
const tequilaDrinks = document.getElementById("tequila-drinks");
const vodkaDrinks = document.getElementById("vodka-drinks");
const rumDrinks = document.getElementById("rum-drinks");
const ginDrinks = document.getElementById("gin-drinks");
const otherDrinks = document.getElementById("other-drinks");

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

otherDrinks.addEventListener('click', function() {
    currentItem = 25;
    showDrink(currentItem);
});
