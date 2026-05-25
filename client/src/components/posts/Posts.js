import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: {posts, loading }}) => {
    useEffect(()=>{
        getPosts()
    },[getPosts])
  return loading ? (
    <Spinner />
    ) : (
    <div className="page-wrapper max-w-3xl">
        <div className="page-header">
          <h1 className="x-large text-dark">Community</h1>
          <p className="lead">
            <i className="fas fa-comment-dots text-primary"></i> Engage in discussions with developers
          </p>
        </div>

        <div className="feed-container">
          <PostForm/>
          <div className="posts-feed">
            {posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
    </div>
    );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);