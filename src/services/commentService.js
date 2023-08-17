import axios from 'axios';
const beUrl = process.env.REACT_APP_BACKEND_URL

export async function getComments(videoID) {
    try {
        const response = await axios.get(`${beUrl}/api/videos/${videoID}/comments`);
        return await response.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function addComment(videoID, data) {
    data.videoID = videoID;
    const postData = data;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        await axios.post(`${beUrl}/api/videos/${videoID}/comments`, postData, config);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}