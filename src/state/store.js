import {createStore} from 'redux'

const initState= {
    menu:{
        pizzas:[
            {id:1,PizzaName:'vegan',PizzaPrice:12,img:'https://cdn.loveandlemons.com/wp-content/uploads/2018/09/IMG_14058.jpg'},
            {id:2,PizzaName:'bacon',PizzaPrice:22,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjeT1mnP-iVsc-NZxgE57v84RqyafOPs1HBpKZXsgVsQJrusz'},
            {id:3,PizzaName:'cheese',PizzaPrice:13,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01NVXMPUEgqJxxqK--hZvHe5ZCk1TG95w-Z4yl3yrHztydCgi3w'},
            {id:4,PizzaName:'spicyandmeat',PizzaPrice:32,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVhYjwpF7CDgZhIQidRJuPWE-LWHmRX9tgCuvVrb1q57wYo4r'}
        ],
        drinks:{}
    },
    basket:[]
}

const reducer = (state = initState,action) =>{
    switch(action.type){
        case 'ADD_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.element]
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket:[]
            }
        default:
            return state
    }
}

const store = createStore(reducer)
export default store

