// Sample product data (replace with your actual data)
const products = [
    {
        id: 1,
        name: "Basic T-Shirt",
        price: 25.99,
        category: "tshirts",
        sizes: ["S", "M", "L"],
        image: "images/products/tshirt1.jpg" // Replace with your image path
    },
    {
        id: 2,
        name: "Slim Jeans",
        price: 59.99,
        category: "pants",
        sizes: ["28", "30", "32"],
        image: "images/products/jeans1.jpg" // Replace with your image path
    },
    {
        id: 3,
        name: "Summer Dress",
        price: 89.99,
        category: "dresses",
        sizes: ["S", "M", "L"],
        image: "images/products/dress1.jpg" // Replace with your image path
    }
];

// Render products
function renderProducts(filteredProducts) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        grid.innerHTML += `
            <div class="col-md-4 col-6 mb-4 product-card" data-category="${product.category}" 
                 data-price="${product.price}" data-sizes="${product.sizes.join(',')}">
                <div class="card">
                    <img src="${product.image}" class="card-img-top img-fluid" 
                         alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filter and sort logic
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const priceSort = document.getElementById('priceFilter').value;
    const size = document.getElementById('sizeFilter').value;

    let filtered = products.filter(p => {
        return (!category || p.category === category) &&
               (!size || p.sizes.includes(size));
    });

    // Sorting
    if (priceSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

// Event listeners for filters
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('sizeFilter').addEventListener('change', applyFilters);

// Initial render
renderProducts(products);