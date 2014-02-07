iris.path = {
    welcome: {js: "welcome.js", html: "welcome.html"}
};


$(document).ready(
    function () {
        iris.baseUri("./"); 
        iris.welcome(iris.path.welcome.js);
    }
);

