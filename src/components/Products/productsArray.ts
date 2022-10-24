type Product = {
    id: number,
    name: string
    description: string
    type: string
    capacity: number
    price: number
}


const productsArray:Product[] = [
    {
        id:1,
        name:'IPhone X', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:500,
    },
    {
        id:2,
        name:'IPhone 13 Pro', 
        description:'Something about phone', 
        type:'phone', 
        capacity:128, 
        price:1000,
    },
    {
        id:3,
        name:'IPhone XS', 
        description:'Something about phone', 
        type:'phone', 
        capacity:512, 
        price:800,
    },
    {
        id:4,
        name:'IPhone 14 Pro Max', 
        description:'Something about phone', 
        type:'phone', 
        capacity:256, 
        price:1500,
    },
    {
        id:5,
        name:'IPhone 8', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:400,
    },
    {
        id:6,
        name:'IPhone 5', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:200,
    },

]

export default productsArray