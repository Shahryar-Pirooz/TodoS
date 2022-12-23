import React, { Component } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Main from './components/main'
import List from './components/taskList'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDark: localStorage.getItem('isDark') ?? false,
        }
    }

    HandlerDark = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('isDark', true)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('isDark', false)
        }
        this.setState({ isDark })
    }

    componentDidMount() {
        this.HandlerDark(this.state.isDark)
    }

    render() {
        const { isDark } = this.state
        const darkModeStyle = 'h-6 w-6 text-primary'
        return (
            <div className="w-screen h-screen bg-light dark:bg-gray">
                <button
                    className="absolute bottom-4 right-4 p-5 rounded-xl transition-all shadow-xl bg-light hover:shadow-primary active:scale-95 dark:bg-gray"
                    onClick={() => this.HandlerDark(isDark ? false : true)}
                >
                    {isDark ? (
                        <SunIcon className={darkModeStyle}></SunIcon>
                    ) : (
                        <MoonIcon className={darkModeStyle}></MoonIcon>
                    )}
                </button>
                <Main />
                <List />
            </div>
        )
    }
}

export default App
