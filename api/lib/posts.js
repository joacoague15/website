const request = require('request');
const axios = require('axios');

        function getPosts (req, res) {
            getAllPosts()
            .then(response => {
                
                const postsRequired = [];
                for (let i=0; i < response.length; i++) {
                    if(postsRequired.length >= 4)
                        break; //Para limitar a 4 posts
                    if(response[i].userId == 6)
                        postsRequired.push(response[i]);
                }

                res.json(postsRequired);

            })
            .catch(err => {
                console.log(err)
                res.status(500).end()
            })
            
        }



        function getAllPosts () {
            return new Promise(function(resolve, reject) {
                request({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    json: true
                }, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        resolve(body)
                    }
                    else {
                        console.log(error)
                        reject(error || response.statusCode);
                    }

                })
            })
        }

module.exports = { getPosts } 

//function getPosts (req, res) {
        
        /*const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let number = 0;
                const postsRequired = [4];
                //4 lugares disponibles en el Array, que seran ocupados por posts de id=6
                for(let i=0; i < response.data.length; i++) {
                    if(number < 4 && response.data[i].userId == 6) {
                        postsRequired[number] = response.data[i];
                        number++;
                    }
                }
                console.log(postsRequired);
                res.json(postsRequired);
            })
            .catch(error => {
                console.log(error);
            });

        return promise;*/


        //Otra forma de hacerlo, guardando mas relacion con las otras APIS ya hechas 