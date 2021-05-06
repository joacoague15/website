import axios from 'axios';
import React, {useState} from 'react'

function SearchForUsers(props) {
    const [searched, setSearched] = useState('');
    const [infoUser, setInfoUser] = useState([]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearched(e.target.value);
        if(e.target.value.length > 4) {
            searchUsers();
        }
    }

    const searchUsers = () => {
            //includes() chequea si el input buscado esta en algun titulo
            for (let i=0; i < props.infoUsers.length; i++) {
                if (props.infoUsers[i].title.includes(searched)) {
                    console.log("Se encontro el post!");
                    setPostFound(props.infoUsers[i]);
                    //El id esta hecho asi porque el json de usuarios solo llega hasta el id 10
                    axios.get(`https://jsonplaceholder.typicode.com/users/${i+1}`)
                    .then(response => {
                        //Esta respuesta tiene todos los datos, yo elegi renderizar name-username-email
                        setInfoUser(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }
                else {
                    console.log("No se encontro el post todavia...")
                }
            }

    }

    return (
        <div>
            <input onChange={handleInput} type="text" />
            <ul>
                <li className="list">{infoUser.name}</li>
                <li className="list">{infoUser.username}</li>
                <li className="list">{infoUser.email}</li>
            </ul>
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

export default SearchForUsers