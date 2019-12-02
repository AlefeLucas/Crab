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
                                    <h2>Cadastro</h2>
                                </div>
                                <div>
                                    <img className="imagens-login" src={jedi} alt="Logo sith"/>
                                    <img className="imagens-login" src={sith} alt="Logo sith"/>
                                    <img className="imagens-login-cacadores" src={cacadores} alt="Logo sith"/>
                                </div>
                            </div>
                            <form className="form-login">
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon"/>
                                    <input className="area-text-login" type="text" name="email"
                                           placeholder="Username"/>
                                </div>
                                <div className="area-login">

                                    <img src={emailIcon} className="form-icon"/>
                                    <input className="area-text-login" type="text" name="email"
                                           placeholder="Email"/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Senha"/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Confirmar Senha"/>
                                </div>
                                <div className="area-login">

                                    <img src={factionIcon} className="form-icon"/>
                                    <select  required className="area-text-login" name="example">
                                        <option value="" disabled selected>Facção...</option>
                                        <option value="jedi">Jedi</option>
                                        <option value="sith">Sith</option>
                                        <option value="bountyhunter">Caçador de Recompensa</option>


                                    </select>
                                </div>
                                <Link to={"/"}>
                                    < input id="botao-login" type="submit" value="Cadastrar"/>
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
