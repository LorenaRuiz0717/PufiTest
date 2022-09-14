import { createStore } from "redux"

const initialState={
    products:[{
        id:1,
        name:'Pufi RAIN',
        imgLink:'https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg',
        img:'https://img.freepik.com/vector-gratis/paraguas-rosa-realista_1284-6150.jpg?w=740&t=st=1663106898~exp=1663107498~hmac=7168ae5431bddf0b8924677063f7779ffd3adfd9ef29afb317104ad519095fb6',
        description:'Descripción del producto. Este es un texto simulado'
    },
    {
        id:2,
        name:'Pufi PUFF',
        imgLink:'https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg',
        img:'https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg',
        description:'Descripción del producto. Este es un texto simulado'
    },{
        id:3,
        name:'Pufi CART',
        imgLink:'https://i.pinimg.com/236x/6a/d6/23/6ad623c8e13d270c2d44ae488816c82f.jpg',
        img:'https://i.pinimg.com/564x/8c/44/af/8c44afd1f67e87bd3a038d38ea8a402b.jpg',
        description:'Descripción del producto. Este es un texto simulado'
    },
    {
        id:4,
        name:'Pufi NAP',
        imgLink:'https://i.pinimg.com/564x/88/98/3e/88983e2a265232d2e8088bcdf1f06a87.jpg',
        img:'https://i.pinimg.com/564x/1e/8d/dc/1e8ddc66d6dffdc0cb15b1c940c8fb83.jpg',
        description:'Descripción del producto. Este es un texto simulado'
    },
],
    galleryInstagram:[{
        id:'100',
        img:'https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg'
    },{
        id:'200',
        img:'https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg' 
    },{
        id:'300',
        img:'https://i.pinimg.com/236x/6a/d6/23/6ad623c8e13d270c2d44ae488816c82f.jpg'
    },{
        id:'400',
        img:'https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg' 
    },{
        id:'600',
        img:'https://i.pinimg.com/236x/6a/d6/23/6ad623c8e13d270c2d44ae488816c82f.jpg'
    },{
        id:'700',
        img:'https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg'
    }

        ]
}
const reducerProducts=( state = initialState, action)=>{
    return state
}

export default createStore(reducerProducts)