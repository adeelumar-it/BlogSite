import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SendIcon from '@mui/icons-material/Send';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useRouter } from 'next/router';
import Link from 'next/link';
import $ from 'jquery'
export default function CustomizedDividers() {
  const router = useRouter();

  const [base64Image, setBase64Image] = React.useState('');
  const [content, setContent] = React.useState('');
  const [blogtitle, setBlogTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [alignment, setAlignment] = React.useState('left');
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === 'blogtitle') setBlogTitle(value);
  };

  const handleContentChange = (event) => {
    setDescription(event.target.innerHTML);
  };

  const handleImageInsertion = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setBase64Image(e.target.result);
      setContent((prevContent) => prevContent + `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%; display: block;" />`);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const postArticle = async () => {
    const currentDate = new Date();
    const formattedDateTime = formatDateTime(currentDate);
    const base64Imagewe = base64Image.split(",")[1];
    const userId = '2138676b-462c-48ed-74f0-08db9d5e5ff3';
  
    const object = {
      userid: userId,
      blogtitle: blogtitle,
      blogdescription: description,
      blgIMG_64: base64Imagewe,
      publishdate: formattedDateTime,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/createPost', object);
      console.log('Response:', response.data);
      router.push('/');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  
  // const postArticle = async () => {
  //   const currentDate = new Date();
  //   const formattedDateTime = formatDateTime(currentDate);
  //   const base64Imagewe = base64Image.split(",")[1];
  //   const userId = '2138676b-462c-48ed-74f0-08db9d5e5ff3';

  //   const object = {
  //     userid: userId,
  //     blogtitle: blogtitle,
  //     blogdescription: description,
  //     blgIMG_64: base64Imagewe,
  //     publishdate: formattedDateTime,
  //   };

  //   // try {
  //   //   const response = await axios.post('http://localhost:3000/api/createPost', object);
  //   //   console.log('Response:', response.data);
  //   // } catch (error) {
  //   //   console.error('Error:', error.response ? error.response.data : error.message);
  //   // }

  //   // Call this method to add new data to bibliography


  //   axios.post('http://localhost:3000/api/createPost',object)
  //     .then(response => {
  //       console.log('Response:', response);
  //     //  router.push('/signin');
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //      // setError('Something went wrong. Please try again.');
  //     });
  // //   var settings = {
  // //     url:"http://localhost:3000/api/createPost",
  // //     method: "POST",
  // //     contentType: "application/json",
  // //     data: JSON.stringify(
  // //       {
  // //          userId,
  // //          blogtitle,
  // //          description,
  // //          base64Imagewe,
  // //          formattedDateTime,
  // //       })
  // // };

  // // $.ajax(settings).done(function (response) {
  // //     console.log(null, response);
  // // }).fail(function (xhr) {
  // //     let errorMessage;

  // //     // Check the status code and set an appropriate error message
  // //     switch (xhr.status) {
  // //         case 400:
  // //             errorMessage = '400 Bad Request: unable to understand request.';
  // //             break;
  // //         case 401:
  // //             errorMessage = '401 Unauthorized: invalid credentials.';
  // //             break;
  // //         case 403:
  // //             errorMessage = '403 Forbidden: Method not allowed';
  // //             break;
  // //         case 404:
  // //             errorMessage = '404 Not Found: resource not found.';
  // //             break;
  // //         case 500:
  // //             errorMessage = '500 Internal Server Error';
  // //             break;
  // //         case 503:
  // //             errorMessage = '503 Service Unavailable: unable to handle request.';
  // //             break;
  // //         default:
  // //             errorMessage = `An error occurred: ${xhr.status} ${xhr.statusText}`;
  // //     }})
  // };

  function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <Box sx={{ flexGrow: 1 }} className='ml-3 mt-3 '>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ maxWidth: '100%' }}>
            <CardContent>
              <div className='dark:text-white'>
                <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 mb-2 rounded">
                  <Link href='/'>
                    <CloseRoundedIcon />Cancel
                  </Link>
                </button>
                <div className='display:flex items:center'>
                  <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <TextField
                      fullWidth
                      label="Title"
                      id="fullWidth"
                      name="blogtitle"
                      onChange={handleChange}
                    />
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
                    <div
                      className="border border-gray-300 rounded-lg p-4 mt-5 focus-within:border-blue-300"
                      style={{ maxWidth: "60%", minWidth: "85%", minHeight: "36vh" }}
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </Box>
                </div>
                <div className='mt-3 -mx-3 pl-4'>
                  <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton value="left" aria-label="left aligned">
                      <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                      <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                      <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="bold" aria-label="bold">
                      <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                      <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                      <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color" disabled>
                      <FormatColorFillIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <div style={{ marginTop: "-20px" }}>
                  <div
                    className="border border-gray-300 rounded-lg p-4 mt-5 focus-within:border-blue-300"
                    contentEditable="true"
                    style={{ maxWidth: "60%", minWidth: " 85%", minHeight: "36vh" }}
                    onInput={handleContentChange}
                    placeholder="Enter your text here..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <button onClick={postArticle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <SendIcon /> Publish
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded">
                <DraftsOutlinedIcon /> Draft
              </button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
