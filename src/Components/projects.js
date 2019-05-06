import React, {Component} from 'react';
import { Tabs, Tab , Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state =  { activeTab: 0};
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0 ){
            return(
                <div className = "projects-grid"><Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Portfolio Website</CardTitle>
                <CardText>
                    My own personal portfolio website that I created in React and published on Github Pages. I use Bootstrap 
                </CardText>
                <CardActions border>
                    <Button colored>Visit (you're alreaday here)</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            <Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Nodi.online</CardTitle>
                <CardText>
                    Social media website written in React intended for users submitting projects.
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className = "projects-grid"><Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#000', height: '300px', background: 'url(mascotmayhem.png) center / cover'}}>Mascot Mayhem</CardTitle>
                <CardText>
                    3D Unity video game inspired by the pursuit of a new mascot for Cal State Long Beach. Developed for the Video Game Development Association.
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/ganbaKotori/TBBnut" style={{ textDecoration: 'none' ,color: 'black' }}>Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            <Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#000', height: '300px', background: 'url(lightGoddess.png) center / cover', fontWeight:'bold'}}>Mothia</CardTitle>
                <CardText>
                    Tower Defense video game created with Unity. Developed for the Video Game Development Association in the Fall of 2018.
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/ganbaKotori/TBBnut" style={{ textDecoration: 'none' ,color: 'black' }}>Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className = "projects-grid"><Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover'}}>Maya Android App</CardTitle>
                <CardText>
                    Android application developed in Android Studio using Java. This project was developed at the 2019 AT&T Shape Hackathon.
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/ganbaKotori/maya-app" style={{ textDecoration: 'none' ,color: 'black' }}>Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            
            <Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.timescale.com/content/images/size/w600/2019/02/_IoT---Relational-Database.png) center / cover'}}>JDBC Group Project</CardTitle>
                <CardText>
                    Class project for my Database Fundamentals Course. It is a Java program that executes queries for a local Apache Derby database server. 
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/ganbaKotori/maya-app" style={{ textDecoration: 'none' ,color: 'black' }}>Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            
            </div>
            )
        
        }
    }



    render(){
        return(
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId})} ripple>

                <Tab>
                    React
                </Tab>
                <Tab>
                    Unity/C#
                </Tab>
                <Tab>
                    Java
                </Tab>
                
                
                </Tabs>
                

                <section className="projects-grid">
                    <Grid >
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Projects;