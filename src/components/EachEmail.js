import React from 'react';
import {Link} from 'react-router-dom';
const EachEmail=({id,from,subject})=>(
     <Link className="each_email" to={`/view_mail/${id}`}>
    <div className="container">
    <div className="eachEmail">
    <div><input type="checkbox" value="from"/> &nbsp;{from}</div>  &nbsp; {subject}
    </div>
    </div>
      </Link>
)
export default EachEmail;