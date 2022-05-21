import React, {Component} from 'react'

import './form.css'

class Sign extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    showPass = () => {
        const passField = document.querySelector('#user-pass-sign'),
            passCheck = document.querySelector('#pass-vis-sign').checked;
        passCheck?passField.setAttribute('type','text'):passField.setAttribute('type','password');
    }

    render(){
        return(
            <div className="user-form">
                <form>
                    <h3 className='form-label'>Ввійти</h3>
                    <br/>
                    <label htmlFor="user-email-sign">Email:</label>
                    <input type="email" placeholder="Email" id="user-email-sign" name="user-email" minLength="3" required />
                    <br/>
                    <br/>
                    <label  htmlFor="user-pass-sign">Пароль: </label>
                    <input type="password" placeholder="Пароль" className="user-pass" id="user-pass-sign" name="user-pass" minLength="8" required/>
                    <input className='checkbox-pass-vis' type="checkbox" id="pass-vis-sign" onClick={this.showPass}/>
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

export default Sign;