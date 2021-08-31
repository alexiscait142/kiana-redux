export const reducer = (state = [], action) => {
    switch (action.type){
        case "success":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}