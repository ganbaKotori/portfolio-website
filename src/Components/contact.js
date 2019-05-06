import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                   <h2>Alexander Ramirez</h2>
                   <img 
                        src="meborder.png"
                        alt="avatar"
                        style={{height: '250px'}}
                   /><p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello please contact me. I am looking for internships in the summer. When I graduate in Spring of 2020, I am planning to acquire a full time position job.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
  <ListItem>
    <ListItemContent icon="email" style={{fontsize:'2em', fontFamily: 'Arvo'}}><div className="contact-text">alexander.ramirez@student.csulb.edu</div></ListItemContent>
  </ListItem>
  
 
</List>
</div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;