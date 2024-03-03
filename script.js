const data = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "images/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "images/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "images/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "images/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },

]
const box = document.querySelector('.box .content')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const randomBtn = document.querySelector('.random')


let currentItem = 0;
let draw;
window.onload = addPerson(currentItem);


//function display person
function addPerson(currentItem) {
    let person = data[currentItem]
        draw =
        `
        <div class="image">
        <img src="${person.img}" alt="person-1">
        <i class="fa-solid fa-quote-right"></i>
        </div>
        <h4>${person.name}</h4>
        <span>${person.job}</span>
        <p>
            ${person.text}
        </p>
        `
    box.innerHTML = draw
}

//function display prev person
prevBtn.addEventListener("click", prevPerson)
function prevPerson() {
    currentItem--
    if(currentItem < 0) {
        currentItem = data.length-1
    }
    addPerson(currentItem)
}

//function display next person
nextBtn.addEventListener("click", nextPerson)
function nextPerson() {
    currentItem++
    if(currentItem > data.length-1) {
        currentItem = 0
    }
    addPerson(currentItem)
}

//function display random person
randomBtn.addEventListener("click", randomPerson)
function randomPerson() {
    currentItem = Math.floor(Math.random() * data.length)
    addPerson(currentItem)
}