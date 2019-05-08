import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, HeaderRow, Textfield } from 'react-mdl';
import Main from './Components/main';
import { HashRouter, Link, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link to="/"  style={{ textDecoration: 'none' ,color: 'white' }} >Alexander James Ramirez</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
</HashRouter>

    );
  }
}

export default App;
