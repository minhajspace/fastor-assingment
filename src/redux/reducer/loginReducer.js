import { LOGIN_USER, } from '../actions/types'
const initalState = {
    token: ""
}

export const loginReducer = (state = initalState, action) => {

    switch (action.type) {
        case LOGIN_USER:
            const token = action.payload.data.data.token
            console.log(token)
            return {
                ...state,
                token: [...state.token, token]
            }
        default: return state;
    }

}