import axios from 'axios';
const beUrl = process.env.REACT_APP_BACKEND_URL


export async function loginUser(data) {
    const postData = data;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.post(`${beUrl}/api/videos/login`, postData, config);
        if (response.status === 200) {
            localStorage.setItem('USERNAME', response.data.username);
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function registerUser(data) {
    const postData = data;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.post(`${beUrl}/api/videos/register`, postData, config);
        console.log(response);
        if (response.status === 201) {
            localStorage.setItem('USERNAME', response.data.username);
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function logoutUser() {
    localStorage.removeItem('USERNAME');
}