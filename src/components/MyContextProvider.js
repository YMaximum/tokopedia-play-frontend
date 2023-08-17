import { getVideos, groupVideos } from "../services/videoService";
import { getProducts } from "../services/productService";
import { getComments } from "../services/commentService";
import React, {
    useState,
    useEffect,
    createContext,
    useContext
} from "react";

const MyContext = createContext();
export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
    const [videoData, setVideoData] = useState({
        videos: [],
        videosByCategory: []
    });
    const [categoryTabs, setCategoryTabs] = useState([
        'All',
        'Explore',
        'Sale',
        'Recommendation',
        'Official Store',
        'Gaming'
    ]);
    const [vidGrouped, setVidGrouped] = useState({
        explore: [],
        sale: [],
        recommendation: [],
        officialStore: [],
        gaming: []
    });
    const [detailData, setDetailData] = useState({
        products: [],
        comments: [],
        embedID: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchDetail, setIsFetchDetail] = useState(false);

    const fetchVideoData = async () => {
        const vidData = await getVideos();
        const vidDataCategory = await groupVideos('category');
        await setVideoData({
            ...videoData,
            videos: vidData,
            videosByCategory: vidDataCategory
        });
        await setIsLoading(false);
    }

    const findEmbed = (condition) => {
        try {
            const video = videoData.videos.find(vid => vid._id === condition);
            return video.embedID;
        }
        catch (e) {
            console.log(`No data in ${condition} video ID :::`, e.message)
            return [];
        }
    }

    const fetchDetail = async (videoID) => {
        const fetchProducts = await getProducts(videoID);
        const fetchComments = await getComments(videoID);
        const fetchEmbedID = await findEmbed(videoID);
        await setDetailData({
            ...detailData,
            products: fetchProducts,
            comments: fetchComments,
            embedID: fetchEmbedID
        });
        await setTimeout(() => {
            setIsFetchDetail(true);
        }, 500);
    };

    useEffect(() => {
        fetchVideoData();
    }, [isLoading]);

    return (
        <MyContext.Provider value={{
            ...videoData,
            isLoading,
            setIsLoading,
            categoryTabs,
            vidGrouped,
            setVidGrouped,
            isFetchDetail,
            setIsFetchDetail,
            ...detailData,
            setDetailData,
            fetchDetail,
        }}>
            {children}
        </MyContext.Provider>
    );
};