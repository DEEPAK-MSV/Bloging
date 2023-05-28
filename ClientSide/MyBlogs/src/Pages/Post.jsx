import React, { useState } from 'react';
import { ImTab } from 'react-icons/im';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post() {
  const [heading, setheading] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

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

      if (response.ok) {
        console.log('posted');
      } else {
        console.log('not posted');
      }
    } catch (error) {
      // Error occurred, handle error
    }
  };

  return (
    <main className="flex h-screen w-full flex-1 flex-col justify-center items-center px-6 lg:px-8">
      <div className="w-full h-full bg-white shadow-lg p-2 my-16 rounded-xl flex flex-col">
        <div className="flex flex-row w-full h-1/6 justify-between items-center">
          <input
            className="w-2/6 border-gray-300 border-2 rounded p-2"
            placeholder="heading"
            value={heading}
            onChange={(e) => setheading(e.target.value)}
          />
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-row w-full h-4/6">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write Your Blog"
            className="w-full h-full"
          />
          <div className='h-3'>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 rounded  px-4 items-end py-2 mx-3 shadow-lg text-white font-bold"
            >
              post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;
