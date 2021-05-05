const request = require('request');
const axios = require('axios');

    function getUsuarios (req, res) {
        
        const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let number = 0;;
                const usersRequired = [4];
                //4 lugares disponibles en el Array, que seran ocupados por usuarios de id=6
                for(let i=0; i < response.data.length; i++) {
                    if(number < 4 && response.data[i].userId == 6) {
                        usersRequired[number] = response.data[i];
                        number++;
                    }
                }
                console.log(usersRequired);
                res.json(usersRequired);
            })
            .catch(error => {
                console.log(error);
            });

        return promise;
    }


        //Otra forma de hacerlo, guardando mas relacion con las otras APIS ya hechas 

        /*function getUsuarios (req, res) {
            getAllUsers()
            .then(response => {
                console.log(response.data);
                res.json(response.data);
            })
            .catch(err => {
                console.log(err)
                res.status(500).end()
            })
            
        }



        function getAllUsers () {
            return new Promise(function(resolve, reject) {
                request({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    json: true
                }, function (error, response) {
                    if (!error && response.statusCode === 200) {
                        resolve(response.data)
                    }
                    else {
                        reject(error || response.statusCode);
                    }

                })
            })
        }*/

module.exports = { getUsuarios } 