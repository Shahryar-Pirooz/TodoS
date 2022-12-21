import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'

function List() {
    const [tasks, getTasks] = useState()
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL).then((res) => {
            getTasks(res.data)
        })
    }, [])

    return (
        <div className="grid justify-items-center mt-8">
            <ul className="w-full sm:w-1/2">
                {tasks ? (
                    tasks.map((task) => {
                        return (
                            <li
                                key={task._id}
                                className="transition-all duration-300 hover:scale-x-110"
                            >
                                <Card data={task} />
                            </li>
                        )
                    })
                ) : (
                    <p>no task find</p>
                )}
            </ul>
        </div>
    )
}

export default List
