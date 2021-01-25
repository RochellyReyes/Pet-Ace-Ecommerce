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
        alert(`You have submitted this form. Thank you`)
    };



    render() {
        return(
            <div className="Background">
                <form onSubmit={this.submitHandler} className="Form">
                    <h1>Contact Us</h1>
                    <h3>Let us know of any questions, concerns, or comments you may have.</h3>

                    <p>Name</p>
                    <input 
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        required
                    />
                    <p>Email Address</p>
                    <input 
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        required
                    />

                    <p>Comments</p>
                    <textarea 
                        value={this.state.inputComment}   
                        placeholder="Add your questions, concerns or comments here."
                        required
                    />

                    <input type='submit' className="SubmitButton"/>

                </form>
                
                <Footer/>
            </div>

        )
    }

};

export default Contact;