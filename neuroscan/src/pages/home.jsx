// Home.js
import React, { useState } from 'react';

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const detectTumor = () => {
    
    setResult('Tumor detected!');
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center w-full"
      style={{
        backgroundImage: `url('https://neurosciencenews.com/files/2023/07/ai-brain-cancer-neurosciences.jpg')`,
        backgroundSize:'cover',
        // backgroundPosition: "",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Brain Tumor Detection</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        {imageUrl && (
          <div className="mb-4">
            <img src={imageUrl} alt="Uploaded" className="max-w-full" />
          </div>
        )}
        <button
          onClick={detectTumor}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Detect Tumor
        </button>
        {result && <p className="mt-4">{result}</p>}
      </div>
    </div>
  );
};

export default Home;
