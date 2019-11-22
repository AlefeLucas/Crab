import React from 'react';
import ioasys from '../images/login/ioasys.png';
import sith from '../images/login/sith-logo.png';
import cacadores from '../images/login/cacadores-logo.png';
import jedi from '../images/login/jedi-logo.png';
import '../css/Login.css';
import userIcon from '../images/login/iconuser.svg';
import keyIcon from '../images/login/iconkey.svg';


function Login() {
    return (
        <div className="container">
            <img className="logo"  id="logo-ioasys" src={ioasys} alt="Logo iOasys"/>
            <div className="clear"></div>
            <div className="login">
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
                    <form className="form-login">
                        <div className="area-login">

                            <img src={userIcon} className="form-icon"/>
                            <input className="area-text-login" type="text" name="email"
                                   placeholder="Username/Email"/>
                        </div>
                        <div className="area-login">
                            <img src={keyIcon} className="form-icon"/>

                            <input id="password-text" className="area-text-login" type="password" name="senha"
                                   placeholder="Senha"/>
                        </div>

                        < input id="botao-login" type="button" value="Entrar"/>
                    </form>


                </div>
                <div className="possibilidades-login">
                    <span>
                        <a href="cadastrar.html">Cadastrar</a>
                    </span>

                    <span>
                        <a href="cadastrar.html">Esqueci minha senha</a>
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Login;
