const understanding = (state = '', action) => {
    if (action.type === 'FEEDBACK_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

export default understanding;
