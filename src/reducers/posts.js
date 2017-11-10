function posts(state = [], action) {
    console.log('-=-=-=-=- POSTS =-=-=-=-=-=');
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`state: ${JSON.stringify(state)}`);
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    return state;
}

export default posts;