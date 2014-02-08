iris.path = {
    welcome: {js: "./screen/welcome.js", html: "./screen/welcome.html"},
    home: {js: "./screen/home.js", html: "./screen/home.html"},
        inner_home: {js: "./screen/inner_home.js", html: "./screen/inner_home.html"},
    help: {js: "./screen/help.js", html: "./screen/help.html"}

};


$(document).ready(
    function () {
        iris.baseUri("./"); 
        iris.welcome(iris.path.welcome.js);
    }
);

