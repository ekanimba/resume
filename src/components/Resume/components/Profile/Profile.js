import React from 'react';
import './Profile.css'
class Profile extends React.Component {

    
    render(){
        return (
            <div className="Profile">
                {this.props.profile}
            </div>
        );
    }
    
}

export default Profile;