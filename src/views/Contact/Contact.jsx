import React, {Component} from "react";
import Footer from "../../Components/Footer";
import "../../styling/contact.css";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            comment:''
        }
    }

    changeHandler = (event) => {
        let inputName = event.target.name;
        let inputEmail = event.target.email;
        let inputComment = event.target.comment;
        this.setState({inputName, inputEmail, inputComment})
        
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(`You have submitted name:${this.state.inputName}, email:${this.state.inputEmail}, and comment${this.state.inputComment}`)
    };



    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler} className="Form">
                    <h1>Get in touch</h1>
                    <h2>Let us know of any questions, concerns, or comments you may have.</h2>

                    <p>Name:</p>
                    <input 
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                    />
                    <p>Email Address:</p>
                    <input 
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                    />

                    <p>Comments:</p>
                    <textarea value={this.state.inputComment} placeholder="Add your questions, concerns or comments here."/>

                    <input type='submit'/>

                </form>
                <Footer/>
            </div>
        )
    }

};

export default Contact;