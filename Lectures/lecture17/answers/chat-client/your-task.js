// code that responds to messages received from the server:
const showAllUsers = data => {
    console.log('Show all users');
    console.log(data);
};

const removeUser = data => {
    // a user has just disconnected...
    console.log('A user has just disconnected:');
    console.log(data);
};

const addUser = data => {
    console.log('A user has just joined:');
    console.log(data);
};

const showChat = data => {
    console.log('A user has just set a chat message:');
    console.log(data);
};


const handleReceivedMessages = e => {
    const data = JSON.parse(e.data);
    if (data.type === 'login') {
        showAllUsers(data)
    } else if (data.type === 'disconnect') {
        removeUser(data);
    } else if (data.type === 'chat') {
        showChat(data);
    } else {
        console.error("Message type not recognized.");
        console.log(data);
    }
};