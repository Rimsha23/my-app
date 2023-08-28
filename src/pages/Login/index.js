import React, { useState } from 'react';
import Button from '../../components/buttons';
import Input from '../../components/input';
const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [text, setText] = useState('Show')
    const handleShow = (e) => {
        e.preventDefault();
        if (passwordType === 'password') {
            setPasswordType('text')
            setText('Hide');
        }
        else {
            setPasswordType('password')
            setText('Show');
        }
    }
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <form className="bg-white w-96   rounded px-8 pt-6 pb-8 mb-4 mt-8">
                        <h2 className='text-black text-2xl mb-8 font-bold text-center'>Log In</h2>
                        <div className="mb-4">

                            <Input id="email" type='text' placeholder="Email" />
                        </div>
                        <div className="mb-6 relative">

                            <Input id="password" type={passwordType} placeholder="Password"
                            />
                            <button onClick={handleShow} className='absolute right-0 mt-2 mr-2 '
                            >{text}</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <Button className=" rounded-full focus:outline-none focus:shadow-outline" type="button" variant='primary' size='full'>
                                Log In
                            </Button>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
export default Login;