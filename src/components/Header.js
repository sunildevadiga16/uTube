import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGGESTIONS_API } from '../utils/constants';
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    console.log(searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);



        return () => {
            clearTimeout(timer);
        };

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const suggestionsRes = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
        const suggestionsResJson = await suggestionsRes.json();
        setSuggestions(suggestionsResJson[1]);

        // update cache
        dispatch(
            cacheResults({
                [searchQuery]: suggestionsResJson[1],
            })
        );
    }


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
            <div className='col-span-10 px-10 items-center'>
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)} />
                {showSuggestions && (<div className='absolute bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map((sugsn) => (
                            <li key={sugsn} className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍  {sugsn}</li>
                        ))}
                    </ul>
                </div>)}
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-300">🔍</button>
            </div>

            <div className='col-span-1'>
                <img className="h-12" alt="user-logo" src="https://img.icons8.com/clouds/100/null/user.png" />
            </div>
        </div>
    )
}

export default Header;