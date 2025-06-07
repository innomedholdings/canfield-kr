import React from "react"

interface IVideoProps {
    videoSrcURL: string;
}
export default function Video({videoSrcURL}: IVideoProps){
    if(videoSrcURL) {
        return (
            <video autoplay="" loop="" muted="" playsinline="" width="100%" title="A video">
                <source src={videoSrcURL} type="video/mp4" />
            </video>
        )
    }
}
