import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const MyPosts = (props) => {
/////////////////DATA ARRAYS////////////////
    let postsElements = props.posts.map ((el) => {
        return ( <Post message={el.message} key={el.id} id={el.id} likesCount={el.likesCount} /> );
    });
///////////////////DATA ARRAYS END////////////


    let onAddPost = (values) => {
        props.addPost(values.post);
    }

    return (
        <div className={s.postBlock}>
          My post
          <div>
            <PostForm onSubmit={onAddPost}/>
          </div>

            <div className={s.posts}>
              {/*<Post message={posts[0].message} likesCount={posts[0].likesCount} />
              <Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                { postsElements }
          </div>

        </div>
        
    );
}

export default MyPosts;