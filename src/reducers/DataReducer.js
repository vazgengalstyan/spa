import {SET_DATA_IN_STORE,CHECK_ITEM,UNCHECK_ITEM,CLEAR_DATA_SELECT,SET_DISCOUNT} from '../actionsTypes'

const INITIAL_STATE = {
    data: [],
    selectedItems: [],
    discount: 0
};

export default (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_DATA_IN_STORE:
            return {
                ...state,
                data: action.payload.data
            };
        case CHECK_ITEM:
            let newSelectItemData = [...state.selectedItems];
            newSelectItemData.push(action.payload.item);
            return{
                ...state,
                selectedItems: newSelectItemData
            };
        case UNCHECK_ITEM:
            let newUnChackItemData = [...state.selectedItems];
            let index = newUnChackItemData.map(function(e) { return e.id; }).indexOf(action.payload.item.id);
            newUnChackItemData.splice(index, 1);
            return{
                ...state,
               selectedItems: newUnChackItemData
            };
        case CLEAR_DATA_SELECT:
            return{
                ...state,
                selectedItems: []
            };
        case SET_DISCOUNT:
            return {
                ...state,
                discount: action.payload
            };
        default: return state
    }
}