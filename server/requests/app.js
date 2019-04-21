const express = require('express');
const app = express();
const axios = require('axios');
const bodyPareser = require('body-parser');
const cors = require('cors');
const KEY = '19c35e4ad3b54f4faae2dfc9b75ea8f7';
const port = 5000;

let users = [{"name": "Vlad", "email": "kalit@com.ua", "password": "1111", "phone": "380933312313"}];
let news = [];

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: true}));
app.use(cors());


//GET NEWS
app.get('/news', cors(), (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`)
        .then(response => {
            return response.data.articles
        })
        .then(data => {
            return data.map((item) => {
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


//GET USERS
app.get('/users', cors(), (req, res) => {
    res.send(users);
    console.log('GET USERS');
});


//ADD USERS
app.post('/users', cors(), (req, res) => {
    users.push({...req.body});
    res.send(req.body);
    console.log('SIGN UP USER');
});


//ADD NEWS
app.post('/news', cors(), (req, res) => {
    news.unshift({...req.body});
    res.send(req.body);
    console.log('ADD NEWS');
});


//ADD COMMENTS
app.put('/news/:index', cors(), (req, res) => {
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


//UPDATE USER'S DATA
app.put('/users/:name', cors(), (req, res) => {
    let user = users.find((user) => {
        return user.name === req.params.name
    });

    const responce = (type, name) => {
        res.sendStatus(200);
        console.log(`CHANGE ${(type).toUpperCase()} BY ${name.toUpperCase()}`);
    };

    switch (req.body.type) {
        case "phone":
            user.phone = req.body.phone;
            responce(req.body.type, req.params.name);
            return users;
        case "password":
            user.password = req.body.password;
            responce(req.body.type, req.params.name);
            return users;
        case "email":
            user.email = req.body.email;
            responce(req.body.type, req.params.name);
            return users;
        default:
            return null
    }
});


//DELETE USERS
app.delete('/users/:name', cors(), (req, res) => {
    users = users.filter((user) => {
        return user.name !== req.params.name;
    });
    res.sendStatus(200);
    console.log('DELETE USER ' + req.params.name.toUpperCase());
});


app.listen(port, () => console.log(`app is listening on port ${port}`));