import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const insertTag = (tagType) => {
    let tag = '';
    if (tagType === 'image') {
      const url = window.prompt("Enter image URL:");
      if (url) tag = `\n[img]${url}[/img]\n`;
    } else if (tagType === 'link') {
      const url = window.prompt("Enter link URL:");
      if (url) tag = ` [link]${url}[/link] `;
    } else if (tagType === 'code') {
      tag = `\n\`\`\`\n// Paste your code here\n\`\`\`\n`;
    }
    setText(prev => prev + tag);
  }

  return (
    <div className="post-composer">
      <form
        className='composer-form'
        onSubmit={e => {
          e.preventDefault();
          if (text.trim() === '') return;
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          name="text"
          className="composer-textarea"
          placeholder="What's on your mind? Share with the community..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <div className="composer-footer">
          <div className="composer-tools">
            <i className="fas fa-image" title="Insert Image" onClick={() => insertTag('image')}></i>
            <i className="fas fa-code" title="Insert Code Block" onClick={() => insertTag('code')}></i>
            <i className="fas fa-link" title="Insert Link" onClick={() => insertTag('link')}></i>
          </div>
          <button type="submit" className="btn-composer" disabled={text.trim() === ''}>
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm)