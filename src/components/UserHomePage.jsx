import React from 'react';

const bc = new BroadcastChannel('dhawan_channel');
function onHandleLogout() {
    bc.postMessage('loggedout');
    localStorage.setItem('isLoggedIn', false);
}

function UserHomePage() {
    return (
        <div>
            <h1>Welcome User!</h1>
            <button onClick={onHandleLogout}>Logout</button>
        </div>
    );
}

export default UserHomePage;