import React, { useState } from "react";
import { BigPlayButton, ControlBar, LoadingSpinner, Player as VideoPlayer } from "video-react";

const CustomVideoPlayer = ({ src }) => {
    const [player, setPlayer] = useState();
    const [source, setSource] = useState(src);

    return (
        <div>
            <VideoPlayer
                ref={(player) => {
                    setPlayer(player)
                }}
                src={source}
            >
                <source src={source} />
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar disableCompletely />
            </VideoPlayer>
        </div>
    )
}

export default CustomVideoPlayer;
