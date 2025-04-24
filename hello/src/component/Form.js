import React, { Component } from 'react';
import './myStyles.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      comment: '',
      topic: 'react',
      formData: null ,
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
  };
  handleOutput = (event) => {
    event.preventDefault();
    this.setState({
      formData: {
        userName: this.state.userName,
        comment: this.state.comment,
        topic: this.state.topic,
      },
    })
    // console.log(this.state.userName);
    // console.log(this.state.comment);
    // console.log(this.state.topic);

    // alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
  };

  handleclearData = (event) => {
    this.setState({
      userName: '',
      comment: '',
      topic: '',
      formData: null,
    })
  }

  render() {
    return (
      <div>
        <form className="formHandling" onSubmit={this.handxleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div>
            <label>Comment</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>
          <div>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button
            type="submit"
            className="form_button"
            onClick={this.handleOutput}
          >
            Submit
          </button>
          <button type='text'onClick={this.handleclearData}>Clear</button>
        </form>
        {this.state.formData && ( 
          <>
            <h1>Form Data Table 1</h1>
            <h2>{this.state.formData.userName}</h2>
            <h2>{this.state.formData.comment}</h2>
            <h2>{this.state.formData.topic}</h2>
          </>
        )}
{/*           <h2>{this.state.formData?.userName}</h2>
            <h2>{this.state.formData?.comment}</h2>
            <h2>{this.state.formData?.topic}</h2>        //Optional Chaining : ? 
 */}        
      </div>
    );
  }
}

export default Form;
