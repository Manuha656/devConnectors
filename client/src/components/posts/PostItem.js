import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const renderRichText = (text) => {
  if (!text) return null;

  // Split by code blocks first
  const parts = text.split(/```([\s\S]*?)```/g);
  
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Inside code block
      return (
        <pre key={index} className="rich-code-block">
          <code>{part.trim()}</code>
        </pre>
      );
    }

    // Normal text: parse [img] and [link]
    const inlineRegex = /(\[img\].*?\[\/img\]|\[link\].*?\[\/link\])/g;
    const inlineParts = part.split(inlineRegex);

    return (
      <span key={index}>
        {inlineParts.map((subPart, subIndex) => {
          if (!subPart) return null;
          
          if (subPart.startsWith('[img]') && subPart.endsWith('[/img]')) {
            const url = subPart.slice(5, -6);
            return (
              <div key={subIndex} className="rich-img-wrapper">
                <img src={url} alt="embed" className="rich-img" onError={(e) => e.target.style.display='none'} />
              </div>
            );
          }
          
          if (subPart.startsWith('[link]') && subPart.endsWith('[/link]')) {
            const url = subPart.slice(6, -7);
            return <a key={subIndex} href={url} target="_blank" rel="noopener noreferrer" className="rich-link">{url}</a>;
          }

          return <span key={subIndex}>{subPart}</span>;
        })}
      </span>
    );
  });
};

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions
}) => 
        <div className="feed-post">
          <div className="feed-post-avatar">
            <Link to={`/profile/${user}`}>
              <img src={avatar} alt="" />
            </Link>
          </div>
          <div className="feed-post-content">
            <div className="feed-post-header">
              <Link to={`/profile/${user}`} className="feed-post-name">
                {name}
              </Link>
              <span className="feed-post-date">
                <Moment format='MMM D, YYYY'>{date}</Moment>
              </span>
              { !auth.loading && user === auth.user._id && (
                  <button onClick={e => deletePost(_id)} type="button" className="btn-icon btn-danger-soft feed-delete-btn" title="Delete Post">
                      <i className="fas fa-trash-alt"></i>
                  </button>
              )}
            </div>
            
            <div className="feed-post-text" style={{ whiteSpace: 'pre-wrap' }}>
              {renderRichText(text)}
            </div>
            
            { showActions && (
            <div className="feed-post-actions">
              <button onClick={e => addLike(_id)} type="button" className="action-btn like-btn">
                <i className="fas fa-heart"></i>
                { likes.length > 0 && <span className="action-count">{likes.length}</span>}
              </button>
              <button onClick={e => removeLike(_id)} type="button" className="action-btn unlike-btn">
                <i className="fas fa-heart-broken"></i>
              </button>
              <Link to={`/post/${_id}`} className="action-btn comment-btn">
                <i className="fas fa-comment"></i>
                { comments.length > 0 && <span className='action-count'>{comments.length}</span>}
              </Link>
            </div>
            )}
          </div>
        </div>

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(PostItem);