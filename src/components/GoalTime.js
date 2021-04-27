import React from 'react'

class GoalTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            goal: 0
        }
    }

    render() {
        return (
            <form>
                <label>Time</label>
                <p>{this.state.time}</p>
                <br></br>
                <label>Goal</label>
                <p>{this.state.goal}</p>
            </form>
        );
    }
}

export default GoalTime;