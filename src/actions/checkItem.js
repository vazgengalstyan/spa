import {CHECK_ITEM} from "../actionsTypes";

const checkItem = (item)=>{
    return {
        type: CHECK_ITEM,
        payload: {item: item}
    }
};

export {checkItem}