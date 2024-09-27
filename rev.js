// let data2 ={
//     data:[
//         {
//             bookId:1,
//             bookDatails:{
//                 name:'ovisack roy',
//                 category:'jyf',
//                 price: '$20',
//             },
//             bookcategory:'basic'
//         }
//     ]
// }




let data2={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'habluder adda',
                category:'xyz',
                price:'20$',
            },
            
            bookCategory:'Basic',
        },
        {
            bookId:2,
            bookDetails:{
                name:'gobluder adda',
                category:'ABC',
                price:'40$',
            },
            bookCategory:'Beginner',
        }
]}

console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookDetails.price);