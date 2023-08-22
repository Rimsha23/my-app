import React from 'react';
const Login = () => {
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <form className="bg-white w-96  rounded px-8 pt-6 pb-8 mb-4 mt-8">
                        <h2 className='text-black text-2xl mb-8 font-bold'>Log In</h2>
                        <div className="mb-4">

                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline border border-slate-200" id="email" type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6">



                            <input className="shadow appearance-none border border-slate-200 rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"
                            />

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-black hover:bg-white hover:border-black rounded-full text-white hover:text-black w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Log In
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
export default Login;