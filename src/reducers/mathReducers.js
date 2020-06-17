const initialState = {
    number: 0
}
const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state;
        default:
            return state;
    }
}
export default mathReducer;