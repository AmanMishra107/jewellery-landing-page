const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(el => {
            el.classList.remove("text-[#800020]");
            el.classList.add("text-gray-700");
            el.querySelector(".nav-underline").classList.add("hidden");
        });

        link.classList.add("text-[#800020]");
        link.classList.remove("text-gray-700");
        link.querySelector(".nav-underline").classList.remove("hidden");
    });
});


// Product data with 3 jewelry items using your original naming
const products = [{
    image: "assets/p5.png",
    title: "ALPER DIAMOND PLATINU...",
    price: "₹1,56,600"
}, {
    image: "assets/p6.png",
    title: "EMERALD GOLD NECKLACE...",
    price: "₹2,45,800"
}, {
    image: "assets/p7.png",
    title: "RUBY VINTAGE COLLECTION...",
    price: "₹3,12,400"
}];

let currentIndex = 0;

// Get DOM elements
const productImage = document.getElementById('productImage');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');

// Get all arrow buttons
const prevDesktop = document.getElementById('prevDesktop');
const nextDesktop = document.getElementById('nextDesktop');
const prevMobile = document.getElementById('prevMobile');
const nextMobile = document.getElementById('nextMobile');

// Function to update product display
function updateProduct() {
    const product = products[currentIndex];
    productImage.src = product.image;
    productTitle.textContent = product.title;
    productPrice.textContent = product.price;
}

// Function to go to next product
function nextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    updateProduct();
}

// Function to go to previous product
function prevProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateProduct();
}

// Add event listeners to all arrow buttons
nextDesktop.addEventListener('click', nextProduct);
prevDesktop.addEventListener('click', prevProduct);
nextMobile.addEventListener('click', nextProduct);
prevMobile.addEventListener('click', prevProduct);



function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const isOpen = menu.classList.contains('translate-x-0');

    if (isOpen) {
        // Close
        menu.classList.replace('translate-x-0', '-translate-x-full');
        overlay.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    } else {
        // Open
        menu.classList.replace('-translate-x-full', 'translate-x-0');
        overlay.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    document.getElementById('hamburger-icon').classList.remove('hidden');
    document.getElementById('close-icon').classList.add('hidden');

    menu.classList.replace('translate-x-0', '-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}