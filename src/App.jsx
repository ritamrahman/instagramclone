import React from 'react';
import { useState } from 'react';
import Header from './Header';
import './app.css';
import Post from './Post';
// import { db } from './firebase';

function App() {
  const [posts, setposts] = useState([
    {
      username: 'ritam_rahman',
      imageUrl:
        'https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      caption: 'wow! its works',
    },
    {
      username: 'nature World',
      imageUrl:
        'https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_green.png',
      caption: 'Fill free to fly',
    },
  ]);

  // useEffect(() => {
  //   db.collection('post').onSnapshot((snapshot) => {
  //     setposts(snapshot.docs.map((doc) => doc.data));
  //   });
  // }, []);

  return (
    <div className='app'>
      <Header />
      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
