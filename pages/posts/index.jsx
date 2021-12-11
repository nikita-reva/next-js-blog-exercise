import Head from 'next/head';
import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of posts about shiddin' and farddin'!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
