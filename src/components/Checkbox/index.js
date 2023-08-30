import React from 'react'
const Checkbox = ({ task, time, isChecked, onChange,onClick,...props }) => {
   const isCheck=(isChecked)=>{
    if(isChecked){
        return true;
    }
    else{
        return false;
    }
   }
    
    return (
        <div className='w-80 flex h-[45px] flex justify-left items-left'>
            <input
                type='checkbox'
                value='done'
                className='accent-gray-300 '
                checked={isChecked}
                onChange={onChange}
        
            />
            <div className='flex flex-col'>
                <label onClick={onClick} htmlFor={`task-${task.id}`} className={`mt-3 ml-2  text-[15px] font-semibold ${isCheck(isChecked)? 'text-gray-400' : 'text-gray-700'}`}>{task}</label>
                {time && <span className='text-[12px] text-gray-500'>⏰{time}</span>}
            </div>
        </div>
    );
}

export default Checkbox;




