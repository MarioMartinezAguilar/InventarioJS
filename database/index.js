const db_cash=10000;

const db_productos=[
    {id:1,name:"manzana",stored:1500,price:15},
    {id:2,name:"Pera",stored:1000,price:13},
    {id:3,name:"Sandias",stored:2500,price:18},

];

const db_sales=[
    {
        productId:1,
        date : new Date(2023,06,01),
        quantity: 100,
        totalPrice: 1500,

    },
];

const db_purchase=[
    {
        productId:2,
        date: new Date(2023,06,01),
        quantity:50,
        price:7.50,
        totalPrice:375
    },
];
