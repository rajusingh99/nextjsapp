// api/posts.js

export async function fetchPosts() {
    const response = await fetch('https://blog.tokogame.com/wp-json/wp/v2/posts?_embed&id=264');
    const data = await response.json();
    return data;
  }
  