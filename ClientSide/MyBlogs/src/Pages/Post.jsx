import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function Post() {
  const [value, setValue] = useState('');
const [head, setHead] = useState('');
const [image, setImage] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

  const postData = {
    value,
    head,
    image,
  };

  try {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      console.log('posted')
    } else {
      console.log('not potsed')
    }
  } catch (error) {
    // Error occurred, handle error
  }
};


  return (
    <main className="flex h-screen w-full flex-1 flex-col justify-center items-center px-6 lg:px-8">
      <div className='w-full h-full bg-white shadow-lg p-2 my-16 rounded-xl flex flex-col'>
        <div className='flex flex-row w-full h-1/6 justify-between items-center' >
          <input className='w-2/6 border-gray-300 border-2 rounded p-2' placeholder='Header' value={head} onChange={(e)=>setHead(e.target.value)}/>
          <input className='w-2/6 border-gray-300 border-2 rounded p-2' placeholder='Description' value={des} onChange={(e)=>setDes(e.target.value)}/>
          <input type='file' value={image} accept='image/jpeg , image/png' onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className='flex flex-row  w-full h-4/6'>
          <ReactQuill theme='snow' value={value} onChange={setValue} placeholder='Write Your Blog' className='w-full h-full'/>
          <div className='flex justify-end items-end align-bottom'>
            <button onClick={handleSubmit} className='bg-indigo-600 rounded items-center px-4 py-2 mx-3 shadow-lg text-white font-bold'>
              post
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Post