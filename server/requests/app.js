const express = require('express');
const app = express();
const axios = require('axios');
const bodyPareser = require('body-parser');
const cors = require('cors');
const KEY = '19c35e4ad3b54f4faae2dfc9b75ea8f7';
const port = '5000';

let users = [
    {"name": "Vlad", "email": "kalit@com.ua", "password": "1111", "phone": "380933312313"},
    {"name": "USERADMIN", "email": "USERADMIN@com.ua", "password": "Testing1", "phone": "380977777777"},
];
let news = [];

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: true}));
app.use(cors());

app.get('/news', (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`)
        .then(response => {
            return response.data.articles
        })
        .then(data => {
            return data.map((item, index) => {
                return {
                    author: item.author,
                    text: item.title,
                    bigText: item.description,
                    comments: [],
                    status: false,
                    like: Math.round(5 + Math.random() * (100 - 5))
                }
            });
        })
        .then(data => {
            if (news.length === 0) news.push(...data);
            res.send(news);
        })
        .catch(error => {
            console.log(error);
        });
    console.log('GET NEWS');
});

app.get('/users', (req, res) => {
    res.send(users);
    console.log('GET USERS');
});

app.post('/users', (req, res) => {
    users.push({...req.body});
    res.send(req.body);
    console.log('SIGN UP USER');
});

app.post('/news', (req, res) => {
    news.unshift({...req.body});
    res.send(req.body);
    console.log('ADD NEWS');
});

app.put('/news/:index', (req, res) => {
    news.map((article, index) => {
        if (index === +req.params.index.slice(1)) {
            return article.comments.push({
                user: req.body.user,
                comment: req.body.msg
            });
        }
        return article
    });
    res.sendStatus(200);
    console.log('ADD COMMENT BY ' + req.body.user);
});


//update data
app.put('/users/:name', (req, res) => {
    let user = users.find((user) => {
        return user.name === req.params.name
    });
    user.email = req.body.email;
    user.password = req.body.password;
    user.phone = req.body.phone;
    res.sendStatus(200);
    console.log('CHANGE DATA BY ' + req.params.name.toUpperCase());
});

//delete data
app.delete('/users/:name', (req, res) => {
    users = users.filter((user) => {
        return user.name !== req.params.name;
    });
    res.sendStatus(200);
    console.log('DELETE USER ' + req.params.name.toUpperCase());
});


app.listen(port, () => console.log(`listening on port ${port}`));