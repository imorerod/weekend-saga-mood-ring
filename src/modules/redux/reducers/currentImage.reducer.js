const feeling = (state = 0, action) => {
    if (action.type === 'FEEDBACK_FEELING_DECREASE') {
        const newstate = state - 1;
        console.log('FEEDBACK_FEELING_DECREASE', newstate);
        return newstate;
    } else if (action.type === 'FEEDBACK_FEELING_INCREASE') {
        const newstate = state + 1;
        console.log('FEEDBACK_FEELING_INCREASE', newstate);
        return newstate;
    }
    return state;
}

export default feeling;
