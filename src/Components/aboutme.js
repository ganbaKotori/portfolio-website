import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://github.com/ganbaKotori/portfolio-website/blob/master/public/meborder.png?raw=true"
                            alt="avatar"
                            className="avatar-img"
                            />

                        <div className="about-text">
                        <h1>About me</h1>
                        <hr/>

                        <p>You can call me Alex. I'm 23 years old and I reside in Los Angeles. I go to Cal State Long Beach where I'm working towards my Bachelor's in Computer Science. In my productive spare time I like to create video games and websites just like this one.
                            When I'm not feeling productive, I will read books and play Overwatch. I am currently engaged and I plan to marry my fiance next year.
                        </p>

                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;