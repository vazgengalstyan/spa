import {CLEAR_DATA_SELECT} from "../actionsTypes";

const clearDataSelect = ()=>{
    return {
        type: CLEAR_DATA_SELECT,
        payload: []
    }
};

export {clearDataSelect}