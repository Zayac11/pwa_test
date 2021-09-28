import React from 'react'
import {isDesktop} from 'react-device-detect'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        !isDesktop ?
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
        :<>Desktop detected, не будешь работать</>
    )
}

export default App
