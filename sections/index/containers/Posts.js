import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import SearchPosts from './SearchPosts';


function Posts(props) {
        const [data, setData] = useState([]); //Por default es un array vacio para evitar errores al renderizar
        
        useEffect(() => {
        fetch('api/traerposts')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        }, []);

        //Con flex-container tenemos acceso a todas las opciones flex dentro de ese div
        return (
        <div className="flex-container">
            {data.map((item, i) => (
            <div key={i}>
                <h2 className="title" key={item.id}>{item.title}</h2>
                <p className="body" key={i}>{item.body}</p>
            </div>
            ))}
            <SearchPosts infoPosts={data}/>

            <style jsx>
                {`
                    .flex-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        padding: 10px;
                    }

                    .flex-container div {
                        width: 250px;
                        margin: 10px;
                        text-align: center;
                        border: 2px solid black;
                    }

                    .title {
                        color: #000000;
                        font-size: 18px;
                        margin-bottom: 10px;
                    }

                    .body {
                        color: #000000;
                        font-size: 18px;
                    }
                        
                `}
            </style>
        </div>
        );
}

    // Version hecha con class de Users.js, más fiel a los otros componentes de la app

/*class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

    }


    componentDidMount() {
        fetch(`api/traerusuarios`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({data: data});
            })
            .catch((err) => {
                console.log(err)
            });
    }

        render() {
            return(
                <div className="flex-container">
                    {this.state.data.map((item, i) => (
                    <div key={i}>
                        <h2 className="title" key={item.id}>{item.title}</h2>
                        <p className="body" key={i}>{item.body}</p>
                </div>
                ))}
                
            )
        }

}*/

export default Posts