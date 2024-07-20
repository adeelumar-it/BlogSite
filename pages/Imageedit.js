
import { Resizable } from 'react-resizable';
import * as React from 'react';

const Imageedit = () => {
  const [content, setContent] = React.useState('');

  // Function to handle image insertion
  function handleImageInsertion(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgSrc = e.target.result;
      const img = new Image();
      img.src = imgSrc;
      img.alt = "Selected Image";

      // Wrap the image with a resizable container
      const resizableImg = (
        <Resizable
          key={imgSrc}
          width={200} // Initial width
          height={200} // Initial height
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <img src={imgSrc} alt="Selected Image" />
        </Resizable>
      );

      // Append the resizable image container to the contenteditable div
      setContent((prevContent) => prevContent + resizableImg);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <div
        className="border border-gray-300 rounded-lg p-4 mt-5 focus-within:border-blue-300"
        contentEditable
        style={{
          maxWidth: "60%",
          minWidth: "85%",
          minHeight: "36vh"
        }}
        placeholder="Enter your text here..."
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
      <div>
        <input
          type="file"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageInsertion}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => document.getElementById('imageInput').click()}
        >
          Select Image
        </button>
      </div>
    </div>
  );
};

export default Imageedit;
