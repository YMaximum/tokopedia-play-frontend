import axios from 'axios';

export async function getVideos() {
    try {
        const response = await axios.get('/api/videos');
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
        const response = await axios.post('/api/videos', postData, config);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function groupVideos(groupBy) {
    try {
        const response = await axios.get(`/api/videos/group/${groupBy}`);
        return await response.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function deleteVideo (data) {
    try {
        const response = await axios.delete(`/api/videos/${data.videoID}`);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}