import React from 'react'

export default function Main() {
    return (
        <>
            <h1 className="font-quick-sand font-thin text-6xl text-center pt-40 transition-all duration-300 text-gray hover:text-primary hover:font-bold dark:text-light  dark:hover:text-primary dark:hover:font-bold">
                TodoS
            </h1>
            <form action="">
                <div className="grid justify-items-center">
                    <input
                        type="text"
                        className="w-full sm:w-1/2 h-8 mt-10 rounded-md text-center outline-none border-2 transition-all duration-300 bg-light text-black border-gray dark:bg-gray dark:text-light dark:border-light focus:border-primary dark:focus:border-primary"
                    />
                </div>
            </form>
        </>
    )
}
