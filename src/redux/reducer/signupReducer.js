import { SIGNUP_USER } from '../actions/types'
const initalState = {
    list: []
}

export const signupReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const item = action.payload
            console.log(item)
            return {
                ...state,
                item
            }
        default: return state;
    }
}