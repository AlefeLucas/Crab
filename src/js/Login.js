import React, {Component} from 'react'
import sith from '../images/login/sith.svg';
import cacadores from '../images/login/bountyhunter.svg';
import jedi from '../images/login/jedi.svg';
import userIcon from '../images/login/iconuser.svg';
import keyIcon from '../images/login/iconkey.svg';
import {Link} from 'react-router-dom';
import faction, {defaultUsers} from './Helper.js';

export class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
        };

        console.log(this.props);
    }

    handleSignIn(e) {
        e.preventDefault();
        let typedLogin = this.refs.login.value;
        let typedPassword = this.refs.password.value;
        console.log(this.state);
        console.log("Login: " + typedLogin + " Senha: " + typedPassword);
        let user = defaultUsers.filter(value => (value.email === typedLogin || value.username === typedLogin) && value.password === typedPassword);

        if (user.length) {
            this.props.logUser(user[0]);
            this.props.history.push('/home');
        } else {
            alert('Login ou senha incorreto(s).');

        }
    }

    render() {

        return (
            <React.Fragment>

                <div className="login">
                    <img className="logo" id="logo-ioasys" src="https://www.ioasys.com.br/images/logo-black.svg"
                         alt="Logo iOasys"/>
                    <div className="clear"/>
                    <div className="superlogin">
                        <div className="caixa-login">
                            <div className="cabecalho-login">
                                <div>
                                    <h2>Login</h2>
                                </div>
                                <div>
                                    <img className="imagens-login" src={jedi} alt="Logo sith"/>
                                    <img className="imagens-login" src={sith} alt="Logo sith"/>
                                    <img className="imagens-login-cacadores" src={cacadores} alt="Logo sith"/>
                                </div>
                            </div>
                            <form className="form-login" onSubmit={this.handleSignIn.bind(this)}>
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon"/>
                                    <input className="area-text-login" type="text" name="email"
                                           placeholder="Username/Email" ref="login" required/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" ref="password" type="password"
                                           name="senha" placeholder="Senha" required/>
                                </div>
                                <input id="botao-login" type="submit" value="Entrar"/>
                            </form>
                        </div>
                        <div className="possibilidades-login">
                           <span>
                               <Link to={"/signup"}>Cadastrar</Link>
                          </span>

                            <span>
                               <Link to={"/forgot"}>Esqueci minha senha</Link>
                              </span>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
