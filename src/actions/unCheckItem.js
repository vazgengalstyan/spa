import {UNCHECK_ITEM} from "../actionsTypes";

const unCheckItem = (item)=>{
    return {
        type: UNCHECK_ITEM,
        payload: {item: item}
    }
};

export {unCheckItem}