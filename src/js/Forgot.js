import React, {Component} from 'react'
import userIcon from '../images/login/iconuser.svg';
import {Link} from 'react-router-dom'

export class Forgot extends Component {

    handleSendLink  (e){
        e.preventDefault();
        alert("A link has been sent to your email.");
    };

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
                                    <h2>Recover Password</h2>
                                </div>

                            </div>
                            <form className="form-login"  onSubmit={this.handleSendLink.bind(this)}>
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon" alt="user icon"/>
                                    <input className="area-text-login" type="email" required name="email"
                                           placeholder="Email"/>
                                </div>


                                < input id="botao-login" type="submit" value="Send Link"/>

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

export default Forgot;
