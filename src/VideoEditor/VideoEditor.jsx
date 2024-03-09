import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import styles from './VideoEditor.module.css';
import video_placeholder from '../asset/Video_placeholder.png';
import VideoPlayer from './VideoPlayer';

const ffmpeg = createFFmpeg({ log: true });

const VideoEditor = () => {
    const uploadFile = useRef('');
    const [VideoFile, setVideoFile] = useState();
    const [ffmpegLoaded, setFFmpegLoaded] = useState(false);

    useEffect(() => {
        ffmpeg.load().then(() => {
            setFFmpegLoaded(true);
        });
    }, []);

    // 파일 선택 시 VideoFile 상태를 설정하는 함수
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setVideoFile(file);
    };

    return (
        <article className='layout' style={{ padding: '56px 16px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                <h1 className={styles.title}>Video Edit</h1>
                {
                    !VideoFile && (
                        <div>
                            <input
                                type="file"
                                accept='video/*'
                                style={{ display: 'none' }}
                                ref={uploadFile}
                                onChange={handleFileUpload} // 파일 선택 시 호출되는 함수 추가
                            />
                            <Button
                                onClick={() => uploadFile.current.click()}
                                className={styles.re__upload__btn}
                                style={{ width: 'fit-content'}}
                            >
                                비디오 재선택
                            </Button>    
                        </div>
                    )
                }    
            </div>
            <section>
                {
                    VideoFile ? (
                        <VideoPlayer videoFile={VideoFile} />
                    ) : (
                        <div>
                            <img src={video_placeholder} alt='비디오를 업로드해주세요.' style={{marginBottom: 32}} />
                            <Button
                                onClick={() => uploadFile.current.click()}
                                className={styles.upload__btn}
                            >
                                비디오 업로드하기
                            </Button>
                        </div>
                    )
                }
            </section>
        </article>
    );
}

export default VideoEditor;