import React, {Component} from 'react'
import sith from '../images/login/sith.svg';
import cacadores from '../images/login/bountyhunter.svg';
import jedi from '../images/login/jedi.svg';
import emailIcon from '../images/login/iconemail.svg';
import userIcon from '../images/login/iconuser.svg';

import keyIcon from '../images/login/iconkey.svg';
import factionIcon from '../images/login/iconfaction.svg';

import Home from './Home.js';
import {Link} from 'react-router-dom'

export class SignUp extends Component {
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
                                    <h2>Redefinir Senha</h2>
                                </div>
                                
                            </div>
                            <form className="form-login">

                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Nova Senha"/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Confirmar Senha"/>
                                </div>

                                <Link to={"/"}>
                                    < input id="botao-login" type="submit" value="Redefinir"/>
                                </Link>
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

export default SignUp;
