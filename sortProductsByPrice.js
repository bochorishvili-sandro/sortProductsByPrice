const inputProducts = [
    {
        title: "Phone Case",
        price: 23,
        quantity: 2,
        category: "Accesories",
    },
    {
        title: "Adroid Phone",
        price: 150,
        quantity: 1,
        category: "Phone",
    },
    {
        title: "Headphones",
        price: 78,
        quantity: 2,
        category: "Accesories",
    },
    {
        title: "Sport Watch",
        price: 55,
        quantity: 2,
        category: "Watch",
    },
];

function sortProductsByPrice(products){
    const sortProductsByPrice =[...products];
    sortProductsByPrice.sort((a,b) => a.price - b.price);
    return sortProductsByPrice;
}
console.log("initial", inputProducts);
console.log("sorted", sortProductsByPrice(inputProducts));