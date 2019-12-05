import React, {Component} from 'react'
import keyIcon from '../images/login/iconkey.svg';
import {Link} from 'react-router-dom'

export class ResetPassoword extends Component {

    validatePassword(e) {
        this.checkPasswordMatch();

        this.checkPasswordConstraints();
    }

    checkPasswordConstraints() {
        if (!/\d/.test(this.refs.password.value) || !/[^0-9]/.test(this.refs.password.value)) {
            this.refs.password.setCustomValidity('Senha precisa conter pelo menos um dígito e um não-dígito.');
        } else if (this.refs.password.value.length < 8) {
            this.refs.password.setCustomValidity('Senha precisa conter pelo menos 8 caracteres.');
        } else {
            this.refs.password.setCustomValidity('');
        }
    }

    checkPasswordMatch() {
        if (this.refs.password.value !== this.refs.confirm.value) {
            this.refs.confirm.setCustomValidity("Passwords don't match.");
        } else {
            this.refs.confirm.setCustomValidity('');
        }
    }

    handleReset(e) {
        e.preventDefault();
        alert("Password successfully changed.");
        this.props.history.push("/");
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
                                    <h2>Reset Password</h2>
                                </div>

                            </div>
                            <form className="form-login" onSubmit={this.handleReset.bind(this)}>

                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon" alt="key icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="New Password" ref="password"
                                           onKeyUp={this.validatePassword.bind(this)} required/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon" alt="key icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Confirm Password" ref="confirm"
                                           onKeyUp={this.validatePassword.bind(this)} required/>
                                </div>


                                    < input id="botao-login" type="submit" value="Reset"/>

                            </form>
                        </div>
                        <div className="retorno">
                           <span>
                                 <Link to={"/"}>Back</Link>
                          </span>


                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ResetPassoword;
