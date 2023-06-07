import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('content', content);
    formData.append('image', imageUrl); 
    
    try {
      const response = await axios.post('http://localhost:3000/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
        },
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

  return (
    <main className="flex h-screen w-full flex-1 flex-col justify-center items-center px-6 lg:px-8">
      <div className="w-full h-full bg-white shadow-lg p-2 mt-16 rounded-xl flex flex-col">
        <div className="flex flex-row w-full h-1/6 justify-between items-center">
          <input
            className="w-2/6 border-gray-300 border-2 rounded p-2"
            placeholder="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={(e) => setImageUrl(e.target.files[0])}
            required
          />
        </div>
        <div className="flex flex-row w-full h-4/6">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            sanitize={false}
            placeholder="Write Your Blog"
            className="w-full h-full whitespace-pre-wrap"
          />
          <div className="h-3">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 rounded px-4 items-end mb-2 py-1 mx-3 shadow-lg text-white font-bold"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;
