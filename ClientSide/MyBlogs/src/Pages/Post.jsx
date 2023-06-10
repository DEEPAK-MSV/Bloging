import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setimageUrl] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageUrl || imageUrl.width == 300 || imageUrl.height == 200) {
      alert('Please select an image with a resolution of at least 300x200 pixels.');
      return;
    }

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('content', content);
    formData.append('imageUrl', imageUrl);

    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
        },
        body: formData,
      });

      if (response.status === 200) {
        console.log('posted');
        alert('Posted Your Blog');
        navigate('/');
      } else {
        console.log('not posted');
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setimageUrl(file);
  };

  return (
    <main className="flex bg-white flex-col justify-center items-center w-full h-full overflow-auto">
      <div className="mt-16"></div>
      <div className="bg-white rounded-lg w-full h-full flex-1 flex flex-col">
        <h1 className='text-center text-2xl font-semibold text-indigo-600'>Post Your Blog!</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between items-center p-3">
            <input
              id="heading"
              placeholder="Enter heading"
              value={heading}
              className="w-2/5 border-gray-300 border-2 rounded p-2"
              onChange={(e) => setHeading(e.target.value)}
              required
            />
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
          </div>
          <div className="flex flex-1 w-full h-full p-3">
            <textarea
              id="content"
              placeholder="Write your blog content"
              className="w-full h-screen resize-none border-2 border-gray-300 rounded p-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end items-end p-3">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded shadow-lg"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Post;
