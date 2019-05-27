const support = (state = '', action) => {
    if (action.type === 'FEEDBACK_SUPPORT') {
        return action.payload;
    }
    return state;
}

export default support;
