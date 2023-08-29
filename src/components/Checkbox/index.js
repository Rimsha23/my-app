import React from 'react'
const Checkbox = ({ task, time, isChecked, onChange,onClick }) => {
    return (
        <div className='w-80 flex h-[45px] flex justify-left items-left'>
            <input
                type='checkbox'
                value='done'
                className='accent-gray-300 text-gray-600 '
                checked={isChecked}
                onChange={onChange}
            />
            <div className='flex flex-col'>
                <label onClick={onClick} htmlFor={`task-${task.id}`} className='ml-2 mt-3 text-[15px] text-gray-700 font-bold'>{task}</label>
                {time && <span className='text-[12px] text-gray-500'>⏰{time}</span>}
            </div>
        </div>
    );
}

export default Checkbox;




