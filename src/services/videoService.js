import axios from 'axios';
const beUrl = process.env.REACT_APP_BACKEND_URL

export async function getVideos() {
    try {
        const response = await axios.get(`${beUrl}/api/videos`);
        return await response.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function addVideo(data) {
    const postData = data
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        await axios.post(`${beUrl}/api/videos`, postData, config);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function groupVideos(groupBy) {
    try {
        const response = await axios.get(`${beUrl}/api/videos/group/${groupBy}`);
        return await response.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function deleteVideo (data) {
    try {
        await axios.delete(`${beUrl}/api/videos/${data.videoID}`);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}