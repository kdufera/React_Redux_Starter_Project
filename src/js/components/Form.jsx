import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends Component {
    constructor() {
      super();

      this.state = {
        title: "",
        name: "",
        age:""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleAge =  this.handleAge.bind(this);

    }

    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }

    handleName(event) {
      this.setState({ [event.target.id]: event.target.value });
    }

    handleAge(event) {
      this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      const { title,name,age } = this.state;
      const id = uuidv1();
      this.props.addArticle({title,name, age,id }); // dispatch actions 
      this.setState({ title: "", name:"" , age:""}); // clear curr local state 
    }


    render() { 
      const { title, name, age } = this.state;
      return (

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
              required />

             <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleName}
              required />

              <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={this.handleAge}
              required />
              
          </div>  
          
          <button type="submit" className="btn btn-success btn-lg"> SAVE
          </button>
        </form>
      );
    }
  }


const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;