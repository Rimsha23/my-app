import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/buttons';
import { TaskSidebar } from '../../components/sidebar';

import Checkbox from '../../components/Checkbox';
const Tasks = () => {

    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleOnChange = (e) => {
        setTask(task);
        setTime(time)
        setDescription(description);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: incompleteTasks.length + 1,
            task: e.target['task'].value,
            time: e.target['time'].value,
            description: e.target['description'].value
        };
        incompleteTasks.push(obj);
        setIncompleteTasks([...incompleteTasks]);
        setIsModalOpen(false)
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    {/*
    const [tasks, setTasks] = useState([
        { id: 1, task: 'Submit my resume', time: 'Today, 17.00', isChecked: false },
        { id: 2, task: 'Complete the test', time: 'Today, 10.00', isChecked: false },
        { id: 3, task: 'Meeting with Jack', time: '24 Feb, 15.00', isChecked: false },
        { id: 4, task: 'Buy a Chocolate for Mom', time: '24 Feb, 11.00', isChecked: false },
        { id: 5, task: 'Facetime with Dad', time: '24 Feb, 18.00', isChecked: false },
        { id: 6, task: 'Respond to Jane email', isChecked: true },
        { id: 7, task: 'Rechedule weekly meeting', isChecked: true },
        { id: 9, task: 'Service my bike', isChecked: true },
        { id: 10, task: 'Recheck the agreement document', isChecked: true },
        { id: 11, task: 'Check the latest on Community', isChecked: true },

    ]);*/}
    const [incompleteTasks, setIncompleteTasks] = useState([
        { id: 1, task: 'Submit my resume', description: 'Send my resume to DigitalTolk', time: 'Today, 17.00', isChecked: false },
        { id: 2, task: 'Complete the test', time: 'Today, 10.00', description: '', isChecked: false },
        { id: 3, task: 'Meeting with Jack', time: '24 Feb, 15.00', description: '', isChecked: false },
        { id: 4, task: 'Buy a Chocolate for Mom', time: '24 Feb, 11.00', description: '', isChecked: false },
        { id: 5, task: 'Facetime with Dad', time: '24 Feb, 18.00', description: '', isChecked: false },
    ]);
    const [completedTasks, setCompletedTasks] = useState([
        { id: 1, task: 'Respond to Jane email', time: '24 Feb, 16.00', description: '', isChecked: true },
        { id: 2, task: 'Rechedule weekly meeting', time: '24 Feb, 12.00', description: '', isChecked: true },
        { id: 3, task: 'Service my bike', time: '24 Feb, 13.00', description: '', isChecked: true },
        { id: 4, task: 'Recheck the agreement document', time: '23 Feb, 17.00', description: '', isChecked: true },
        { id: 5, task: 'Check the latest on Community', time: '26 Feb, 16.00', description: '', isChecked: true },

    ]);





    {/* setTasks(updateTasks);
        const completedTasks = tasks.map(task => task.isChecked);
        const incompleteTasks = tasks.map(task => !task.isChecked);

    }
    const completedTasks = tasks.map(task => task.isChecked);
    const incompleteTasks = tasks.map(task => !task.isChecked);
*/}
    const handleTaskCheckboxChange = (taskId, e) => {
        e.preventDefault();
        const updatedIncompleteTasks = incompleteTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked };
            }
            return task;
        });


        const completedTask = updatedIncompleteTasks.find(task => task.id === taskId && task.isChecked);
        if (completedTask) {
            setCompletedTasks([...completedTasks, completedTask]);
            const incompleteTask = updatedIncompleteTasks.filter(task => !task.isChecked);
            setIncompleteTasks(incompleteTask);
        }
        else {

        }
    }
    const handleTaskCheckedboxChange = (taskId, e) => {
        e.preventDefault();
        const updatedCompleteTasks =
            completedTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, isChecked: !task.isChecked };
                }
                return task;
            });


        const incompleteTask = updatedCompleteTasks.find(task => task.id === taskId && !task.isChecked);
        if (incompleteTask) {
            setIncompleteTasks([...incompleteTasks, incompleteTask]);
            const completedTask = updatedCompleteTasks.filter(task => task.isChecked);
            setCompletedTasks(completedTask);
        }

    }
    const [isSideboxOpen,setIsSideboxOpen] = useState(true);

    return (
        <>
            <div className='flex flex-row'>
                <TaskSidebar />
                <div className='flex  flex-col lg:w-3/5 md:w-fit h-screen bg-white ml-64'>

                    <div className='mt-6  flex flex-col justify-start items-left'>
                        <div className='left-align ml-6'>
                            <Button className="font-bold text-gray-900 justify-left align-left items-left" variant='naked' size='medium' onClick={() => setIsModalOpen(true)}> + Add New Task</Button>
                        </div>
                    </div>
                    <div className='w-80 h-auto ml-6'>
                        <h3 className='mt-2 mb-2 font-bold text-gray-900 '>Incomplete</h3>
                        <form className='flex flex-col items-left'>

                            <div className='w-full'>
                                {incompleteTasks.map(task => (
                                    <Checkbox
                                        key={task.id}
                                        task={task.task}
                                        time={task.time}
                                        isChecked={task.isChecked}
                                        onChange={(e) => handleTaskCheckboxChange(task.id, e)}
                                    />
                                ))}
                            </div>

                        </form>
                    </div>

                    <div className='h-auto mt-6 w-[342px] white'>
                        <form className='flex flex-col justify-left items-left ml-6'>
                            <div className='mt-0 flex items-left'>
                                <h3 className='mb-3 font-bold text-gray-900'>Completed</h3>
                            </div>
                            <div className='flex flex-col'>
                                {completedTasks.map(task => (
                                    <div className='mt-1 flex flex-row'>
                                        <Checkbox
                                            key={task.id}
                                            task={task.task}
                                            isChecked={task.isChecked}
                                            onChange={(e) => handleTaskCheckedboxChange(task.id, e)}

                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`w-[390px] h-[122px] bg-white mt-8 ${isSideboxOpen ? '' : 'hidden'}`} >
                    <div className=' flex flex-col'>

                        <div className='flex flex-row'>
                            <div className='flex flex-col ml-3 mt-4 '>
                                <h2 className=' text-black font-bold text-[18px]'>{incompleteTasks[0].task}</h2>
                                <p className='text-gray-700 text-[16px] mt-0'>{incompleteTasks[0].description}</p>
                            </div>
                            <div className='flex justify-right items-right h-[52px] w-[52px] bg-yellow-400 ml-12 mt-4 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className='absolute right-0  mr-8 mt-4 ml-8 '>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 6V12L16 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>



                        </div>
                        <div className='flex flex-row'>
                            <Button variant='sidebox' size='small' className='mt-6 ml-44' onClick={()=>setIsSideboxOpen(false)}>Skip</Button>
                            <Button variant='sidebox' size='small' className='mt-6 ml-5 text-inline' onClick={()=>setIsSideboxOpen(false)}>Remind me later</Button>

                        </div>
                    </div>
                </div>
            </div>

            <CreateModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                task={task}
                time={time}
                handleOnChange={handleOnChange}
                description={description}
                handleSubmit={handleSubmit}
            />

        </>
    );

}
const CreateModal = ({ isModalOpen, setIsModalOpen, task, time, description, handleOnChange, handleSubmit }) => {
    return (
        <>


            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class={`fixed flex justify-center items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full focus:outline-blue-500 backdrop-contrast-[.25] ${isModalOpen ? '' : 'hidden'} `}>
                <div class="relative w-[765px] h-[501px]">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 focus:outline-blue-500 ">
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => setIsModalOpen(false)}>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add New Task</h3>
                            <form class="space-y-6 ml-8" onChange={(e) => handleOnChange} onSubmit={handleSubmit}>
                                <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className='mt-4' >
                                        <path d="M15.0282 7H5.02819C4.76297 7 4.50862 7.10536 4.32108 7.29289C4.13354 7.48043 4.02819 7.73478 4.02819 8C4.02819 8.26522 4.13354 8.51957 4.32108 8.70711C4.50862 8.89464 4.76297 9 5.02819 9H15.0282C15.2934 9 15.5478 8.89464 15.7353 8.70711C15.9228 8.51957 16.0282 8.26522 16.0282 8C16.0282 7.73478 15.9228 7.48043 15.7353 7.29289C15.5478 7.10536 15.2934 7 15.0282 7ZM11.0282 11H5.02819C4.76297 11 4.50862 11.1054 4.32108 11.2929C4.13354 11.4804 4.02819 11.7348 4.02819 12C4.02819 12.2652 4.13354 12.5196 4.32108 12.7071C4.50862 12.8946 4.76297 13 5.02819 13H11.0282C11.2934 13 11.5478 12.8946 11.7353 12.7071C11.9228 12.5196 12.0282 12.2652 12.0282 12C12.0282 11.7348 11.9228 11.4804 11.7353 11.2929C11.5478 11.1054 11.2934 11 11.0282 11ZM10.0282 0C8.71497 0 7.41461 0.258658 6.20135 0.761205C4.9881 1.26375 3.8857 2.00035 2.95712 2.92893C1.08175 4.8043 0.0281864 7.34784 0.0281864 10C0.0194442 12.3091 0.818979 14.5485 2.28819 16.33L0.288186 18.33C0.149429 18.4706 0.0554325 18.6492 0.0180584 18.8432C-0.0193158 19.0372 0.0016069 19.2379 0.0781863 19.42C0.161244 19.5999 0.29589 19.7511 0.465033 19.8544C0.634176 19.9577 0.830187 20.0083 1.02819 20H10.0282C12.6804 20 15.2239 18.9464 17.0993 17.0711C18.9746 15.1957 20.0282 12.6522 20.0282 10C20.0282 7.34784 18.9746 4.8043 17.0993 2.92893C15.2239 1.05357 12.6804 0 10.0282 0ZM10.0282 18H3.43819L4.36819 17.07C4.55444 16.8826 4.65898 16.6292 4.65898 16.365C4.65898 16.1008 4.55444 15.8474 4.36819 15.66C3.05877 14.352 2.24336 12.6305 2.06088 10.7888C1.87839 8.94705 2.34013 7.09901 3.36741 5.55952C4.3947 4.02004 5.92398 2.88436 7.6947 2.34597C9.46543 1.80759 11.368 1.8998 13.0784 2.60691C14.7888 3.31402 16.201 4.59227 17.0746 6.22389C17.9482 7.85551 18.2291 9.73954 17.8693 11.555C17.5096 13.3705 16.5315 15.005 15.1017 16.1802C13.672 17.3554 11.8789 17.9985 10.0282 18Z" fill="#575767" />
                                    </svg>
                                    <input
                                        name='task'
                                        id='task'

                                        placeholder=' Summary'
                                        className='w-full h-12 border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-300 focus:outline-none'
                                    />
                                </div>

                                <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className=' mt-10' >
                                        <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 16H9C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM19 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H19C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8ZM19 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12ZM19 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H19C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4Z" fill="#575767" />
                                    </svg>
                                    <input
                                        name='description'
                                        id='description'

                                        placeholder='  Descriptions'
                                        className='w-full h-24 border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-300 focus:outline-none placeholder-text-top placeholder-text-left align-text-top '
                                    />
                                </div>
                                <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className=' mt-4 ' >
                                        <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V9.42L6.9 10.63C6.70736 10.7392 6.5564 10.9092 6.47078 11.1134C6.38517 11.3176 6.36975 11.5444 6.42695 11.7583C6.48414 11.9722 6.61072 12.1611 6.78682 12.2953C6.96292 12.4296 7.17859 12.5015 7.4 12.5C7.57518 12.5012 7.7476 12.4564 7.9 12.37L10.5 10.87L10.59 10.78L10.75 10.65C10.7891 10.6005 10.8226 10.5468 10.85 10.49C10.8826 10.4363 10.9094 10.3793 10.93 10.32C10.9572 10.2564 10.9741 10.1889 10.98 10.12L11 10V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z" fill="#575767" />
                                    </svg>
                                    <input
                                        name='time'
                                        id='time'

                                        placeholder='  Due Date'
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

export default Tasks;
