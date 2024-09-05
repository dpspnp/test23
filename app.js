let dishes = [
    { name: "MISHI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5423.jpg" },
    { name: "PARAMA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5949.jpg" },
    { name: "NAVYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7526.jpg" },
    { name: "ANSHIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240422080939741img.jpeg" },
    { name: "ANSHIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3937.jpg" },
    { name: "VAISNAVI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6649.jpg" },
    { name: "AVIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5957.jpg" },
    { name: "ANUSHKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4773.jpg" },
    { name: "AAKANCHA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3968.jpg" },
    { name: "ADITI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3720.jpg" },
    { name: "AKSCHITA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7192.jpg" },
    { name: "ANSHI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6731.jpg" },
    { name: "NANDIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3823.jpg" },
    { name: "KARUNA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5457.jpg" },
    { name: "SNIGDHA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7378.jpeg" },
    { name: "PRAJYUSHA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5520.jpg" },
    { name: "PARIKMOKSHA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5505.jpg" },
    { name: "PUSHTI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5879.jpeg" },
    { name: "PURNIMA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5422.jpg" },
    { name: "PEARL", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5428.jpg" },
    { name: "POOJA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4831.jpg" },
    { name: "CHITRAKSHI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7579.jpg" },
    { name: "AARUSHI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4402.jpg" },
    { name: "AARIKSHETA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6237.jpg" },
    { name: "AKANSHA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6580_24-25.jpeg" },
    { name: "ANANYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7221_24-25.jpeg" },
    { name: "ANANYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240416130006605img.jpeg" },
    { name: "ANANDITA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4927.jpg" },
    { name: "BHARGAVI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6722_24-25.jpeg" },
    { name: "BHAVYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5515_24-25.jpeg" },
    { name: "CHETNA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3833_24-25.jpeg" },
    { name: "CHARVI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5437_24-25.jpeg" },
    { name: "DIVYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3701.jpg" },
    { name: "GARIMA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7284.jpg" },
    { name: "ISHITA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7710_24-25.jpeg" },
    { name: "KANIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3911.jpg" },
    { name: "KAMIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4367.jpg" },
    { name: "MISHKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5132.jpg" },
    { name: "MEHEK", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3954.jpg" },
    { name: "MAHAK", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3876_24-25.jpeg" },
    { name: "MAHI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3754_24-25.jpeg" },
    { name: "NEETU", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4048.jpg" },
    { name: "NIKITA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240504084832905img.jpeg" },
    { name: "NAVYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6213_24-25.jpeg" },
    { name: "MADHVI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5849.jpg" },
    { name: "PRIYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5847.jpg" },
    { name: "PRAGYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4021.jpg" },
    { name: "SHREYA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7536.jpg" },
    { name: "SOUMILI", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6316_24-25.jpeg" },
    { name: "SAGARIKA", img: "https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7228.jpg" }
];


let currentDishIndex = 1;
let currentDish = dishes[0];

// Select dish elements
let leftImage = document.getElementById('left-dish-img');
let rightImage = document.getElementById('right-dish-img');
let leftName = document.getElementById('left-dish-name');
let rightName = document.getElementById('right-dish-name');

// Initialize images and names
leftImage.src = currentDish.img;
leftName.innerHTML = currentDish.name;
rightImage.src = dishes[currentDishIndex].img;
rightName.innerHTML = dishes[currentDishIndex].name;

function chooseDish(side) {
    // Record the vote
    let chosenDish = (side === 'left') ? currentDish.name : dishes[currentDishIndex].name;

    // Send vote to the server
    fetch('vote_server.php', {
        method: 'POST',
        body: JSON.stringify({ dish: chosenDish }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
        console.log(data.message);
    });

    // Update current dish
    currentDish = (side === 'left') ? currentDish : dishes[currentDishIndex];
    currentDishIndex++;

    // Check if the game is over
    if (currentDishIndex >= dishes.length) {
        alert("THANK YOU FOR YOUR SERVICE, FOR YOU WE WILL KNOW WHAT IS THE BEST DISH");
        return;
    }

    // Update the images and names
    leftImage.src = currentDish.img;
    leftName.innerHTML = currentDish.name;
    rightImage.src = dishes[currentDishIndex].img;
    rightName.innerHTML = dishes[currentDishIndex].name;
}
