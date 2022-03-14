import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";

export default class MovieForm extends Component {
  state = {
    title: "",
    cover: "",
    errors: "",
  };
  render() {
    //console.log("FORM",this.props)
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onSubmitFormData = () => {
      const errors = validate();
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.props.newMovies(this.state);
      }
      //console.log(this.state)
      //alert("Submit")
    };
    const validate = () => {
      const errMessage = {};
      if (!this.state.title) {
        errMessage.title = "Can't be blank.";
      }
      if (!this.state.cover) {
        errMessage.cover = "Can't be blank.";
      }
      return errMessage;
    };
    return (
      <div>
        <h2>Movie Form</h2>
        <Form onSubmit={onSubmitFormData} loading={this.props.newMovieReducer.fetching}>
        
 {!this.props.newMovieReducer.error.message ? (
            ""
          ) : (
            <Form.Field>
              <Message negative>
                <Message.Header>
                  Error with POST API
                </Message.Header>
                <p>{this.props.newMovieReducer.error.message}</p>
              </Message>
            </Form.Field>
          )}

          {!this.state.errors.title && !this.state.errors.cover ? (
            ""
          ) : (
            <Form.Field>
              <Message negative>
                <Message.Header>
                  We're sorry we can't apply that discount
                </Message.Header>
                <p>Cant be blank!</p>
              </Message>
            </Form.Field>
          )}

          <Form.Field error={this.state.errors.title}>
            <label>Title</label>
            <input
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field error={this.state.errors.cover}>
            <label>Cover URL</label>
            <input
              placeholder="Cover URL"
              name="cover"
              value={this.state.cover}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Image src={this.state.cover} size="small" />
          </Form.Field>
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
