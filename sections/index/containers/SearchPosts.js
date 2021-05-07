import axios from 'axios';
import React, {useState, useEffect} from 'react'

function SearchPosts() {
    const [searched, setSearched] = useState(''); //state del input del usuario
    const [posts, setPosts] = useState([]); //los posts con id6 traidos de la api
    const [postsToRender, setPostsToRender] = useState([]);
    const [infoUsers, setInfoUsers] = useState([]); //state de la informacion del usuario

    const postsFounded = [];

    const MIN_LENGTH_STRING_SEARCH = 4;

    useEffect(() => {
        axios.get(`api/traerbonus`) //El backend se encarga de filtrar los posts del usuario
                .then(function (response) {
                    setPosts(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearched(e.target.value);
        if(e.target.value.length > MIN_LENGTH_STRING_SEARCH) {
            searchPosts();
        }
    }

    const searchPosts = () => {
        for(let i=0; i < posts.length; i++) {
            //includes() permite chequear si el post contiene la palabra buscada
            if(posts[i].title.includes(searched))
                postsFounded.push(posts[i]);
        }
        setPostsToRender(postsFounded);

        getUserInfo();

    }

    const getUserInfo = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${postsFounded[0].userId}`)
            .then(response => {
                setInfoUsers(response.data)
        });
    }

    return (
            
        <div className="flex-container">
            <input onChange={handleInput} type="text" />
            {postsToRender.map((item, i) => (
            <div key={i}>
                <h2 key={item.id}>{item.title}</h2>
                <h2 key={i}>Nombre: {infoUsers.name}</h2>
                <h2 key={i+1}>Email: {infoUsers.email}</h2>
            </div>
            
            ))}
            <style jsx>
            {`
                .list {
                    font-size: 18px;
                }
                input {
                    display: block;
                    width: 40%;
                    margin: auto auto 20px auto;
                    border: 2px solid;
                }
                h2 {
                    color: #000000;
                }
                .flex-container div {
                    width: 250px;
                    margin: 10px;
                    text-align: center;
                    border: 2px solid black;
                }
                
            `}
            </style>
        </div>
    )
}

export default SearchPosts