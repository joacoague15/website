import axios from 'axios';
import React, {useState} from 'react'

function SearchPosts(props) {
    const [searched, setSearched] = useState('');
    const [postFound, setPostFound] = useState([]);
    const [info, setInfo] = useState([]);

    const MIN_LENGTH_STRING_SEARCH = 4;

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearched(e.target.value);
        if(e.target.value.length > MIN_LENGTH_STRING_SEARCH) {
            searchPosts();
        }
    }

    const searchPosts = () => {
            //includes() chequea si el input buscado esta en algun titulo
            for (let i=0; i < props.infoPosts.length; i++) {
                if (props.infoPosts[i].title.includes(searched)) {
                    console.log("Se encontro el titulo!");
                    setPostFound(props.infoPosts[i]);
                    console.log(postFound);
                }
                else {
                    console.log("No se encontro el post todavia...")
                }
            }

    }

    return (
        <div>
            <input onChange={handleInput} type="text" />
            <style jsx>
            {`
                .list {
                    font-size: 18px;
                }
            `}
            </style>
        </div>
    )
}

export default SearchPosts