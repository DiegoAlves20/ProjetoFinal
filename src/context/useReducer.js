export const initialState = {user: '', favorites:[]}

export const UseReducer = (state, action) => {
    switch(action.type) {
        case 'setUser' :
            return{...state, user: action.payload.user}
        break;
        default: return state;
    }
}