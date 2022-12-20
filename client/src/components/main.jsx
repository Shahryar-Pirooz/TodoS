import React, { useState } from 'react'
import axios from 'axios'

export default function Main() {
    const [value, setValue] = useState('')
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://127.0.0.1:3030/', { title: value })
            .then((m) => console.log(m))
            .catch((e) => console.log(e))
        setValue('')
    }
    return (
        <>
            <h1 className="font-quick-sand font-thin text-6xl text-center pt-40 transition-all duration-300 text-gray hover:text-primary hover:font-bold dark:text-light  dark:hover:text-primary dark:hover:font-bold">
                TodoS
            </h1>
            <div className="grid justify-items-center">
                <form
                    method="get"
                    className="w-screen grid justify-items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className="w-full sm:w-1/2 h-8 mt-10 rounded-md text-center outline-none border-2 transition-all duration-300 bg-light text-black border-gray dark:bg-gray dark:text-light dark:border-light focus:border-primary dark:focus:border-primary"
                        name="title"
                        placeholder="Enter your Title task"
                        value={value}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
        </>
    )
}
