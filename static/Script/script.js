const formContainer = document.getElementById('form-container');
const listContainer = document.getElementById('list-container');
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const newProductBtn = document.getElementById('new-product-btn');

productForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturar os dados do formulário
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const available = document.querySelector('input[name="available"]:checked').value;

    // Enviar os dados para o servidor
    const response = await fetch('/add_product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price, available }),
    });

    if (response.ok) {
        updateProductList();
        formContainer.classList.add('hidden');
        listContainer.classList.remove('hidden');
    }
});

newProductBtn.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
    listContainer.classList.add('hidden');
});

async function updateProductList() {
    const response = await fetch('/get_products');
    const products = await response.json();

    productList.innerHTML = '';

    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.name}</td><td>R$ ${parseFloat(product.price).toFixed(2)}</td>`;
        productList.appendChild(row);
    });
}

// Atualiza a lista ao carregar a página
updateProductList();
