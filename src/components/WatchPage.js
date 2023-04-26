import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const [searchParam] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    })

    return (
        <>
            <div className='flex flex-col'>
                <div className="px-5">
                    <iframe
                        width="900"
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParam.get('v')}
                        title="YouTube video player"
                        frameBorder="0"
                        autoPlay="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen

                    >
                    </iframe>
                </div>
                <CommentsContainer />
            </div>
        </>
    )
}

export default WatchPage