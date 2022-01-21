import { NAV_TOGGLE } from "../types/NavType";

export const NavReducer = (state, action) => {
    if(action.type === NAV_TOGGLE){
        return !state
    }else{
        return state;
    }
    
}