import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } |
    { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort( (a, b) => {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0
            })
            console.log(newState)

            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'check': {
            return [...state].filter(u => u.age >= action.payload)
        }
        default: return state
    }
}