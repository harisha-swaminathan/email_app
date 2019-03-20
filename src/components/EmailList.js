import React from 'react';
import axios from 'axios';
import EachEmail from './EachEmail';
export default class EmailList extends React.Component{
  state={
    email:[]
  };
    componentDidMount() {
      axios.get('https://5c5a21f9af3ff700140de477.mockapi.io/api/email')
      .then(result => {
        const email = result.data;
        this.setState({ email });
      })
      } 
    render(){
        return(
         <div>
           {this.state.email.map((emailI) =>( <EachEmail key={emailI.id} {...emailI}/>))}
         </div>
        );
    }
}

