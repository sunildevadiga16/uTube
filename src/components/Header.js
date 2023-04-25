import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-10 cursor-pointer" alt="menu" src="https://img.icons8.com/ios-filled/50/null/menu--v1.png" />
                <a href='/'><img className="h-12 ml-10" alt="youtube-logo" src="https://img.icons8.com/cute-clipart/64/null/youtube.png" /></a>
            </div>
            <div className='col-span-10 px-10 text-center'>
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" />
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-300">🔍</button>
            </div>
            <div className='col-span-1'>
                <img className="h-12" alt="user-logo" src="https://img.icons8.com/clouds/100/null/user.png" />
            </div>
        </div>
    )
}

export default Header