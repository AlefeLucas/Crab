import React, {Component} from 'react'

export class Home extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <div className="home">
                    <div>
                        <h1>Home</h1>
                        <p>Dummy home</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;