import React, { Component } from 'react'
import "./countercomp.css"

class Countercomp extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            stepval: 2
        }

    }
    handleinc = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handledec = () => {
        this.setState({ count: this.state.count - 1 })
    }

    handleres = () => {
        this.setState({ count: 0 })
    }

    handlestepinc = (val) => {
        this.setState({ count: this.state.count + val })
    }

    handlestepdec = (val) => {
        this.setState({ count: this.state.count - val })
    }


    stepval = (e) => {
        e.preventDefault()
        this.setState({ stepval: this.state.count + Number(e.target[0].value) })
    }

    render() {
        return (
            <div className="counter-container">
                <h1 className="title">Counter</h1>
                <div className="count-display">{this.state.count}</div>

                <div className="button-group">
                    <button onClick={() => this.handlestepdec(this.state.stepval)}>Step -2</button>
                    <button
                        onClick={this.handledec}
                        title="limit is -10"
                        disabled={this.state.count <= -10}
                    >
                        -
                    </button>
                    <button onClick={this.handleres}>Reset</button>
                    <button
                        onClick={this.handleinc}
                        disabled={this.state.count >= 10}
                        title="limit is 10"
                    >
                        +
                    </button>
                    <button onClick={() => this.handlestepinc(this.state.stepval)}>Step +{this.state.stepval}</button>
                </div>

                <form className="step-form" onSubmit={(e) => this.stepval(e)}>
                    <input type="text" placeholder="Set step value" />
                    <button type="submit">Set Step</button>
                </form>
            </div>

        )
    }
}

export default Countercomp
