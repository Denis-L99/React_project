type Product = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}


const productsArray:Product[] = [
    {
        name:'IPhone X', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:500,
    },
    {
        name:'IPhone 13 Pro', 
        description:'Something about phone', 
        type:'phone', 
        capacity:128, 
        price:1000,
    },
    {
        name:'IPhone XS', 
        description:'Something about phone', 
        type:'phone', 
        capacity:512, 
        price:800,
    },
    {
        name:'IPhone 14 Pro Max', 
        description:'Something about phone', 
        type:'phone', 
        capacity:256, 
        price:1500,
    },
    {
        name:'IPhone 8', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:400,
    },
    {
        name:'IPhone 5', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:200,
    },

]

export default productsArray