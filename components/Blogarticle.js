import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Suspense } from 'react';
import { useUserInfo } from './UserInfoContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
function BlogArticle() {
    const userInfo = useUserInfo();
    console.log(userInfo)
    const [allPosts, setAllPosts] = React.useState([]);
    const [AllPost, setAllPost] = useState("");

    // Function to truncate text to a certain number of words
    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        return words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
    };


    const loremIpsumText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";



    // get the post 

    useEffect(() => {
        // Fetch all posts when the component mounts
        axios.get('http://localhost:3000/api/GetAllPosts')
            .then(response => {
                setAllPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []); // Empty dependency array means this effect runs once on mount

 
    return (
        <>   <div className="flex flex-col md:flex-row p-6 bg-gray-100">
           
          <div className="md:max-w-4xl md:w-4/5 p-6 bg-white md:mr-6 md:mb-0 mb-4">
  
                {allPosts.map(item => (
                   
                        <Card className="p-2 mt-3 border-t-2 border-b-2">


                            <img
                                src={`data:image/jpeg;base64,${item.blgIMG_64}`}

                                alt="Image for Blog Article 1"
                                className="w-full md:w-1/2 mb-4 rounded-md"
                                style={{ height: 'auto' }}
                            />
                             
                            <CardContent>
                                <h1 className="text-2xl font-bold mb-4">{item.blogtitle}</h1>
                                <p className="text-gray-700" id='blogdiscription'>
                                {item.blogdescription}
                                </p>


                            </CardContent>
                        </Card>
                   
                ))}

            </div>

            <div className="md:max-w-lg md:w-1/5 p-6 bg-white shadow-md md:mb-0 hidden md:block  ">

                {allPosts.map(item => (
                    <Card key={item.id} className="p-2 ">
                        <img
                            src={`data:image/jpeg;base64,${item.blgIMG_64}`}
                            alt="Image for Blog Article 2"
                            className="mb-4 rounded-md"
                        />
                        <CardContent>
                            <h1 className="text-2xl font-bold mb-4">{item.blogtitle}</h1>

                            <p className="text-gray-700" id='blogdiscription'>
                               {item.blogdescription}

                            </p>
                        </CardContent>
                    </Card>
                ))}


            </div>
        </div>
        </>
 
    );
}

export default BlogArticle;
