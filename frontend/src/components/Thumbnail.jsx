import React from 'react';

const Thumbnail = () => {
    return(
        <div className='w-full p-3 bg-gray-50 rounded-lg hover:scale-105 transition-all'>
            <div className='bg-gray-100 w-full aspect-video rounded-lg'></div>
            <div className='flex gap-3 mt-3'>
                <div className='w-9 h-9 rounded-full bg-gray-400 flex-shrink-0'></div>

                <div className='flex flex-col'>
                    <h3 className='text-sm font-semibold leading-snug line-clamp-2'>
                        Video title goes here and yeah thats true i guess because of the clamp we have added it must work lorem ipsum will help us i guess
                    </h3>
                    <p className='text-xs text-gray-500 mt-1'>
                        Channel Name
                    </p>
                    <p className='text-xs text-gray-500'>
                        1.2M Views / 2 days ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;