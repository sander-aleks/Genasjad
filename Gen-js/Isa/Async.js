//Ise käivituv funct

/*
( () => {

})();*/

/*(async () => {
    const response = await fetch('https://dummyjson.com/products')
    const { product } = await response.json();
    console.log(product)
})();*/


async function getProductsData() {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    console.log(products);
    return products;
}
getProductsData();

async function getProductsCategories(){
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    console.log(categories);
    return categories;
}
getProductsCategories();

async function createCategoryButtons(){
    const categories = await getProductsCategories();

    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
}
createCategoryButtons();

async function showProductList() {
    const product = await getProductsData()
    const productListElement = document.querySelector('.table-body')

    product.forEach((product) => {
        const tableRow = document.createElement('tr')
        const content =`
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.rating}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.discount}</td>

            </tr>
        `
        tableRow.innerHTML = content;
        productListElement.append(tableRow)
    })
}
showProductList()