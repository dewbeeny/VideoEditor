import React, { useState } from 'react';
import styles from './VideoEditor.module.css';

import Video_placeholder from '../../assets/images/editor/Video_placeholder.svg'

const VideoEditor = () => {
    const [VidepFile, setVideoFile] = useState();
    return (
        <article className='layout' style={{ padding '56px 16px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom:16px}}></div>
        <h1 className={styles.title}>Video Edit</h1>
            <section>
                
        </section>
        </article>
    )
}

export default VideoEditor;