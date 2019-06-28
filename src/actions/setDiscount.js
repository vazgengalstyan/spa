import {SET_DISCOUNT} from "../actionsTypes";

const setDiscount = (discount)=>{
    return {
        type: SET_DISCOUNT,
        payload: discount
    }
};

export {setDiscount}