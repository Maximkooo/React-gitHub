import React from 'react';
import './App.css';
import Post from './Post';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.setState({posts : json}));
  }

  changeTitleData = (event) => {
    event.preventDefault();
    try{
      fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: event.target[0].value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.status === 200 ?
        alert('You change title ') :
        alert('You have error'))
    }
    catch(error){
      console.log(error);
    }
  }

  changeTitleRealTime = (event) => {
    this.setState({
      posts: this.state.posts.map((post) =>
        post.id === Number(event.target.id) ? {...post, title: event.target.value} : post
      )
    })
  }

  deletePost = (event) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.id}`, {
      method: 'DELETE',
    })
    .then((response) => response.status === 200 ?

      this.setState({
        posts: this.state.posts.filter((post) =>
          post.id !== Number(event.target.id)
        )}) :
      alert('You have error'))
    .then(alert(`You delete post #${event.target.id}`))
  }

  render(){
    return (
      <div className='box'>
        {this.state.posts ? <div> {this.state.posts.map(post =>
          <Post
            post={post}
            key={post.id}
            changeTitleRealTime={this.changeTitleRealTime}
            changeTitleData={this.changeTitleData}
            deletePost={this.deletePost}
          />
        )}
        </div> : null}
      </div>
    );
  }
}

export default App;
