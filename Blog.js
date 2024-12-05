import React, { Component } from 'react'
import './Blog.css';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[
                {
                    id:1,
                    title:'Introduction to React',
                    content:'React is a JavaScript library for buliding user interfaces.',
                },
            ],
            newPost:{
                title:'',
                content:'',
            },
        };
    }
    handleInputChange=(e)=>{
        const{name,value}=e.target;
        this.setState((prevState)=>({
            newPost:{
                ...prevState.newPost,
                [name]:value,
            },
        }));
    };
    handleAddPost=()=>{
        const{posts,newPost}=this.state;
        const updatedPosts=[...posts,{id:posts.length+1,...newPost}];
        this.setState({
            posts:updatedPosts,
            newPost:{
                title:'',
                content:'',
            },
        });
    };
    render(){
        const{posts,newPost}=this.state;
        return(
            <div className="blog-container">
                <h1>My Blog</h1>
                <div className="posts-container">
                    {posts.map((post)=>(
                        <div key={post.id}className="post">
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                     ))}
                </div>
             <div className="add-post-container">
                <h2>Add a New Post</h2>
             <div>
                <input
                type="text"
                name="title"
                placeholder="Title"
                value={newPost.title}
                onChange={this.handleInputChange}
                />
            </div>
        <div>
     
        <textarea
        name="content"
        placeholder="Content"
        rows="10"
        cols="50"
        value={newPost.content}
        onChange={this.handleInputChange}
        />
     </div>
        <div>
            <button onClick={this.handleAddPost}>Add Post</button>
        </div>
    </div>
    </div>
    );
}
  
}

export default Blog;