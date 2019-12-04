import React, {Component} from 'react'
import sith from '../images/login/sith.svg';
import cacadores from '../images/login/bountyhunter.svg';
import jedi from '../images/login/jedi.svg';
import userIcon from '../images/login/iconuser.svg';
import keyIcon from '../images/login/iconkey.svg';
import {Link} from 'react-router-dom';

export class Login extends Component {


    constructor(props) {
        super(props);


        console.log("new login");
        console.log(this.props);

        this.state = {
            login: this.props.user != null ? this.props.user.username : ""
        };

    }



    handleSignIn(e) {
        e.preventDefault();
        let typedLogin = this.refs.login.value;
        let typedPassword = this.refs.password.value;
        console.log(this.state);
        console.log("Login: " + typedLogin + " Senha: " + typedPassword);
        let user = this.props.users.filter(value => (value.email === typedLogin || value.username === typedLogin) && value.password === typedPassword);

        if (user.length) {
            this.props.setUser(user[0]);
            this.props.history.push('/home');
        } else {
            alert('Login or password incorret.');

        }
    }

    onChangeLogin(e) {
        let str = e.target.value;
        this.setState({
            login: str
        });
        console.log("changelogin");
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
                                    <img className="imagens-login" src={cacadores} alt="Logo sith"/>
                                </div>
                            </div>
                            <form className="form-login" onSubmit={this.handleSignIn.bind(this)}>
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon"/>
                                    <input onChange={this.onChangeLogin.bind(this)}  value={this.state.login} className="area-text-login" type="text" name="email"
                                           placeholder="Username/Email" ref="login" required/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" ref="password" type="password"
                                           name="senha" placeholder="Password" required/>
                                </div>
                                <input id="botao-login" type="submit" value="Log In"/>
                            </form>
                        </div>
                        <div className="possibilidades-login">
                           <span>
                               <Link to={"/signup"}>Sign Up</Link>
                          </span>

                            <span>
                               <Link to={"/forgot"}>Forgot my password</Link>
                              </span>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
