import React from 'react'
const variants = {
    'primary': 'bg-black text-white hover:enabled:bg-white hover:enabled:text-black hover:border-black',
    'danger': 'bg-red-600 text-white hover:enabled:bg-red-500 rounded-lg',
    'naked': 'bg-transparent text-black hover:enabled:text-gray-700  rounded-lg hover:shadow-lg hover:shadow-gray-500',
    'white': 'bg-white border:none text-black hover:enabled:bg-gray-300 rounded-lg',
    'w-sidebar': 'bg-white border:none text-black rounded-r-3xl  active:bg-black active:text-white hover:bg-gray-300',
    'b-sidebar': 'bg-black  text-white border-none rounded-r-3xl  ',
    'sidebox': 'bg-transparent text-black hover:enabled:text-gray-700  rounded-lg ',
}
const sizes = {
    'small': 'w-fit h-6 text-xs ',
    'medium': 'px-2 py-2 text-sm active:text-xs ',
    'large': 'px-2 py-3 text-lg',
    'full': 'w-full font-bold py-2 px-4 ',
    'modal': 'w-72 h-12 ',
    'cancel': 'w-full font-bold py-2 px-4'
}

const Button = ({ className, variant, size, ...props }) => {
    return (
        <>
            <button className={`${className} ${variants[variant]} ${sizes[size]} `}
                {...props} />
        </>
    );
}
export default Button;

