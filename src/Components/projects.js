import React, {Component} from 'react';
import { Tabs, Tab , Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

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
                    <IconButton name="share" />
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
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className = "projects-grid"><Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Mascot Mayhem</CardTitle>
                <CardText>
                    3D 
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Mothia</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className = "projects-grid"><Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Maya Android App</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            
            <Card shadow={0} style={{width: '512px', margin: '1em'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>JDBC Group Project</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
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