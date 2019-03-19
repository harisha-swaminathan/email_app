import React from 'react';
import axios from 'axios';
import Views from './Views';
import Header from './Header';
export default class ViewEmail extends React.Component{
    state={
        mail:[]
      };
        componentDidMount() {
          axios.get(`http://5c5a21f9af3ff700140de477.mockapi.io/api/email/${this.props.match.params.id}`)
          .then(result => {
            const mail = result.data;
            this.setState({ mail });
          })
          } 
    render(){
        return(
            <div>
            <Header/>
            <Views/>
            <div className="form_container">
               <div className="viewMail">From: &nbsp;&nbsp;  {this.state.mail.from}</div>
               <div className="viewMail">Subject: &nbsp;&nbsp;   {this.state.mail.subject}</div> 
               <div className="viewMail">{this.state.mail.text}</div>
                </div>
        </div>
        )
    }
}

