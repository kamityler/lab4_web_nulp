import React, {Component} from 'react'

import './form.css'

function sendRequest(method, url){
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
        request.open(method,url,true);
        request.responseType = 'json';
        request.onload = () => {
            if (request >= 400){
                reject(request.response);
            } else {
                resolve(request.response);
            }
        }
        
        request.onerror = () => {
            reject(request.response);
        }
        request.send();
    })
}

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:50,
            password: '',
            url: 'https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg',
        }
    }

    onUrl = () => {
        sendRequest('GET','https://random.dog/woof.json?ref=apilist.fun').then(data => this.setState({url: data}));
        if(this.state.url['url'] === undefined){
            this.setState({url: 'https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg'})
            return;
        }
        const url=this.state.url['url'];
        const arr = url.split('.'); 
        if(arr[arr.length-1]==='mp4'){
            this.setState({url: 'https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg'})
            return;
        }
        
        const image = document.querySelector('#dog-image');
        image.setAttribute('src',url);
        this.setState({
            url: (this.state.url)['url']
        })
        console.log((this.state.url)['url']);

        const hidden = document.querySelector('#hidden-input-url');
        hidden.value = (this.state.url)['url'];
    }

    onAgeClick = () =>{
        this.setState({
            age: document.querySelector('#user-age-form').value,
        });
    }

    passwordVerification1 = (e) => {
        this.setState({
            password: e.target.value,
        })  
        const verPass = document.querySelector('#user-pass-ver-form');
        if(verPass.value !== '' || verPass.value !== null){
            if(e.target.value === verPass.value){
                verPass.classList.contains('incorrect-pass')?verPass.classList.replace('incorrect-pass','correct-pass'):verPass.classList.add('correct-pass')
            }else{
                verPass.classList.contains('correct-pass')?verPass.classList.replace('correct-pass','incorrect-pass'):verPass.classList.add('incorrect-pass')
            }
        }      
    }

    passwordVerification2 = () => {
        const verPass = document.querySelector('#user-pass-ver-form');

        if(this.state.password === verPass.value){
            verPass.classList.contains('incorrect-pass')?verPass.classList.replace('incorrect-pass','correct-pass'):verPass.classList.add('correct-pass')
        }else{
            verPass.classList.contains('correct-pass')?verPass.classList.replace('correct-pass','incorrect-pass'):verPass.classList.add('incorrect-pass')
        }
    }

    showPass = () => {
        const passField = document.querySelector('#user-pass-form'),
            passCheck = document.querySelector('#pass-vis-form').checked;
        passCheck?passField.setAttribute('type','text'):passField.setAttribute('type','password');
    }

    render(){
        return(
            <div className="user-form">
                <form>
                    <input type="hidden" id='hidden-input-url'/>
                    <h3 className='form-label'>Зареєструватись</h3>
                    <br/>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" placeholder="Email" id="user-email" name="user-email" minLength="3" required />
                    <br/>
                    <hr/>
                    <label htmlFor="user-number">Номер телефону: </label>
                    <input type="number" id="user-number" name="user-number" placeholder="+380-98-765-43-21" mахlength="9"/>
                    <br/>
                    <hr/>

                    <label  htmlFor="user-pass-form">Пароль: </label>
                    <input type="password" placeholder="Пароль" className="user-pass" id="user-pass-form" name="user-pass" minLength="8" required onKeyUp={this.passwordVerification1}/>
                    <input className='checkbox-pass-vis' type="checkbox" id="pass-vis-form" onClick={this.showPass}/>
                    <br/>

                    <br/>
                    <label id="user-pass-label" htmlFor="user-pass-ver-form">Повторити: </label>
                    <input type="password" placeholder="Пароль" className="user-pass" name="user-pass" minLength="8" id="user-pass-ver-form" onKeyUp={this.passwordVerification2}/>
                    <br/>
                    <hr/>

                    <label htmlFor="user-age-form">Вкажіть свій вік:</label>
                    <input id="user-age-form" type="range" name="user-age" min="3" max="99" step="1" onClick={this.onAgeClick} onKeyUp={this.onAgeClick} onMouseMove={this.onAgeClick}/>
                    <p id="current-age-form">{this.state.age}</p>
                    <hr/>
                    <img id="dog-image" src='https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg' alt='dog from api' width='50px' height='50px'/>
                    <div id="text-dog-image" onClick={this.onUrl}>Натисніть, щоб змінити картинку</div>
                    <hr/>
                    <section className="submission">
                        <button type="reset" id="button-reset" className="reset btn-outline form-btn">Скасувати</button>
                        <button type="submit" id="button-submit" className="submit btn-outline form-btn">Зареєструватись</button>
                </section>
                </form>
            </div>
        );
    }
}

export default Form;