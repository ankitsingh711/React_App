import React, {Component, Fragment } from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()
        console.log('inside constructor')
        this.state={
            heading:'React App',
            user:'Your Typing...'
        }
    }

    typehere = (event) =>{
        console.log(event.target.value)
        this.setState({user:event.target.value?event.target.value:'Your Typing...'})
        this.props.userText(event.target.value)
    }


    
    render(){
        console.log('inside render')
        return(
            <Fragment>
                <header>
                    <div className='title'>{this.state.heading}</div>
                    <center>
                        <input onChange={this.typehere} placeholder='Type Here'/><button>Search</button>
                        <div className='usertext'>{this.state.user}</div>
                    </center>
                </header>
                <hr/>
        </Fragment>
        )
    }
}
export default Header;