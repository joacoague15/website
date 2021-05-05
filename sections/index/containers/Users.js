import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';


function Users() {
        const [data, setData] = useState([]);

        useEffect(() => {
        fetch(`api/traerusuarios`)
            .then((res) => res.json())
            .then((data) => {
            setData(data);
            })
            .catch((err) => {
            console.log(err);
            });
        }, []);

        return (
        <div className="flex-container">
            {data.map((item, i) => (
            <div key={i}>
                <h2 className="title" key={item.id}>{item.title}</h2>
                <p className="body" key={i}>{item.body}</p>
            </div>
            ))}

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

/*class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            info: [],
        };

    }


    async componentDidMount() {
        axios.get(`api/traerusuarios`)
            .then((res) => {
                console.log(response)
                this.setState({info: response});
            })
            .catch(error => {
                console.log(error);
            })

    }

        render() {
            return(
                <div className="flex-container">
                    {this.state.info.map((item) => (
                        <h1>{item.title}</h1>
                    ))}
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
            )
        }

}*/

export default Users