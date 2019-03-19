import React from 'react';
import Views from './Views';
import Header from './Header';
import EmailList from './EmailList';
export default class Email extends React.Component{
  
    render(){
      return(
        <div>
        <Header/>
        <Views list={true} create={false}/>
        </div>
      );    
}
}
