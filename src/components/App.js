import React from 'react'
import Timer from './Timer'
import StartButton from './StartButton'
import TimerInput from './TimerInput'

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Motivate</h1>
                <TimerInput />
                <Timer />
                <StartButton />
            </div>
        );
    }
}