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
    render(){
        return(
            <div className="outer-timer-block" >
                <div className="timer-block border-red radius-border">
                    <span id="minutes" className="white-font">{this.state.min}</span>
                    <span className="white-font">:</span>
                    <span id="seconds" className="white-font">{this.state.sec<10?'0'+this.state.sec:this.state.sec}</span>
                </div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="timer-radio" id="10min-radio" autocomplete="off" checked/>
                    <label class="btn btn-outline-primary" for="10min-radio">10хв</label>

                    <input type="radio" class="btn-check" name="timer-radio" id="30min-radio" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="30min-radio">30хв</label>

                    <input type="radio" class="btn-check" name="timer-radio" id="60min-radio" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="60min-radio">60хв</label>
                </div>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-success">Старт</button>
                    <button type="button" class="btn btn-danger">На нуль</button>
                </div>
            </div>
        );
    }
}

export default Timer;