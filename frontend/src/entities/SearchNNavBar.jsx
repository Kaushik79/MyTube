import React from 'react';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
const SearchNNavBar = () => {
    return(
        <div className='flex items-center rounded-full w-full h-12 justify-between'>
            <Button label="MyTube"/>
            <div className='flex justify-center items-center gap-3 px-3 flex-1 rounded-full'>
                <SearchBar/>
                <div className='flex items-center flex-row overflow-hidden gap-3'>
                    <Button label="Tech"/>
                    <Button label="Education"/>
                    <Button label="Trending"/>
                    <Button label="History"/>
                    <Button label="Home"/>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <Button label="L" />
                <Button label="H"/>
                <div className='w-9 h-9 flex-shrink-0 rounded-full bg-black'>

                </div>
            </div>
        </div>
    );
}

export default SearchNNavBar;