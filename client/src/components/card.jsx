import React from 'react'
import axios from 'axios'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card(props) {
    const { _id, title, done, date } = props.data
    const textStyle = done
        ? 'font-quick-sand transition-all duration-300 line-through text-gray dark:text-gray'
        : 'font-quick-sand transition-all duration-300 text-black dark:text-light'

    const iconStyle =
        'w-full h-full mx-2 py-2 rounded-xl text-black  hover:bg-primary transition-all duration-300 hover:text-light hover:cursor-pointer dark:text-light dark:hover:text-gray'
    const editTask = (id) => {}
    const removeTask = (id) => {}
    const doneTask = (id) => {}
    return (
        <div className="h-8 columns-3 gap-5 text-center transition-all duration-300 bg-light dark:bg-gray">
            <div className="w-full">
                <p className={textStyle}>{date}</p>
            </div>
            <div className="w-full">
                <h4 className={textStyle}>{title}</h4>
            </div>
            <div className="w-full columns-3">
                <PencilIcon
                    className={iconStyle}
                    onClick={() => editTask(_id)}
                />
                <TrashIcon
                    className={iconStyle}
                    onClick={() => removeTask(_id)}
                />
                <CheckIcon
                    className={iconStyle}
                    onClick={() => doneTask(_id)}
                />
            </div>
        </div>
    )
}

export default Card
