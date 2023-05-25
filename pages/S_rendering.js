import React from 'react';

function HomePage({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getServerSideProps() {
  const response = await fetch('https://blog.tokogame.com/wp-json/wp/v2/posts?_embed&id=264');
  const data = await response.json();

  return { props: { posts: data } };
}

export default HomePage;
