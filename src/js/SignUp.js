import React, {Component} from 'react'

import emailIcon from '../images/login/iconemail.svg';
import userIcon from '../images/login/iconuser.svg';
import keyIcon from '../images/login/iconkey.svg';
import factionIcon from '../images/login/iconfaction.svg';
import {Link} from 'react-router-dom'
import faction from './Helper.js';

export class SignUp extends Component {
    factionChange(e) {

        console.log(e);
        switch (e.target.value) {
            case faction.JEDI:
                this.refs.jedilogo.setAttribute('fill', 'darkblue');
                this.refs.sithlogo.setAttribute('fill', 'black');
                this.refs.bhlogo.setAttribute('fill', 'black');
                break;
            case faction.SITH:
                this.refs.jedilogo.setAttribute('fill', 'black');
                this.refs.sithlogo.setAttribute('fill', 'red');
                this.refs.bhlogo.setAttribute('fill', 'black');
                break;
            case faction.BOUNTY_HUNTER:
                this.refs.jedilogo.setAttribute('fill', 'black');
                this.refs.sithlogo.setAttribute('fill', 'black');
                this.refs.bhlogo.setAttribute('fill', 'orange');
                break;
            default:
                this.refs.jedilogo.setAttribute('fill', 'black');
                this.refs.sithlogo.setAttribute('fill', 'black');
                this.refs.bhlogo.setAttribute('fill', 'black');

        }
    }

    constructor(props) {
        super(props);

        this.state = {
            faction: null
        };

        console.log("new sign up");
        console.log(this.props);

    }


    handleSignUp(e) {
        e.preventDefault();
        let typedUsername = this.refs.username.value;
        let typedEmail = this.refs.email.value;
        let typedPassword = this.refs.password.value;
        let selectedFaction = this.refs.select.value;

        let user = {
            email: typedEmail,
            username: typedUsername,
            password: typedPassword,
            faction: selectedFaction
        };

        this.props.addUser(user);
        this.props.setUser(user);
        this.props.history.push('/');


    }

    validateEmail(e) {
        if (this.props.users.filter(value => value.email === this.refs.email.value).length) {
            this.refs.username.setCustomValidity('This email already has an account.');
        } else {
            this.refs.username.setCustomValidity('');
        }
    }

    validateUsername(e) {
        if (/\s/.test(this.refs.username.value)) {
            this.refs.username.setCustomValidity('Username cannot contain spaces.');
        } else if (this.props.users.filter(value => value.username === this.refs.username.value).length) {
            this.refs.username.setCustomValidity('This username was already taken.');
        } else {
            this.refs.username.setCustomValidity('');
        }
    }

    validatePassword(e) {
        this.checkPasswordMatch();

        this.checkPasswordConstraints();
    }

    checkPasswordConstraints() {
        if (!/\d/.test(this.refs.password.value) || !/[^0-9]/.test(this.refs.password.value)) {
            this.refs.password.setCustomValidity('Password must have at least a digit and a non-digit.');
        } else if (this.refs.password.value.length < 8) {
            this.refs.password.setCustomValidity('Password must have at least 8 characters.');
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

    showTooltip(e) {

    }

    hideTooltip(e) {

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
                                    <h2>Sign Up</h2>
                                </div>
                                <div>
                                    <svg ref="jedilogo" id="jedilogo" className="imagens-login"
                                         xmlns="http://www.w3.org/2000/svg" width="42.133" height="42.81"
                                         viewBox="0 0 42.133 42.81">
                                        <path
                                            d="M37.463,34.5C46.48,23.024,39.08,12.587,39.08,12.587c4.269,8.068-3.893,16.032-3.893,16.032C45.06,12.493,29.5,3.09,29.5,3.09c9.111,6.836-.95,17.931-.95,17.931,8.067,14.894-6.45,21.636-6.45,21.636s-.038-1.589-.207-8.058c.4.423,3.244,3.4,3.244,3.4L22.86,33.546l5.886-.856-5.886-.856,1.9-5.218-2.952,4.316c-.207-8.246-.733-28.688-.743-28.857v0c0,.094-.527,20.592-.743,28.857l-2.952-4.316,1.9,5.218-5.886.856,5.886.856L16.993,38l3.244-3.4c-.169,6.469-.207,8.058-.207,8.058S5.512,35.915,13.58,21.021c0,0-10.061-11.1-.95-17.931,0,0-15.561,9.393-5.689,25.528,0,0-8.162-7.973-3.893-16.032,0,0-7.4,10.437,1.617,21.918,0,0-2.464-1.514-4.645-7.306,0,0,1.589,17.235,20.874,17.461h.386C40.556,44.434,42.155,27.2,42.155,27.2c-2.219,5.783-4.692,7.306-4.692,7.306Z"
                                            transform="translate(-0.021 -1.849)"/>
                                    </svg>

                                    <svg ref="sithlogo" id="sithlogo" className="imagens-login"
                                         xmlns="http://www.w3.org/2000/svg" width="42.124" height="42.124"
                                         viewBox="0 0 42.124 42.124">
                                        <path
                                            d="M0,2.25,6.555,13.416,1.02,12.333l6.567,8.559a13.8,13.8,0,0,0,0,4.838L1.02,34.289l5.534-1.083L0,44.374l11.166-6.555-1.083,5.534,8.559-6.567a13.769,13.769,0,0,0,4.84,0l8.559,6.567-1.083-5.534,11.166,6.555L35.569,33.206,41.1,34.289l-6.567-8.559a13.775,13.775,0,0,0,0-4.838L41.1,12.333l-5.534,1.083L42.124,2.25,30.958,8.8l1.083-5.538-8.562,6.57a13.678,13.678,0,0,0-4.835,0l-8.562-6.57L11.166,8.8Zm21.062,9.382a11.677,11.677,0,1,1-8.26,3.417,11.645,11.645,0,0,1,8.26-3.417Zm0,3.447a8.232,8.232,0,1,0,5.822,2.408,8.2,8.2,0,0,0-5.822-2.408Z"
                                            transform="translate(0 -2.25)"/>
                                    </svg>

                                    <svg ref="bhlogo" id="bhlogo" className="imagens-login" version="1.0"
                                         xmlns="http://www.w3.org/2000/svg" width="42.124" height="42.124"
                                         viewBox="0 0 4440 4480" preserveAspectRatio="xMidYMid meet">
                                        <g id="layer101" stroke="none">
                                            <path
                                                d="M2317 4278 c12 -274 8 -1089 -6 -1278 -6 -91 -18 -220 -26 -287 l-14 -121 34 -81 c60 -143 119 -370 132 -510 l6 -65 -34 24 c-61 43 -125 99 -148 131 l-23 31 17 75 c13 55 16 96 12 152 -7 80 -32 181 -46 181 -12 0 -49 -118 -61 -197 -8 -51 -8 -84 1 -131 l12 -64 -89 -89 c-60 -60 -92 -85 -98 -79 -6 6 -13 72 -16 148 l-5 137 37 41 c72 79 108 193 123 394 8 112 20 176 61 345 35 138 35 143 35 360 0 121 -2 229 -4 240 -3 11 -8 76 -12 145 -4 69 -8 127 -10 130 -2 3 -6 59 -10 125 -4 66 -9 129 -10 140 -1 11 -3 55 -4 99 l-1 78 -26 -6 c-90 -23 -122 -106 -103 -268 4 -35 15 -144 23 -243 9 -99 18 -198 21 -220 2 -22 7 -83 11 -135 3 -52 8 -98 10 -101 1 -3 6 -84 10 -180 l7 -175 -108 -114 c-150 -159 -155 -168 -156 -268 0 -44 5 -133 11 -197 7 -64 11 -169 8 -233 l-4 -117 -49 -90 -49 -90 -2 -142 c0 -79 -3 -145 -5 -147 -2 -2 -31 -11 -64 -21 -33 -9 -75 -25 -95 -35 -97 -50 -258 -220 -245 -260 17 -54 14 -70 -31 -155 l-46 -87 20 -46 c11 -26 30 -85 42 -132 25 -100 53 -166 82 -197 29 -31 45 -29 69 9 19 31 20 43 13 179 l-6 147 138 106 c76 58 178 129 226 157 81 48 89 56 99 93 21 83 31 106 51 117 11 6 23 8 26 4 4 -4 7 -64 6 -133 0 -125 -1 -130 -52 -292 -29 -91 -55 -181 -58 -201 -6 -35 -12 -40 -132 -105 -97 -53 -143 -85 -198 -139 -87 -86 -115 -148 -122 -275 l-4 -85 56 -53 c97 -92 189 -121 276 -86 36 14 39 19 33 43 -3 14 -23 58 -44 97 -22 39 -39 76 -39 82 0 6 32 28 70 48 39 20 75 44 79 53 6 10 2 39 -10 76 -10 33 -17 66 -14 72 2 7 20 13 40 13 65 0 101 -67 108 -195 l2 -49 -46 -11 c-49 -11 -79 -30 -79 -50 0 -32 63 -134 98 -158 77 -52 93 -54 457 -46 145 3 178 1 225 -15 30 -10 59 -22 64 -27 6 -5 19 -9 30 -9 42 0 107 162 101 252 -3 47 -71 193 -125 266 -35 49 -67 65 -160 82 -90 16 -131 43 -246 162 -54 57 -108 110 -120 118 -20 15 -20 20 -13 210 7 188 22 287 44 283 6 -1 22 -37 37 -80 16 -43 36 -89 46 -103 29 -38 87 -74 194 -120 171 -73 217 -133 274 -356 19 -75 44 -154 55 -176 22 -43 86 -118 101 -118 9 0 6 59 -12 200 -6 55 -5 68 10 85 38 43 67 131 72 221 2 39 -2 46 -61 105 -108 109 -184 237 -237 402 -28 88 -29 89 -96 139 -124 91 -133 118 -90 258 16 52 32 116 36 141 8 58 -8 134 -38 174 -51 69 -71 169 -69 360 0 99 6 175 17 223 15 68 15 75 -1 105 -9 18 -42 57 -73 88 l-57 55 13 75 c15 94 21 148 29 257 4 48 8 101 10 117 6 39 20 585 20 744 l0 125 -63 53 c-34 29 -67 53 -73 53 -7 0 -7 -59 -2 -182z"/>
                                            <path d="M2580 4050 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"/>
                                            <path
                                                d="M2578 4010 c-4 -14 -10 -65 -13 -115 -7 -104 -10 -143 -30 -395 -8 -102 -23 -243 -32 -314 l-16 -128 35 -34 36 -33 22 51 c37 86 52 182 52 341 0 81 -3 173 -6 205 -15 146 -36 371 -39 407 -2 34 -4 36 -9 15z"/>
                                            <path
                                                d="M1957 3718 c-46 -186 -87 -501 -87 -660 0 -142 4 -144 91 -61 49 47 59 61 55 82 -7 38 -15 138 -21 286 -6 137 -24 368 -30 373 -1 2 -5 -7 -8 -20z"/>
                                            <path
                                                d="M1055 3289 c-196 -30 -331 -113 -398 -246 -14 -27 -41 -109 -61 -181 -57 -211 -50 -357 30 -601 45 -139 128 -303 212 -421 74 -104 223 -259 320 -334 l63 -48 41 38 c23 20 84 57 137 81 140 64 159 75 201 111 52 44 60 70 28 96 -14 12 -112 91 -219 177 -286 231 -414 370 -481 524 -107 244 -47 484 143 581 93 47 137 56 297 61 l154 5 -43 44 c-89 90 -265 137 -424 113z"/>
                                            <path
                                                d="M3208 3095 c-53 -14 -124 -53 -150 -82 -16 -18 -15 -18 55 -15 132 7 251 -33 337 -114 149 -139 151 -389 5 -615 -45 -69 -118 -146 -386 -404 -97 -94 -143 -146 -164 -186 l-29 -57 18 -63 c28 -104 83 -203 153 -279 95 -103 90 -102 181 -28 367 300 577 620 678 1033 32 133 34 311 4 407 -56 181 -240 345 -446 398 -87 23 -186 24 -256 5z"/>
                                        </g>

                                    </svg>

                                </div>
                            </div>
                            <form className="form-login" onSubmit={this.handleSignUp.bind(this)}>
                                <div className="area-login">

                                    <img src={userIcon} className="form-icon" alt="user icon"/>
                                    <input className="area-text-login" type="text" name="username"
                                           placeholder="Username" ref="username"
                                           onChange={this.validateUsername.bind(this)}/>
                                </div>
                                <div className="area-login">

                                    <img src={emailIcon} className="form-icon" alt="email icon"/>
                                    <input className="area-text-login" type="email" name="email"
                                           placeholder="Email" ref="email" onChange={this.validateEmail.bind(this)}/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon" alt="key icon"/>

                                    <input id="password-text" className="area-text-login" type="password" name="senha"
                                           placeholder="Password" ref="password"
                                           onChange={this.validatePassword.bind(this)}/>
                                </div>
                                <div className="area-login">
                                    <img src={keyIcon} className="form-icon" alt="key icon"/>

                                    <input id="confirm-password-text" className="area-text-login" type="password"
                                           name="senha"
                                           placeholder="Confirm Password" ref="confirm"
                                           onKeyUp={this.validatePassword.bind(this)}/>
                                </div>



                                    <div className="area-login">

                                        <img src={factionIcon} className="form-icon" alt="faction choose icon"/>

                                        <select ref="select" required className="area-text-login" name="example"
                                                onChange={this.factionChange.bind(this)} defaultValue="0">
                                            <option value="0" disabled>Faction...</option>
                                            <option title="The Jedi Order was a noble, religious order of protectors united in their devotion to the light side of the Force. With a history dating back thousands of years before the rise of the Galactic Empire, the Jedi Knights—noted for their lightsabers and natural ability to harness the powers of the Force—stood as the guardians of peace and justice in the Galactic Republic." value={faction.JEDI}>Jedi</option>
                                            <option title="The Sith, also referred to as the Sith Order, was an ancient order of Force-wielders devoted to the dark side of the Force. Driven by their emotions, including hate, anger, and greed, the Sith were deceptive and obsessed with gaining power no matter the cost. " value={faction.SITH}>Sith</option>
                                            <option title="Bounty hunters were individuals who could be hired to capture or kill a designated target. The target would have a price or bounty on their heads that would be collected by the bounty hunter upon successful capture or proof of death. " value={faction.BOUNTY_HUNTER}>Caçador de
                                                Recompensa
                                            </option>

                                        </select>

                                    </div>

                                < input id="botao-login" type="submit" value="Sign Up"/>
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


export default SignUp;
