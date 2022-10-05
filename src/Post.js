import React from 'react';
import './App.css';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      id : this.props.post.id,
      body: this.props.post.body,
      isShow: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickTitle = this.clickTitle.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.alertMess = this.alertMess.bind(this);
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: this.state.title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json() && response.status === 200 ? this.alertMess('You change title') : this.alertMess('You have error'))
    .then((json) => this.setState(json) && json ? this.setState({isShow: !this.state.isShow}) : this.setState({isShow: !this.state.isShow}))
    event.preventDefault();
  }

  clickTitle() {
    this.setState({ isShow: !this.state.isShow, })
  }

  deletePost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}`, {
      method: 'DELETE',
    })
    .then((response) => response.status === 200 ? this.componentWillUnmount() : this.alertMess('Error'))
    this.alertMess('You delete post')
  }
  componentWillUnmount(){
    if (document.getElementById(this.state.id)) {
      document.getElementById(this.state.id).remove()
    }
  }

  alertMess(text) {
    alert(text)
  }


  render(){
    return (
      <div className='post' id={this.state.id}>
      <button className='button button-delete' onClick={this.deletePost}>X</button>
        <p> Form #{this.state.id}</p>
        {this.state.isShow ?
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className='input-title' type="text" value={this.state.title}  onChange={this.handleChange} />
            </label>
            <input type="submit" value="Change" className='button button-change'/>
          </form> : <h1 className='post-title' onClick={this.clickTitle}>{this.state.title}</h1>
        }
        <p className='post-body'>{this.state.body}</p>
      </div>
    );
  }
}

export default Post;
