import React, {Component} from 'react'

import './form.css'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:51,
        }
    }

    onAgeClick = () =>{
        this.setState({
            age: document.querySelector('#user-age').value,
        });
    }

    render(){
        return(
            <div className="user-form">
                <form action="action.html" method="GET" encType="multipart/form-data" autoComplete="on">
                    <h3 className='form-label'>Зареєструватись або ввійти</h3>
                    <br/>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" placeholder="Email" id="user-email" name="user-email" minLength="3" required />
                    <br/>
                    <hr/>
                    <label htmlFor="user-number">Номер телефону: </label>
                    <input type="number" id="user-number" name="user-number" placeholder="+380-98-765-43-21" mахlength="9"/>
                    <br/>
                    <hr/>
                    <label  htmlFor="user-pass">Пароль: </label>
                    <div className="user-pass">
                        <input type="password" placeholder="Пароль" className="user-pass" id="user-pass" name="user-pass" minLength="8" required />
                    </div>
                    <input type="checkbox" id="pass-vis"/>
                    <br/>
                    <br/>
                    <div id="user-pass-label">
                        <label  htmlFor="user-pass">Повторити: </label>
                    </div>
                    <input type="password" placeholder="Пароль" className="user-pass" name="user-pass" minLength="8" />
                    <br/>
                    <hr/>
                    <label htmlFor="user-age">Вкажіть свій вік:</label>
                    <input id="user-age" type="range" name="user-age" min="3" max="99" step="1" onClick={this.onAgeClick} onKeyUp={this.onAgeClick} onMouseMove={this.onAgeClick}/>
                    <p id="current-age">{this.state.age}</p>
                    <hr/>
                    <label htmlFor="user-avatar">Виберіть фото</label>
                    <input type="file" id="user-file" name="user-file"/>
                    <br/>
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