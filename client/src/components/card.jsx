import React from 'react'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card() {
    const textStyle =
        'font-quick-sand transition-all duration-300 text-black dark:text-light'
    const iconStyle =
        'w-full h-full mx-2 py-2 rounded-sm text-black  hover:bg-primary transition-all duration-300 hover:text-light hover:cursor-pointer dark:text-light dark:hover:text-gray'

    return (
        <div className="h-8 columns-3 gap-5 text-center transition-all duration-300 bg-light dark:bg-gray">
            <div className="w-full">
                <p className={textStyle}>1</p>
            </div>
            <div className="w-full">
                <h4 className={textStyle}>Test</h4>
            </div>
            <div className="w-full columns-3">
                <PencilIcon className={iconStyle} />
                <TrashIcon className={iconStyle} />
                <CheckIcon className={iconStyle} />
            </div>
        </div>
    )
}

export default Card
