import React from 'react'
import axios from 'axios'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card(props) {
    const _serverURL = process.env.REACT_APP_SERVER_URL
    const { _id, title, done, date } = props.data
    const cardStyle = done
        ? 'h-8 columns-3 gap-5 text-center rounded-xl transition-all duration-300 bg-black dark:bg-black'
        : 'h-8 columns-3 gap-5 text-center rounded-xl transition-all duration-300 bg-light dark:bg-gray'
    const textStyle = done
        ? 'font-quick-sand transition-all duration-300 line-through text-gray dark:text-gray'
        : 'font-quick-sand transition-all duration-300 text-black dark:text-light'

    const iconStyle = done
        ? 'w-full h-full mx-2 py-2 rounded-xl transition-all duration-300 text-primary  hover:bg-primary hover:text-black hover:cursor-pointer'
        : 'w-full h-full mx-2 py-2 rounded-xl transition-all duration-300 text-black  hover:bg-primary hover:text-light hover:cursor-pointer dark:text-light dark:hover:text-gray'

    const editTask = (id, target) => {}
    const removeTask = (id, target) => {
        axios
            .delete(_serverURL, { headers: { title }, data: { id: id } })
            .then((m) => {
                window.location.reload()
                return `${id} removed , ${m}`
            })
            .catch((e) => console.log(e))
    }
    const doneTask = (id, target) => {
        axios
            .post(`${_serverURL}done`, { id })
            .then((m) => {
                window.location.reload()
                return `${id} removed , ${m}`
            })
            .catch((e) => console.log(e))
    }
    return (
        <div className={cardStyle}>
            <div className="w-full">
                <p className={textStyle}>{date}</p>
            </div>
            <div className="w-full">
                <h4 className={textStyle}>{title}</h4>
            </div>
            <div className="w-full columns-3">
                <PencilIcon
                    className={iconStyle}
                    id="edit"
                    onClick={(e) => editTask(_id, e.target.id)}
                />
                <TrashIcon
                    className={iconStyle}
                    id="remove"
                    onClick={(e) => removeTask(_id, e.target.id)}
                />
                <CheckIcon
                    className={iconStyle}
                    id="done"
                    onClick={(e) => doneTask(_id, e.target.id)}
                />
            </div>
        </div>
    )
}

export default Card
