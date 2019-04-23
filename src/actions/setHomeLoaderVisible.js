import {SET_HOME_LOADER_VISIBLE} from "../actionsTypes";

const setHomeLoaderVisible = (visible)=>{
    return {
        type: SET_HOME_LOADER_VISIBLE,
        payload: {visible: visible}
    }
};

export {setHomeLoaderVisible}