import React from 'react';
import './App.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  showFormTitle = () => {
    console.log('clickTitle');
    this.setState({ showForm: !this.state.showForm, })
  }

  changeTitleData = (event) => {
    this.props.changeTitleData(event)
    this.setState({ showForm: !this.state.showForm, })
  }

  render(){
    return (
      <div className='post'>
      <button className='button button-delete' onClick={this.props.deletePost} id={this.props.post.id}>X</button>
        <p> Form #{this.props.post.id}</p>
        {this.state.showForm ?
          <form onSubmit={this.changeTitleData} id={this.props.post.id}>
            <label>
              <input
                className='input-title'
                type="text"
                name='title'
                id={this.props.post.id}
                value={this.props.post.title}
                onChange={this.props.changeTitleRealTime}
              />
            </label>
            <input type="submit" value="Change" className='button button-change'/>
          </form> :
          <h1 className='post-title' onClick={this.showFormTitle}>{this.props.post.title}</h1>
        }
        <p className='post-body'>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
