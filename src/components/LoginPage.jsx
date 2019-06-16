import React from 'react';

const bc = new BroadcastChannel('dhawan_channel');
function login() {
    localStorage.setItem('isLoggedIn', true);
    bc.postMessage('loggedin');
}

function LoginPage() {
    return (
        <button onClick={login}>Login</button>
    );
}

export default LoginPage;