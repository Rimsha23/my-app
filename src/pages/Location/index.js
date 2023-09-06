import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';

import Button from '../../components/buttons';
const Location = () => {
    document.title= 'My App - Locations'
    const [location, setLocation] = useState('')
    const [previousLocations,setPreviousLocations] =useState( [

        {
            id: 1,
            location: 'Halsingegätan, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'

        },
        {
            id: 2,
            location: 'Pustegränd, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'
        },
        {
            id: 3,
            location: 'Långa Gatan, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'
        },
        {
            id: 4,
            location: 'Djurgården, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'
        },
        {
            id: 5,
            location: 'Svartensgatan, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'
        },

    ]);


    const handleOnChange = (e) => {
        setLocation(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: previousLocations.length + 1,
            location: e.target['location'].value,
            dimensions: '59.3293° N, 18.0686° E'
        };
        setPreviousLocations([...previousLocations,currentLocation]);
        setCurrentLocation(obj);
        setIsModalOpen(false);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(
        {
            id: previousLocations.length + 1,
            location: 'Pustegränd, Stockholm, SE',
            dimensions: '59.3293° N, 18.0686° E'
        }
    )


    return (
        <>
            <Sidebar />
            <div className='  flex sm:flex-wrap flex-col lg:w-4/5 md:w-fit h-screen bg-white ml-64'>
                <div className='w-80 h-[150px]  flex justify-left bg-white-300 items-left'>
                    <div className='mt-6 ml-4'>
                        <Button className="font-bold text-gray-900 justify-left align-left items-left" variant='naked' size='medium' onClick={() => setIsModalOpen(true)}>+ Check In</Button>

                    </div>
                    <div className='absolute w-80 h-auto mt-16'>
                        <div className='flex flex-col items-left h-96 w-80 ml-6' >
                            <div className='mt-0 left-0 ml-0 flex items-left'>
                                <h3 className='ml-0 left-0 mb-4 font-bold text-gray-900'>Current Location</h3>
                            </div>
                            <div className='w-80 h-auto flex justify-left items-left '>

                                <div className='flex flex-col '>

                                    <h2 className='ml-0 text-[15px] text-gray-800 font-semibold'><span className='font-thin text-[12px] mr-3'>📍 </span>{currentLocation.location}</h2>
                                    <span className='text-[12px] text-gray-500 ml-6'>{currentLocation.dimensions}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-auto mt-0 w-[343px] bg-white'>
                    <div className='flex flex-col justify-left items-left ml-6'>
                        <div className='mt-0 flex items-left'>
                            <h3 className=' mb-3  font-bold text-gray-900'>Previous Location</h3>
                        </div>
                        <div className='justify-left items-left h-auto'>

                            {previousLocations.map(location => (
                                <div key={location.id} className='mb-1 mt-1'>
                                    <h2 className='text-[15px] text-gray-600 font-semibold'>
                                        <span className='font-thin text-[12px] mr-3'>📍 </span>
                                        {location.location}
                                    </h2>
                                    <p className='text-[12px] text-gray-500 ml-6'>{location.dimensions}</p>
                                </div>
                            ))}




                        </div>
                    </div>
                </div>
            </div>
            <CreateModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                location={location}

                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}
const CreateModal = ({ isModalOpen, setIsModalOpen, location, handleOnChange, handleSubmit }) => {
    return (
        <>


            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class={`fixed flex justify-center items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-contrast-[.25] ${isModalOpen ? '' : 'hidden'} `}>
                <div class="relative w-[765px] h-[501px]">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => setIsModalOpen(false)}>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Check In</h3>
                            <form class="space-y-6 ml-8" onChange={(e) => handleOnChange} onSubmit={handleSubmit}>
                                <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill='rgba(107, 114, 128,0.8)' stroke='rgba(107, 114, 128, 0.8);' className='mt-3 mr-2'>
                                        <path d="M9 0.545471C6.61305 0.545471 4.32387 1.51092 2.63604 3.22943C0.948212 4.94794 0 7.27874 0 9.70908C0 15.8945 7.93125 22.8818 8.26875 23.1796C8.47252 23.357 8.73185 23.4546 9 23.4546C9.26815 23.4546 9.52748 23.357 9.73125 23.1796C10.125 22.8818 18 15.8945 18 9.70908C18 7.27874 17.0518 4.94794 15.364 3.22943C13.6761 1.51092 11.3869 0.545471 9 0.545471ZM9 20.7627C6.60375 18.4718 2.25 13.5349 2.25 9.70908C2.25 7.88632 2.96116 6.13822 4.22703 4.84934C5.4929 3.56046 7.20979 2.83637 9 2.83637C10.7902 2.83637 12.5071 3.56046 13.773 4.84934C15.0388 6.13822 15.75 7.88632 15.75 9.70908C15.75 13.5349 11.3962 18.4832 9 20.7627ZM9 5.12727C8.10998 5.12727 7.23996 5.39599 6.49993 5.89945C5.75991 6.4029 5.18314 7.11848 4.84254 7.9557C4.50195 8.79291 4.41283 9.71416 4.58647 10.6029C4.7601 11.4917 5.18868 12.3081 5.81802 12.9489C6.44736 13.5897 7.24918 14.0261 8.12209 14.2028C8.99501 14.3796 9.89981 14.2889 10.7221 13.9421C11.5443 13.5953 12.2471 13.0081 12.7416 12.2546C13.2361 11.5011 13.5 10.6153 13.5 9.70908C13.5 8.49391 13.0259 7.32851 12.182 6.46925C11.3381 5.61 10.1935 5.12727 9 5.12727ZM9 12C8.55499 12 8.11998 11.8656 7.74997 11.6139C7.37996 11.3622 7.09157 11.0044 6.92127 10.5858C6.75097 10.1672 6.70642 9.70654 6.79323 9.26215C6.88005 8.81775 7.09434 8.40955 7.40901 8.08917C7.72368 7.76878 8.12459 7.55059 8.56105 7.46219C8.9975 7.3738 9.4499 7.41917 9.86104 7.59256C10.2722 7.76595 10.6236 8.05958 10.8708 8.43632C11.118 8.81306 11.25 9.25598 11.25 9.70908C11.25 10.3167 11.0129 10.8994 10.591 11.329C10.169 11.7586 9.59674 12 9 12Z" fill="black" />
                                    </svg>

                                    <input
                                        value={location}
                                        name='location'
                                        id='location'
                                        onChange={ handleOnChange}
                                        placeholder=' Location'
                                        className='w-full h-12 border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-300 focus:outline-none'
                                    />
                                </div>


                                <div className=' flex justify-center items-center '>
                                    <Button type="submit" variant='primary' size='modal' className='rounded-full '>Save</Button>
                                </div>
                                <div className='mt-0'>
                                    <Button variant='naked' size='cancel' onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Location;
