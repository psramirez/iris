iris.path = {
    welcome: {js: "./screen/welcome.js", html: "./screen/welcome.html"}

};


$(document).ready(
    function () {
        iris.baseUri("./"); 
        iris.welcome(iris.path.welcome.js);
    }
);

