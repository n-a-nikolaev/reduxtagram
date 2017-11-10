function comments(state = [], action) {
    console.log('-=-=-=-=- COMMENTS =-=-=-=-=-=');
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`state: ${JSON.stringify(state)}`);
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    return state;
}

export default comments;