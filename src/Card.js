import React from 'react'
import logo from './logo.svg';


class Card extends React.Component{
    deleteUser = (event) =>{
        this.props.deleteUser({id: this.profileIdRef.current.value});
    };
    profileIdRef = React.createRef();
    render(){
        const profile = this.props;
        const profileId ="profileId"+profile.id;
        return(
        <div className="github-profile">
            <input id={profileId} type="hidden" value={profile.id} ref={this.profileIdRef} ></input>
            <img src={profile.avatar_url}></img>
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
                <button onClick={this.deleteUser}>Delete</button>
            </div>
        </div>);
    }
}
export default Card;