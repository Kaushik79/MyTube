import React from 'react';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
const SearchNNavBar = () => {
    return(
        <div className='flex items-center gap-3 p-3 rounded-md w-5/6 h-12 bg-gray-300'>
        <SearchBar/>
            <div className='flex items-center flex-row overflow-hidden gap-3'>
                <Button label="Tech"/>
                <Button label="Education"/>
                <Button label="Trending"/>
                <Button label="History"/>
                <Button label="Home"/>
            </div>
        </div>
    );
}

export default SearchNNavBar;