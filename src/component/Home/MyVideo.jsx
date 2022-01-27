import React, { useState, useEffect, Fragment } from "react";

const MyVideo = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchedVideo, setSearchedVideo] = useState(videos);

    useEffect(() => {
        fetch('https://asia-south1-holidaying-prod.cloudfunctions.net/interviewAssignment?q=health&numResults=21')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response
            })
            .then(data => {
                setVideos(data.results)
                setSearchedVideo(data.results)
            })
            .catch(error => {
                console.log('error fetching videos : ', error);
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const searchedResult = videos.filter((video) => {
            const { tags = [] } = video;
            return tags.some((val) => {
                return val.toLocaleLowerCase().includes(value.toLocaleLowerCase());
            })
        });
        setSearchedVideo(searchedResult);
    }

    return (
        <Fragment>
            {
                loading ? <p className="loadCenter">Loading.....</p>
                    :
                    error ?
                        <p className="loadCenter">Please try again</p>
                        :
                        <div className="videoWrapper">
                            <div className="videoWrapper_head">
                                <h1 className="videoWrapper_head_txt">Videos</h1>
                                <input type="text" placeholder="Search Video" className="videoWrapper_head_serch" onChange={(e) => handleSearch(e)} value={searchValue} />
                            </div>
                            <div className="videoWrapper_content">
                                {(searchedVideo.length > 0) ? searchedVideo.map((data, index) => {
                                    const { heading = '', video = '', text = '' } = data;
                                    return (
                                        <div className="videoWrapper_content_video">
                                            <video controls className="videoWrapper_content_video_src" key={index}>
                                                <source src={video} type="video/mp4" />
                                            </video>
                                            {/* <div className="videoWrapper_content_video_detail">
                                                <h2 className="videoWrapper_content_video_head">{heading}</h2>
                                                <p className="videoWrapper_content_video_txt">{text}</p>
                                            </div> */}
                                        </div>
                                    )
                                })
                                    :
                                    <h1 className="videoWrapper_content_notfound">No Video Found</h1>
                                }
                            </div>
                        </div>
            }
        </Fragment>
    )
}

export default MyVideo
