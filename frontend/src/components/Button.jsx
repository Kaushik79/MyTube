import React from 'react';

const Button = ({ label, onClick }) =>{
    return(
        <button className='bg-gray-100 h-8 w-fit rounded-full px-3 text-sm text-gray-900' onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;