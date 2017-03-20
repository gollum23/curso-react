import React, { Component } from 'react';
import { Link } from 'react-router';
import api from '../../api.js';
import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/containers/Loading.jsx'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      posts: [],
      loading: true,
    };

    this.handleScroll = this.handleScroll.bind(this)
  }

  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);

    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null
    }

    this.setState({loading: true}, async () => {
      try {
        const posts = await api.posts.getList(this.state.page);

        this.setState({
          posts: this.state.posts.concat(posts),
          page: this.state.page + 1,
          loading: false,
        })
      }
      catch (error) {
        console.error(error);
        this.setState({Loading: false});
      }
    })
  }

  render() {
    return (
      <section name="Home">
        <h1>Home</h1>
        <section>
          {this.state.loading && (
            <Loading/>
          )}
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)
          }
        </section>
      </section>
    );
  }
}

export default Home;