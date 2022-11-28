import logo from './logo.svg';
import './App.css';
import React from 'react'
import Card from './Card';
import Form from './Form';
//github usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
  {key:"1", name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {key:"2", name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {key:"3", name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
  <div>
      {props.profiles.map(profile => <Card deleteUser={props.onDeleteUser} key={profile.id} {...profile}/>)}
  </div>
);

class App extends React.Component {
  state = {
    profiles: []
  };
  deleteProfile = (profileData) => {
    const currentProfiles = this.state.profiles;
    const index = currentProfiles.findIndex(key => key.id.toString() === profileData.id);
    currentProfiles.splice(index,1);
    this.setState({profiles: currentProfiles});
  };
  addNewProfile = (profileData) => {
    this.setState( prevState => ({
      profiles : [...prevState.profiles, profileData]
    }))
  };
  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}></Form>
        <CardList profiles={this.state.profiles} onDeleteUser={this.deleteProfile}/>
      </div>);
  }
}

export default App;