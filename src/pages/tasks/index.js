import React from 'react';
import Sidebar from '../../components/sidebar';
import { Link } from 'react-router-dom';
const Tasks=()=>{
    return(
        <>
        <div className='flex flex-row'>
        <Sidebar/>
        <div className='flex flex-col w-8/12 h-screen bg-gray-300 ml-64'>
<form className='flex items-left h-screen ml-6 '>
      <h2 className='text-gray-600 font-bold'>+ Add New Tasks</h2>
      </form>
      </div>
        </div>
    
        </>
    );
}
export default Tasks;