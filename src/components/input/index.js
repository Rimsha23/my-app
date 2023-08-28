import React from 'react'
const Input = ({ className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline border border-slate-200',
    type,
    id,
    name,
    label,
    placeholder,
    img,
    onChange,
    value
}) => {
    return (
        <>
            <input
                name={name}
                id={id}
                type={type}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                img={img}
            />
        </>
    );
}
export default Input;