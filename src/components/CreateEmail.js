import React from 'react';
import Views from './Views';
import Header from './Header';
export default class CreateEmail extends React.Component{
    render(){
        return(
                <div>
                    <Header/>
                    <Views/>
                <form className="form_container">
               <div className="create"><label>To: </label><input type="text" className="createEmail"  autoFocus /></div>
               <div className="create"><label>Subject: </label><input type="text" className="createEmail" /></div> 
               <div className="create__area"><textarea placeholder="Type your message here" className="createEmail__area"></textarea>
               <button className="send"><h3>SEND</h3></button>
               </div>
                </form>
                </div>
        )

    }
}