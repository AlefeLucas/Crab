import React, {Component} from 'react'
import sith from '../images/login/sith.svg';
import cacadores from '../images/login/bountyhunter.svg';
import jedi from '../images/login/jedi.svg';
import userIcon from '../images/login/iconuser.svg';
import keyIcon from '../images/login/iconkey.svg';
import factionIcon from '../images/login/iconfaction.svg';

import {Link} from 'react-router-dom'

export class Forgot extends Component {

    handleSendLink  (e){
        e.preventDefault();
        alert("Um link foi enviado ao seu email.");
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
                                    <h2>Recuperar Senha</h2>
                                </div>

                            </div>
                            <form className="form-login"  onSubmit={this.handleSendLink.bind(this)}>
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon"/>
                                    <input className="area-text-login" type="text" name="email"
                                           placeholder="Email"/>
                                </div>


                                < input id="botao-login" type="submit" value="Enviar Link"/>

                            </form>
                        </div>
                        <div className="retorno">
                           <span>
                                 <Link to={"/"}>Voltar</Link>
                          </span>


                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Forgot;
