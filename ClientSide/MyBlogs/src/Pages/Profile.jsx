import React, { useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsPen, BsTrash } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authtoken');
        const response = await axios.get('http://localhost:3000/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const token = localStorage.getItem('authtoken');
        const response = await axios.get('http://localhost:3000/posts/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserPosts(response.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };
    
    fetchUserDetails();
    fetchUserPosts();
  }, []);

  // const handleedit = (post) => {
  //   navigate(`/posts/${post.id}`)
  // };


  const handleDeletePost = async (postId) => {
    try {
      const token = localStorage.getItem('authtoken');
      await axios.delete(`http://localhost:3000/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const getShortenedContent = (content) => {
    // Remove HTML tags from the content
    const sanitizedContent = content.replace(/<[^>]+>/g, '');

    const words = sanitizedContent.split(' ');
    const shortenedWords = words.slice(0, 50);
    const shortenedContent = shortenedWords.join(' ');

    if (words.length > 50) {
      return `${shortenedContent}...`;
    }

    return shortenedContent;
  };

  if (!userDetails || !userPosts) {
    return (
      <main className="flex flex-col justify-center items-center w-full h-full overflow-auto">
        <div className="mt-16"></div>
        <h1 className="text-2xl font-semibold text-center uppercase">
          No User Found!
        </h1>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col justify-center items-center w-full h-full overflow-auto">
      <div className="mt-16"></div>
      <div className="w-full h-full px-8 flex justify-start items-start space-y-4 flex-col">
        <div className="rounded-lg h-full space-x-8 border-2 bg-white border-dashed border-indigo-600 p-10 flex justify-center items-center flex-row">
          <div className="bg-gray-400 rounded-full p-4">
            <BiUser className="text-4xl" />
          </div>
          <div className="flex flex-1 justify-start text-xl font-semibold items-start flex-col">
            <h1>{userDetails.f_name}</h1>
            <h1>{userDetails.email}</h1>
            <h1>Blogs - {userPosts.length}</h1>
          </div>
        </div>
        <div className="w-full rounded-lg h-full space-y-8 border-2 border-dashed border-indigo-600 p-10 flex justify-start items-start flex-col">
          {userPosts.map((post) => (
            <div
              key={post.id}
              className="w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-white shadow-sm p-2"
            >
              <div>
                <img
                  className="h-full w-full rounded-lg"
                  src={`http://localhost:3000/image/${post.imageUrl}`}
                  alt="Post Image"
                />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="pb-2">
                  <h1 className="font-bold text-lg font-serif">{post.heading}</h1>
                  <p className="text-lg font-mono">{getShortenedContent(post.content)}</p>
                </div>
                <div className="flex justify-end space-x-6 text-2xl items-end">
                  {/* <button onClick={()=> handleedit(post.id)}>
                    <BsPen />
                  </button> */}
                  <button onClick={() => handleDeletePost(post.id)}>
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Profile;
