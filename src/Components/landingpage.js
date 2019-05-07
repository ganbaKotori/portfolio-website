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
                        <h1>Student who develops websites and video games</h1>
                        <hr/>

                        <p>Javascript | Unity | C# | React | Java | C++ | SQL | Python</p>

                        <div className = "social-links"> 
                            <a href="https://www.linkedin.com/in/ree/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/ganbaKotori" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://onedrive.live.com/redir?resid=6D408BAA84BD8278!8231&authkey=!AC9b1Ua6ot5puJg&ithint=file%2cdocx" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-file-text" aria-hidden="true" />
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