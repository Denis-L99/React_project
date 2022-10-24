type Product = {
    id: number,
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image:string
}


const productsArray:Product[] = [
    {
        id:1,
        name:'IPhone 12 mini', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:500,
        image:"/images/12_mini.jpg",
    },
    {
        id:2,
        name:'IPhone 13 Pro', 
        description:'Something about phone', 
        type:'phone', 
        capacity:128, 
        price:1000,
        image:"/images/13_pro.jpg",
    },
    {
        id:3,
        name:'IPhone 11', 
        description:'Something about phone', 
        type:'phone', 
        capacity:512, 
        price:800,
        image:"/images/11.jpg",
    },
    {
        id:4,
        name:'IPhone 14 Pro Max', 
        description:'Something about phone', 
        type:'phone', 
        capacity:256, 
        price:1500,
        image:"/images/14_Pro_Max.jpg",
    },
    {
        id:5,
        name:'IPhone SE', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:400,
        image:"/images/SE.png",
    },
    {
        id:6,
        name:'IPhone 12', 
        description:'Something about phone', 
        type:'phone', 
        capacity:64, 
        price:200,
        image:"/images/12.jpg",
    },

]

export default productsArray