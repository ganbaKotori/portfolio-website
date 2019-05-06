import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="meborder.png"
                            alt="avatar"
                            className="avatar-img"
                            />

                        <div className="banner-text">
                        <h1>Student developing websites and video games</h1>
                        <hr/>

                        <p>Javascript | Unity | C# | React | Java | NodeJS | SQL</p>

                        <div className = "social-links"> 
                            <a href="https://www.linkedin.com/in/ree/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/ganbaKotori" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;