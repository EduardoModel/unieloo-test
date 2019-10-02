const mainPageReducer = (state, action) => {
    switch(action.type){
        case 'FILL_DATA':
            return action.data

        default:
            return state
    }
}

export {mainPageReducer as default}