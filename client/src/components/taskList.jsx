import React from 'react'
import axios from 'axios'
import Card from './card'

function List() {
    return (
        <div className="grid justify-items-center mt-8">
            <ul className="w-full sm:w-1/2">
                <li className="transition-all duration-300 hover:scale-x-110">
                    <Card />
                </li>
            </ul>
        </div>
    )
}

export default List
