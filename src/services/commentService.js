import axios from 'axios';

export async function getComments(videoID) {
    try {
        const response = await axios.get(`/api/videos/${videoID}/comments`);
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
        const response = await axios.post(`/api/videos/${videoID}/comments`, postData, config);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}