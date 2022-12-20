import React, { Component } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Main from './components/main'
import List from './components/taskList'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDark: false,
        }
    }

    HandlerDark = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        this.setState({ isDark })
    }

    render() {
        const { isDark } = this.state
        return (
            <div className="w-screen h-screen bg-light dark:bg-gray">
                <button
                    className="absolute bottom-4 right-4 p-5 rounded-xl transition-all bg-gray active:scale-95 dark:bg-light"
                    onClick={() => this.HandlerDark(isDark ? false : true)}
                >
                    {isDark ? (
                        <MoonIcon className="h-6 w-6 text-primary"></MoonIcon>
                    ) : (
                        <SunIcon className="h-6 w-6 text-primary"></SunIcon>
                    )}
                </button>
                <Main />
                <List />
            </div>
        )
    }
}

export default App
