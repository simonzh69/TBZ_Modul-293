const products = [
    {
        id: "salehe-bembury-pollex-cucumber",
        name: "Salehe Bembury x Crocs Pollex Clog 'Cucumber'",
        category: "designer men women limited new",
        price: "$85",
        description: "Reimagined by Salehe Bembury, these clogs feature a unique fingerprint-inspired texture. The 'Cucumber' colorway is a highly sought-after edition, known for its distinctive look and comfortable feel. Perfect for those who appreciate innovative design.",
        image: "https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Cucumber-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11", "M10/W12", "M11", "M12", "M13"],
        video: "https://www.youtube.com/embed/L43g31EAMnk",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Salehe Bembury Pollex Clog 'Cucumber'"}]
    },
    {
        id: "balenciaga-platform-black",
        name: "Balenciaga x Crocs Platform Clog 'Black'",
        category: "designer women",
        price: "$850",
        description: "A high-fashion take on the classic clog by Balenciaga, featuring a dramatic platform sole. This 'Black' version is a bold statement piece, blending comfort with avant-garde style. Ideal for fashion-forward individuals.",
        image: "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_4542084_100020_m",
        sizes: ["W6/M4", "W7/M5", "W8/M6", "W9/M7", "W10/M8", "W11/M9"],
        video: "https://www.youtube.com/embed/Ifg1h82i79o",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Balenciaga Platform Clog 'Black'"}]
    },
    {
        id: "post-malone-duet-max-pink",
        name: "Post Malone x Crocs Duet Max Clog II 'Pink'",
        category: "limited men women artist new",
        price: "$70",
        description: "The second collaboration with Post Malone, this Duet Max Clog II comes in a vibrant pink. It features an exaggerated, chunky outsole and custom Jibbitz, reflecting Post Malone's unique style.",
        image: "https://images.stockx.com/images/Crocs-Classic-Clog-Post-Malone-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11", "M10/W12"],
        video: "https://www.youtube.com/embed/T2z4gT4kLNU",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Post Malone Duet Max Clog II 'Pink'"}]
    },
    {
        id: "kfc-classic-clog",
        name: "KFC x Crocs Classic Clog",
        category: "themed men women limited sale",
        price: "$60",
        description: "A finger-lickin' good collaboration, these Crocs are designed to look like a bucket of KFC fried chicken, complete with chicken-scented Jibbitz charms. A truly unique and fun collector's item.",
        image: "https://images.stockx.com/images/Crocs-Classic-Clog-KFC-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11"],
        video: "https://www.youtube.com/embed/BrwbD9nZu4Q",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "KFC Classic Clog"}]
    },
    {
        id: "bad-bunny-glow-clog",
        name: "Bad Bunny x Crocs Classic Clog 'Glow in the Dark'",
        category: "limited men women artist",
        price: "$65",
        description: "Bad Bunny's collaboration features a classic white clog that glows green in the dark. It comes with Jibbitz inspired by the artist, including stars and his bunny logo. Sold out instantly.",
        image: "https://cms-cdn.thesolesupplier.co.uk/2020/10/Bad-Bunny-x-Crocs-Classic-Clog-White-207101-90H_w672_h672_pad_.jpg.webp",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11", "M10/W12", "M11", "M12"],
        video: "https://www.youtube.com/embed/z4Y1ycal3y0",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Bad Bunny Glow Clog"}]
    },
    {
        id: "justin-bieber-drew-lavender",
        name: "Justin Bieber x Crocs with drew house Classic Clog 'Lavender'",
        category: "limited men women artist new",
        price: "$60",
        description: "Justin Bieber's second Crocs collab, this time in a soft lavender color. It includes oversized Jibbitz charms from his drew house fashion label, like Theodore the bear and other characters.",
        image: "https://images.laced.com/products/d8bad441-e66a-4c30-aefc-0f33927a6b03.jpg",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10"],
        video: "https://www.youtube.com/embed/U33r4x06Mo0",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Justin Bieber Drew Lavender Clog"}]
    },
    {
        id: "palace-camo-clog",
        name: "Palace x Crocs Classic Clog 'Camo'",
        category: "designer men women limited",
        price: "$70",
        description: "London-based skate brand Palace teamed up with Crocs for a camo-covered Classic Clog. Features unique Palace Jibbitz, including their Triferg logo.",
        image: "https://cdn.flightclub.com/TEMPLATE/298412/2.jpg",
        sizes: ["M6/W8", "M7/W9", "M8/W10", "M9/W11", "M10/W12", "M11"],
        video: "https://www.youtube.com/embed/B9Zz8fQkJqY",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Palace Camo Clog"}]
    },
    {
        id: "murakami-complexcon-clog",
        name: "Takashi Murakami x Crocs Classic Clog (ComplexCon Exclusive)",
        category: "artist limited men women sale",
        price: "$100",
        description: "A vibrant and artistic collaboration with Takashi Murakami, released exclusively at ComplexCon. Features his iconic flower and character designs as Jibbitz.",
        image: "https://images.stockx.com/images/Crocs-Classic-Clog-Takashi-Murakami-x-ComplexCon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607062998",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11"],
        video: "https://www.youtube.com/embed/0buA72YhYUM",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Takashi Murakami ComplexCon Clog"}]
    },
    {
        id: "staple-sidewalk-luxe-clog",
        name: "Staple x Crocs 'Sidewalk Luxe' Classic Clog",
        category: "designer men women limited new",
        price: "$75",
        description: "Jeff Staple brings his iconic pigeon design to Crocs with the 'Sidewalk Luxe' Clog. This collaboration reflects NYC street culture and features unique, large Jibbitz.",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fjeff-staple-crocs-sidewalk-luxe-classic-clog-concrete-jungle-pigeon-release-information-1.jpg?q=75&w=800&cbr=1&fit=max",
        sizes: ["M7/W9", "M8/W10", "M9/W11", "M10/W12", "M11", "M12"],
        video: "https://www.youtube.com/embed/F4M_ugch28k",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Staple Sidewalk Luxe Clog"}]
    },
    {
        id: "nicole-mclaughlin-campsite-clog",
        name: "Nicole McLaughlin x Crocs Campsite Clog",
        category: "designer limited men women accessories",
        price: "$80",
        description: "Designer Nicole McLaughlin is known for her upcycled and utilitarian designs. This collaboration turns the Crocs Clog into a wearable campsite, with attached mini-tent, compass, and other gear.",
        image: "https://www.superkicks.in/cdn/shop/products/206905-0C4-1.jpg?v=1675962406",
        sizes: ["M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11"],
        video: "https://www.youtube.com/embed/nDZEXA42Q4I",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Nicole McLaughlin Campsite Clog"}]
    },
    {
        id: "star-wars-chewbacca-clog",
        name: "Star Wars x Crocs Chewbacca Lined Clog",
        category: "themed men women kids sale accessories",
        price: "$65",
        description: "Embrace your inner Wookiee with these Chewbacca-inspired lined clogs. Featuring a furry lining for warmth and Chewie's bandolier as Jibbitz. Perfect for Star Wars fans of all ages. May the Force be with your feet!",
        image: "https://images.stockx.com/360/Crocs-Classic-Lined-Clog-Star-Wars-Chewbacca/Images/Crocs-Classic-Lined-Clog-Star-Wars-Chewbacca/Lv2/img01.jpg?w=480&q=60&dpr=1&updated_at=1694024805&h=320",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11", "M10/W12", "J1", "J2", "J3"],
        video: "https://www.youtube.com/embed/mGzDhB5gS0s",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Star Wars Chewbacca Clog"}]
    },
    {
        id: "minecraft-elevated-clog",
        name: "Minecraft x Crocs Elevated Clog",
        category: "themed men women kids accessories new",
        price: "$55",
        description: "Build your world in comfort with the Minecraft x Crocs collection. These clogs feature iconic Minecraft blocky graphics and character Jibbitz. Includes four 3D block Jibbitz™ charms and four character Jibbitz™ charms.",
        image: "https://m.media-amazon.com/images/I/61qHThRvorL._UY900_.jpg",
        sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "C10", "C11", "C12", "C13"],
        video: "https://www.youtube.com/embed/GXs6VnI02Ok",
        breadcrumbs: [{name: "Home", link:"explore.html"}, {name: "Products", link:"index.html"}, {name: "Minecraft Elevated Clog"}]
    }
];