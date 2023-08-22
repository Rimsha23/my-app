import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <aside className='fixed left-0 top-0 w-64 h-screen'>
                <div className='h-full px-3 py-4 overflow-auto bg-white'>
                    <ul className='space-y-2 font-medium'>
                        <li>
                            <Link to={'/tasks'} className='ml-2 '>
                                <div className='flex flex-row w-60 h-14 items-center p-2 bg-white rounded-r-3xl mt-3 active:bg-black active:text-white  '>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkup-list" width="20" height="20" viewBox="0 0 24 24" className='ml-3'
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                 <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /> 
                                 <rect x="9" y="3" width="6" height="4" rx="2" /> <path d="M9 14h.01" /> 
                                 <path d="M9 17h.01" /> <path d="M12 16l1 1l3 -3" /> </svg>
                                    <span className='ml-3'> Tasks</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link activeStyle={'bg-black text-white'} to={'/location'}>
                                <div className='flex flex-row p-2 w-60 h-14 items-center bg-white rounded-r-3xl mt-3 h  active:text-white active:bg-black '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" className='ml-3'>
  <title>ionicons-v5-n</title>
  <path
    d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
    style={{
      fill: 'none',
      stroke: '#000',
      strokeWidth: '32px',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }}
  />
  <circle
    cx="256"
    cy="192"
    r="48"
    style={{
      fill: 'none',
      stroke: '#000',
      strokeWidth: '32px',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }}
  />
</svg>
<span className='ml-3'>Location</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/login'}>
                                <div className='flex flex-row p-2 w-60 h-14 mt-80   items-center bg-white rounded-r-3xl  active:text-white active:bg-black '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"  fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" class="feather feather-log-out">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    <span className='ml-3'>Log Out</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
export default Sidebar;