import React from 'react';
import "./UserCard.css"
class UserCard extends React.Component{


    render(){

        const imagesrc=`https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`;
    
        return(
        <div className="ui card" >
            <div className="ui grid">
                <div className="ui row">
                
                <div className="three wide column">
                        <img alt="avatar" src={imagesrc}/>
                </div>
                
                
                <div className="thirteen wide column">
                    <h2>{this.props.data.name}</h2>
                    <p><strong>Email: </strong>{this.props.data.email}</p>
                    <p><strong>Phone: </strong>{this.props.data.phone}</p>
                    <p><strong>Company: </strong>{this.props.data.company.name}</p>
                    <p><strong>Website: </strong>{this.props.data.website}</p>
                    <p><strong>Address: </strong>{this.props.data.address.street},{this.props.data.address.suite},
                    {this.props.data.address.city},{this.props.data.address.zipcode}</p>
                </div>
                </div>    
                
            </div>
        </div>
    );


    }
}

export default UserCard;