const request = require('request');

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
