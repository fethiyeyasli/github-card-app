import React from 'react'
import axios from "axios";

class Form extends React.Component{
    state = {userName : ''};
    handleSubmit = async (event) => {
        event.preventDefault(); //for prevent page refresh on form submit
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        console.log(resp)
        this.setState({userName:''});
    };
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
            value={this.state.userName} 
            onChange={ event => this.setState({userName: event.target.value})} 
            placeholder='Github username'>
            </input>
            <button>Add Card</button>
        </form>);
    }
}
export default Form;