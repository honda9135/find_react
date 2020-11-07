const initState = {
}
const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MENU':
            console.log('created Menu', action.menu);
            return {
                ...state,
            }
        case 'CREATE_MENU_ERROR':
            console.log('create menu error', action.err);
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export default menuReducer