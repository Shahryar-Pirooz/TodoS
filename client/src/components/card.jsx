import React, { useState } from 'react'
import axios from 'axios'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card(props) {
    const [isEditMode, setIsEditMode] = useState(false)
    const [value, setValue] = useState('')
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
    const handleBtnsOnClick = (id, target, data) => {
        const _serverURL = process.env.REACT_APP_SERVER_URL
        if (target === 'edited') {
            axios
                .post(`${_serverURL}edit`, { id, data })
                .then((m) => `${id} edited , ${m}`)
                .catch((e) => console.log(e))
            setIsEditMode(false)
        }
        if (target === 'remove') {
            axios
                .delete(_serverURL, { headers: { data }, data: { id: id } })
                .then((m) => {
                    return `${id} removed , ${m}`
                })
                .catch((e) => console.log(e))
        }
        if (target === 'done') {
            axios
                .post(`${_serverURL}done`, { id })
                .then((m) => {
                    return `${id} done , ${m}`
                })
                .catch((e) => console.log(e))
        }
        window.location.reload()
    }
    if (isEditMode) {
        return (
            <div className={cardStyle}>
                <div className="w-full">
                    <p className={textStyle}>{date}</p>
                </div>
                <div className="w-full">
                    <input
                        className={`${textStyle} dark:bg-gray`}
                        type="text"
                        name="editTask"
                        values={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={title}
                    />
                </div>
                <div className="w-full columns-3">
                    <CheckIcon
                        className={iconStyle}
                        id="edited"
                        onClick={(e) =>
                            handleBtnsOnClick(_id, e.target.id, value)
                        }
                    />
                </div>
            </div>
        )
    } else {
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
                        onClick={() => setIsEditMode(true)}
                    />
                    <TrashIcon
                        className={iconStyle}
                        id="remove"
                        onClick={(e) =>
                            handleBtnsOnClick(_id, e.target.id, title)
                        }
                    />
                    <CheckIcon
                        className={iconStyle}
                        id="done"
                        onClick={(e) => handleBtnsOnClick(_id, e.target.id)}
                    />
                </div>
            </div>
        )
    }
}

export default Card
