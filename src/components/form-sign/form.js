import React, {Component} from 'react'
import axios from "axios";

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

export default class Form extends Component {
    userData;
    constructor(props){
        super(props);
        this.state = {
            signupData: {
                email: "",
                phone: "",
                password: "",
                age: "",
                isLoading: "",
            },
            msg: "",
            age:50,
            passwordRepeat: '',
            url: 'https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg',
        }
    }

    onChangehandler = (e) => {
        const { signupData } = this.state;
        signupData[e.target.name] = e.target.value;
        this.setState({ signupData });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        axios
          .post("http://localhost:8000/api/user-signup", this.state.signupData)
          .then((response) => {
            this.setState({ isLoading: false });
            if (response.data.status === 200) {
              this.setState({
                msg: response.data.message,
                signupData: {
                    email: "",
                    phone: "",
                    password: "",
                    age: "",
                },
              });
              console.log(response.data)
              alert("привіт користувач "+response.data.data.email+"\nтвій вік " +response.data.data.age)
              document.querySelectorAll('.modal-content')[0].classList.remove('active');
              document.querySelectorAll('.modal')[0].classList.remove('active');
              document.querySelector('#signUp-form').reset();
              setTimeout(() => {
                this.setState({ msg: "" });
              }, 2000);
            }
    
            if (response.data.status === "failed") {
                console.log(response.data.message)
                document.querySelector('#error-msg').textContent = response.data.message
              this.setState({ msg: response.data.message });
              setTimeout(() => {
                this.setState({ msg: "" });
              }, 2000);
            }
          });
    };

    onUrl = () => {
        sendRequest('GET','https://random.dog/woof.json?ref=apilist.fun').then(data => this.setState({url: data}));
        if(this.state.url['url'] === undefined){
            this.setState({url: 'https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg'})
            return;
        }
        const url=this.state.url['url'];
        const arr = url.split('.'); 
        if(arr[arr.length-1]==='mp4' || arr[arr.length-1]==='webm'){
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
            passwordRepeat: e.target.value,
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

        if(this.state.passwordRepeat === verPass.value){
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
        const isLoading = this.state.isLoading;
        return(
            <div className="user-form">
                <form id="signUp-form">
                    <input type="hidden" id='hidden-input-url'/>
                    <h3 className='form-label'>Зареєструватись</h3>
                    <br/>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" placeholder="Email" id="user-email" name="email" minLength="3" required onChange={this.onChangehandler}/>
                    <br/>
                    <hr/>
                    <label htmlFor="user-number">Номер телефону: </label>
                    <input type="number" id="user-number" name="phone" placeholder="+380-98-765-43-21" mахlength="9" onChange={this.onChangehandler}/>
                    <br/>
                    <hr/>

                    <label  htmlFor="user-pass-form">Пароль: </label>
                    <input type="password" placeholder="Пароль" className="user-pass" id="user-pass-form" name="password" minLength="2" required onKeyUp={this.passwordVerification1} onChange={this.onChangehandler}/>
                    <input className='checkbox-pass-vis' type="checkbox" id="pass-vis-form" onClick={this.showPass}/>
                    <br/>

                    <br/>
                    <label id="user-pass-label" htmlFor="user-pass-ver-form">Повторити: </label>
                    <input type="password" placeholder="Пароль" className="user-pass" name="user-pass" minLength="2" id="user-pass-ver-form" onKeyUp={this.passwordVerification2}/>
                    <br/>

                    <hr/>
                    <label htmlFor="user-age-form">Вкажіть свій вік:</label>
                    <input id="user-age-form" type="range" name="age" min="3" max="99" step="1" onClick={this.onAgeClick} onKeyUp={this.onAgeClick} onMouseMove={this.onAgeClick} onChange={this.onChangehandler}/>
                    <p id="current-age-form">{this.state.age}</p>

                    <hr/>
                    <div className='dog-image-block' onClick={this.onUrl}>
                        <img id="dog-image" src='https://random.dog/eebec262-2c4a-4883-9c75-32f9315eb045.jpg' alt='dog from api' width='50px' height='50px' name="url"/>
                        <div id="text-dog-image" onClick={this.onUrl}>Натисніть, щоб змінити картинку</div>
                    </div>
                    
                    <hr/>
                    <section className="submission">
                        <button type="reset" id="button-reset" className="reset btn-outline form-btn">Скасувати</button>
                        <button type="submit" id="button-submit" className="submit btn-outline form-btn" onClick={this.onSubmitHandler}>Зареєструватись</button>
                        {isLoading ? (<span className="spinner-border spinner-border-sm ml-5" role="status" aria-hidden="true"></span>) : (<span></span>)}
                        <p id="error-msg"></p>
                    </section>
                </form>
            </div>
        );
    }
}