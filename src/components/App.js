import React from 'react'
import GoalTime from './GoalTime'
import StartButton from './StartButton'

export default class App extends React.Component {
    render() {
        return(
            <div>
            <h1>Motivate</h1>
            <StartButton />
            <GoalTime />
            </div>
        );
    }
}