let dishes = [
    { name: 'MISHI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5423.jpg', votes: 0 },
    { name: 'PARAMA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5949.jpg', votes: 0 },
    { name: 'NAVYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7526.jpg', votes: 0 },
    { name: 'ANSHIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240422080939741img.jpeg', votes: 0 },
    { name: 'ANSHIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3937.jpg', votes: 0 },
    { name: 'VAISNAVI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6649.jpg', votes: 0 },
    { name: 'AVIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5957.jpg', votes: 0 },
    { name: 'ANUSHKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4773.jpg', votes: 0 },
    { name: 'AAKANCHA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3968.jpg', votes: 0 },
    { name: 'ADITI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3720.jpg', votes: 0 },
    { name: 'AKSCHITA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7192.jpg', votes: 0 },
    { name: 'ANSHI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6731.jpg', votes: 0 },
    { name: 'NANDIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3823.jpg', votes: 0 },
    { name: 'KARUNA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5457.jpg', votes: 0 },
    { name: 'SNIGDHA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7378.jpeg', votes: 0 },
    { name: 'PRAJYUSHA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5520.jpg', votes: 0 },
    { name: 'PARIKMOKSHA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5505.jpg', votes: 0 },
    { name: 'PUSHTI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5879.jpeg', votes: 0 },
    { name: 'PURNIMA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5422.jpg', votes: 0 },
    { name: 'PEARL', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5428.jpg', votes: 0 },
    { name: 'POOJA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4831.jpg', votes: 0 },
    { name: 'CHITRAKSHI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7579.jpg', votes: 0 },
    { name: 'AARUSHI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4402.jpg', votes: 0 },
    { name: 'AARIKSHETA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6237.jpg', votes: 0 },
    { name: 'AKANSHA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6580_24-25.jpeg', votes: 0 },
    { name: 'ANANYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7221_24-25.jpeg', votes: 0 },
    { name: 'ANANYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240416130006605img.jpeg', votes: 0 },
    { name: 'ANANDITA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4927.jpg', votes: 0 },
    { name: 'BHARGAVI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6722_24-25.jpeg', votes: 0 },
    { name: 'BHAVYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5515_24-25.jpeg', votes: 0 },
    { name: 'CHETNA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3833_24-25.jpeg', votes: 0 },
    { name: 'CHARVI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5437_24-25.jpeg', votes: 0 },
    { name: 'DIVYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3701.jpg', votes: 0 },
    { name: 'GARIMA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7284.jpg', votes: 0 },
    { name: 'ISHITA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7710_24-25.jpeg', votes: 0 },
    { name: 'KANIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3911.jpg', votes: 0 },
    { name: 'KAMIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4367.jpg', votes: 0 },
    { name: 'MISHKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5132.jpg', votes: 0 },
    { name: 'MEHEK', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3954.jpg', votes: 0 },
    { name: 'MAHAK', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3876_24-25.jpeg', votes: 0 },
    { name: 'MAHI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/3754_24-25.jpeg', votes: 0 },
    { name: 'NEETU', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4048.jpg', votes: 0 },
    { name: 'NIKITA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/20240504084832905img.jpeg', votes: 0 },
    { name: 'NAVYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6213_24-25.jpeg', votes: 0 },
    { name: 'MADHVI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5849.jpg', votes: 0 },
    { name: 'PRIYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/5847.jpg', votes: 0 },
    { name: 'PRAGYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/4021.jpg', votes: 0 },
    { name: 'SHREYA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7536.jpg', votes: 0 },
    { name: 'SOUMILI', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/6316_24-25.jpeg', votes: 0 },
    { name: 'SAGARIKA', image: 'https://edusecure.org/Dpspnp/StudentInfo/StudentImages/7228.jpg', votes: 0 }
];


let currentDishIndex = 0;
let nextDishIndex = 1;

const leftDishElement = document.getElementById("left-dish");
const rightDishElement = document.getElementById("right-dish");
const leftDishName = document.getElementById("left-dish-name");
const rightDishName = document.getElementById("right-dish-name");

function updateDishElements() {
    leftDishElement.src = dishes[currentDishIndex].image;
    leftDishName.innerText = dishes[currentDishIndex].name;
    rightDishElement.src = dishes[nextDishIndex].image;
    rightDishName.innerText = dishes[nextDishIndex].name;
}

document.getElementById("left-button").addEventListener("click", function () {
    dishes[currentDishIndex].votes += 1;
    nextDishIndex++;
    if (nextDishIndex >= dishes.length) {
        nextDishIndex = 0; // Reset to the first dish if the end is reached
    }
    updateDishElements();
    updateLeaderboard();
});

document.getElementById("right-button").addEventListener("click", function () {
    currentDishIndex = nextDishIndex;
    dishes[currentDishIndex].votes += 1;
    nextDishIndex++;
    if (nextDishIndex >= dishes.length) {
        nextDishIndex = 0; // Reset to the first dish if the end is reached
    }
    updateDishElements();
    updateLeaderboard();
});

function updateLeaderboard() {
    let sortedDishes = [...dishes].sort((a, b) => b.votes - a.votes);
    let leaderboardContent = document.getElementById('leaderboard-content');
    leaderboardContent.innerHTML = '';

    sortedDishes.slice(0, 10).forEach(dish => {
        let item = document.createElement('div');
        item.classList.add('leaderboard-item');
        item.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-name">${dish.name}</div>
            <div class="votes">${dish.votes} votes</div>
        `;
        leaderboardContent.appendChild(item);
    });
}

// Initialize the first two dishes
updateDishElements();
updateLeaderboard();
