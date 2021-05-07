const request = require('request');
const axios = require('axios');

        function getOnlyUserPosts (req, res) {
            getAllPosts()
            .then(response => {
                
                const postsRequired = [];
                for (let i=0; i < response.length; i++) {
                    if(response[i].userId == 6)
                        //postsRequired son aquellos posts de id 6
                        postsRequired.push(response[i])
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

module.exports = { getOnlyUserPosts } 

