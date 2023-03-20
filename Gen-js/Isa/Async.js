//Ise käivituv funct

/*
( () => {

})();*/

/*(async () => {
    const response = await fetch('https://dummyjson.com/products')
    const { product } = await response.json();
    console.log(product)
})();*/


async function getProductsData() { // Defineerin asünkroonse funktsiooni nimega getProductsData. 
    const response = await fetch('https://dummyjson.com/products'); // defineerin muutuja nimega response, ootan vastuse API päringusse ja salvestan muutujasse response
    const { products } = await response.json(); // Ootame kuni response muudetakse JSON formaati ning võtame response seest 'key' nimega products ja salvestame samanimelisse muutujasse
    console.log(products); // console logib products data
    return products; // tagastab muutuja products
}
getProductsData();

async function getProductsCategories(){ // Defineerin asünkroonse funktsiooni nimega getProductsCategories. 
    const response = await fetch('https://dummyjson.com/products/categories'); // defineerin muutuja nimega response, ootan vastuse ja salvestan muutujasse response
    const categories = await response.json(); // Ootame kuni response muudetakse JSON formaati ning võtame response seest 'key' nimega categories ja salvestame samanimelisse muutujasse
    console.log(categories); // console logib categories
    return categories; // tagastab muutuja categories
}
getProductsCategories();

async function createCategoryButtons(){ // Defineerin asünkroonse funktsiooni nimega createCategoryButtons. 
    const categories = await getProductsCategories(); // Defineerin muutuja nimega categories siis käivitan getProductCategories ja ootan vastust 

    const categoryList = document.querySelector('.category-list'); // Defineerin muutuja mimega categoryList ja defineerin querySelectoriga cssi category-list

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