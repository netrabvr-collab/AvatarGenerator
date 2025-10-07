const btn1 = document.getElementById("random-btn");

const categories = {
    addOns: {
        images: [
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/21.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/22.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/23.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/24.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/25.png",
        ],
        index:0,
        element:document.getElementById("addOns"),
        nextBtn:"0nextBtn",
        prevBtn:"0prevBtn",       
    },
    tops: {
        images: [
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/01.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/02.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/03.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/04.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/05.png",
        ],
        index:0,
        element:document.getElementById("tops"),
        nextBtn:"1nextBtn",
        prevBtn:"1prevBtn",       
    },
    bottoms:{
        images:[
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/11.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/12.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/13.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/14.png",
            "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/15.png",
    ],
    index:0,
    element:document.getElementById("bottoms"),
    nextBtn:"2nextBtn",
    prevBtn:"2prevBtn",
    
    }
};

btn1.addEventListener("click", () => {
    for (const cat in categories) {
        const category = categories[cat];
        category.index = Math.floor(Math.random() * category.images.length);
        updateImage(cat);
    }
});

for (const cat in categories) {
    const category = categories[cat];
    document.getElementById(category.nextBtn).addEventListener("click", () => {
        category.index = (category.index + 1) % category.images.length;
        updateImage(cat);
    });

    document.getElementById(category.prevBtn).addEventListener("click", () => {
        category.index = (category.index - 1 + category.images.length) % category.images.length;
        updateImage(cat);
    });
}

function updateImage(cat) {
    const category = categories[cat];
    category.element.src = category.images[category.index];
}
