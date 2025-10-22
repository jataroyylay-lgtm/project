const products = [
    {
        title: "Gym Weight",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo officia deserunt.",
        price: 2400.00,
        reviews: 24,
        rating: 4, 
        imageSrc: "https://imageio.forbes.com/specials-images/imageserve/677f584db0ccedc06321b00a/DSC08501/1960x0.jpg?format=jpg&width=960" 
    },
    {
        title: "Cloud Nike Shoes",
        description: "Aenean gravida, odio qui officia. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
        price: 4800.00,
        reviews: 48,
        rating: 5,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQ2g0WqoY95d_WBVb-sFAulVbhqXcr_6CjQ&s" 
    },
    {
        title: "Summer Addides Shoes",
        description: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
        price: 3600.00,
        reviews: 74,
        rating: 3,
        imageSrc: "https://eazypc.in/wp-content/uploads/2025/05/photo-output-2-3.jpg" 
    }
];

function createStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        starsHtml += `<span style="color: ${i < rating ? 'gold' : 'lightgray'};">★</span>`;
    }
    return starsHtml;
}
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.imageSrc}" alt="${product.title}" class="product-image">
            </div>
            
            <div class="price-and-rating">
                <div class="rating">
                    ${createStars(product.rating)}
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
            
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-reviews">Reviews (${product.reviews})</p>
        </div>
    `;
}

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        const productsHtml = products.map(product => createProductCard(product)).join('');
        productGrid.innerHTML = productsHtml;
    }
}

document.addEventListener('DOMContentLoaded', renderProducts);