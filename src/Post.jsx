import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './post.css';

function Post({ username, imageUrl, caption }) {
  return (
    <div className='post'>
      {/* post Body */}
      <div className='post__body'>
        {/* avatar,username */}
        <div className='post__header'>
          <Avatar
            alt='Ritam Rahman'
            src='/static/images/avatar/1.jpg'
            className='avatar'
          />

          <h5 className='user__name'>{username}</h5>
        </div>
        {/* post iamge */}
        <img
          className='post__img'
          src={imageUrl}
          // src='https://www.gstatic.com/tv/thumb/persons/233377/233377_v9_bb.jpg'
          alt='Post_image'
        />
        {/* like/comment/shear */}
        <div className='like__div'>
          <FavoriteBorderRoundedIcon className='like' />
          <ModeCommentOutlinedIcon className='cmt' />
          <SendOutlinedIcon className='shear' />
        </div>
        {/* caption */}
        <div className='caption'>
          {/* cp_usernae */}
          <h5 className='cp__user_name'>{username}</h5>
          {/* main_caption */}
          <p>{caption}</p>
        </div>
        {/* comment_area */}
        <div className='comment__area'>
          <input placeholder='Add a comment...'></input>
          <h4 className='cmt__post'>post</h4>
        </div>
      </div>
    </div>
  );
}

export default Post;
