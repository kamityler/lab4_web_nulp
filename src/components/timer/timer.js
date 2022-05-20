import {Component} from 'react'

import './timer.css'

class Timer extends Component{
    constructor(){
        super();
        this.state = {
            sec: 600
        }
    }

    changeClass = () => {
        const block = document.querySelector('.timer-block');
        if(block.classList.contains('border-green')){
            block.classList.remove('border-green');
            block.classList.add('border-red');
        }
        else if(block.classList.contains('border-red')){
            block.classList.remove('border-red');
            block.classList.add('border-green');
        }
    }

    uncheckRadio = () => {
        const radio = document.querySelectorAll('.form-check-input');
        radio.forEach(item=>{item.checked = false;});
    }

    gameTimer = () =>{
        this.changeClass();
        let sec1 = parseInt(this.state.sec)
        const timer = setInterval(()=>{
            this.setState({
                sec: sec1-1,
            });
            --sec1;
            if(parseInt(this.state.sec) <= 1){
                this.changeClass();
                clearInterval(timer);
            }
            console.log(this.state.sec);
        },100)

        if(parseInt(this.state.sec) <= 1){
            clearInterval(timer);
            this.changeClass();
        }
    }

    render(){
        const min = parseInt(this.state.sec/60);
        const sec = parseInt(this.state.sec%60);

        return(
            <div className="outer-timer-block" >
                <div className="timer-block border-red radius-border">
                    <span id="minutes" className="white-font">{min<10?'0'+min:min}</span>
                    <span className="white-font">:</span>
                    <span id="seconds" className="white-font">{sec<10?'0'+sec:sec}</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="timer-radio" id="10radio" onClick={()=>{this.setState({sec:60*10})}}/>
                    <label className="form-check-label" htmlFor="10radio">
                        10хв
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="timer-radio" id="30radio" onClick={()=>{this.setState({sec:60*30})}}/>
                    <label className="form-check-label" htmlFor="30radio">
                        30хв
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="timer-radio" id="60radio" onClick={()=>{this.setState({sec:60*60})}}/>
                    <label className="form-check-label" htmlFor="60radio">
                        60хв
                    </label>
                </div>
                <div className="btn-group-start" role="group">
                    <button type="button" className="btn-my btn-success" onClick={this.gameTimer}>Старт</button>
                    <button type="button" className="btn-my btn-danger" onClick={()=>{this.setState({sec:0}); this.uncheckRadio();}}>Стоп</button>
                </div>
            </div>
        );
    }
}


// function gameTimer() {
//     const timer = setInterval(updateTimer, 100);
//     if (leftTime <= 0) {
//         changeClass(timerBox, 'border-green', 'border-red');
//         clearInterval(timer);
//     }
//     leftTime *= 60;

//     function updateTimer() {
//         leftTime -= 1;
//         timerText[0].innerHTML = parseInt(leftTime / 60);
//         let seconds = leftTime - parseInt(leftTime / 60) * 60;
//         seconds < 10 ? timerText[2].innerHTML = `0${seconds}` : timerText[2].innerHTML = `${seconds}`;
//         console.log(leftTime);
//         if (leftTime <= 0) {
//             changeClass(timerBox, 'border-green', 'border-red');
//             clearInterval(timer);
//         }
//     }
// }


export default Timer;