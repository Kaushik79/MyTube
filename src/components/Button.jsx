import React from 'react';

const Button = ({ label }) =>{
    return(
        <button className='bg-gray-500 h-8 w-fit rounded-lg px-3'>
            {label}
        </button>
    );
}

export default Button;