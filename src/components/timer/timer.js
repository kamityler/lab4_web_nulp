import {Component} from 'react'

import './timer.css'

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            min: 10,
            sec: 0,
        }
    }

    onZero=()=>{
        this.setState({
            min: 0,
            sec: 0
        })
    }

    render(){
        return(
            <div className="outer-timer-block" >
                <div className="timer-block border-red radius-border">
                    <span id="minutes" className="white-font">{this.state.min<10?'0'+this.state.min:this.state.min}</span>
                    <span className="white-font">:</span>
                    <span id="seconds" className="white-font">{this.state.sec<10?'0'+this.state.sec:this.state.sec}</span>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="timer-radio" id="10radio"/>
                    <label class="form-check-label" for="10radio">
                        10хв
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="timer-radio" id="30radio" checked/>
                    <label class="form-check-label" for="30radio">
                        30хв
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="timer-radio" id="60radio" checked/>
                    <label class="form-check-label" for="60radio">
                        60хв
                    </label>
                </div>
                <div class="btn-group-start" role="group">
                    <button type="button" class="btn-my btn-success">Старт</button>
                    <button type="button" class="btn-my btn-danger" onClick={this.onZero}>На нуль</button>
                </div>
            </div>
        );
    }
}

export default Timer;