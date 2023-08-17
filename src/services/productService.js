import axios from 'axios';

export async function getProducts(videoID) {
    try {
        const response = await axios.get(`/api/videos/${videoID}/products`);
        return await response.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}

export async function addProduct(data) {
    const postData = data;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.post(`/api/videos/${data.videoID}/products`, postData, config);
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}