import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <AppNav />
                <h2>Welcome to easy expense app!</h2>
            </div>
            );
    }
}
 
export default Home;