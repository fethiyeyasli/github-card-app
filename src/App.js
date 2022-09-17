import logo from './logo.svg';
import './App.css';
import React from 'react'
import Card from './Card';

const testData = [
  {key:"1", name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {key:"2", name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {key:"3", name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
  <div>
      {testData.map(profile => <Card {...profile}/>)}
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <CardList />
      </div>);
  }
}

export default App;