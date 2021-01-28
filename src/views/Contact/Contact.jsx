import React, {Component} from "react";
import Footer from "../../Components/Footer";
import "../../styling/contact.css";

class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            fields: {},
            errors: {}
        }
    }

    handleChange(field, event){         
        let fields = this.state.fields;
        fields[field] = event.target.value;        
        this.setState({fields});
    }

    validationHandler(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Add name"
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Add email address"
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
            }
        } 

        this.setState({errors:errors});
        return formIsValid;
    }

    contactSubmit(event) {
        event.preventDefault();

        if(this.validationHandler()){
           alert("Form submitted, Thank you");
        } else{
           alert("Form has errors. Please correct them")
        }
    }

    render(){
        return(
            <div>           
                <form 
                    className="Form" 
                    onSubmit= {this.contactSubmit.bind(this)}>

                    <div className="Form">
                        <h1>Contact Us</h1>
                        <h2>Let us know of any questions, concerns, or comments you may have.</h2>
                        <fieldset className="fieldset">
                            <label> Name:
                            <br/>
                                <input
                                    type="text" 
                                    onChange={this.handleChange.bind(this, "name")} 
                                    value={this.state.fields["name"] || ""}
                                />
                            </label>

                            <br/>
                            <span className="error">{this.state.errors["name"]}</span>
                            <br/>

                            <label> Email:
                                <br/>
                                <input                 
                                    type="text" 
                                    onChange={this.handleChange.bind(this, "email")} 
                                    value={this.state.fields["email"] || ""}
                                />
                            </label>

                            <br/>
                            <span className="error">{this.state.errors["email"]}</span>
                            <br/>

                            <label> Phone Number: 
                                <br/>
                                <input 
                                    type="text" 
                                    onChange={this.handleChange.bind(this, "phone")} 
                                    value={this.state.fields["phone"] || ""}/>
                            </label>
                        </fieldset>

                        <div className="Message">
                            <fieldset className="fieldset">
                                <br/>
                                <label> Message:
                                    <br/>
                                    <textarea 
                                        value={this.state.fields["comment"] || ""}
                                        className="comments" 
                                        onChange={this.handleChange.bind(this, "comment") || ""}>{this.state.fields["comment"]}
                                    </textarea>
                                </label>
                            </fieldset>
                        </div> 

                        <div>
                            <fieldset className="fieldset">
                                <button 
                                    className="SubmitBtn" 
                                    id="submit" 
                                    value="Submit">Submit
                                </button>
                            </fieldset>
                        </div> 

                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
};


/* Html Validation 
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
                    <h2>Let us know of any questions, concerns, or comments you may have.</h2>

                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        required
                    />
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id="email"
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        required
                    />

                    <label htmlFor="content">Comments</label>
                    <textarea 
                        id="content"
                        value={this.state.inputComment}   
                        type="text"
                        name="content"
                        placeholder="Add your questions, concerns or comments here."
                        required
                    />
                    <input type='submit' className="SubmitButton"/>
                </form>
                
                <Footer/>
            </div>
        )
    }
};*/

export default Contact;