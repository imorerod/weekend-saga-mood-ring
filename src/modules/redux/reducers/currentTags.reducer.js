const currentTags = (state = [], action) => {
    switch (action.type) {
        case 'GET_CURRENT_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default currentTags;