import Head from 'next/head';
import React, { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Nikita's Shid Blog</title>
        <meta name="description" content="I blog about shids and fards" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
