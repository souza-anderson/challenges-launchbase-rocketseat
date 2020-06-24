const express = require('express');
const nunjucks = require('nunjucks');
const courses = require('./data');

const server = express();

server.set("view engine", "njk");

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {

    const about = {
        image: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
        title1: "Rocketseat",
        title2: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa. Mais informações confira em <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
        technologies: ["React", "NodeJS", "ReactNative"],
        links: [
            {
                url: "https://github.com/rocketseat",
                name: "Github"
            },
            {
                url: "https://www.instagram.com/rocketseat_oficial/",
                name: "Instagram"
            },
            {
                url: "https://www.facebook.com/rocketseat",
                name: "Facebook"
            }
        ]
    }


    return res.render("about", { about });
});

server.get("/courses", function(req, res) {
    return res.render("courses", { items: courses });
})

server.listen(5000, function() {
    console.log('server is running');
});

