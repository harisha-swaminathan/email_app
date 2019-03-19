import React from 'react';
import EmailList from './EmailList';
import CreateEmail from './CreateEmail';
import {NavLink} from 'react-router-dom';
import Email from './Email';
export default class Views extends React.Component{
    render(){
        return(
            <div>
            <div className="container"> 
            <NavLink className="tab1" to="/" ><h2>LIST</h2></NavLink>
            <NavLink className="tab2" to="/create"><h2>CREATE</h2></NavLink>
            </div>
            {this.props.list&&<EmailList/>}
            {this.props.create&&<CreateEmail/>}
            </div>
        )
       
    }
}

