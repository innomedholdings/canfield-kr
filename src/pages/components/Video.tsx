import React from "react"

interface IVideoProps {
    videoSrcURL: string;
}
export default function Video({videoSrcURL}: IVideoProps){
    if(videoSrcURL) {
        return (
            <div>            <span>Video</span>
            <video autoPlay={true} loop={true} width="100%" title="A video">
                <source src={videoSrcURL} type="video/mp4" />
            </video></div>

        )
    }
}
