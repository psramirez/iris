iris.path = {
    welcome: {js: "./screen/welcome.js", html: "./screen/welcome.html"},
    /*screens*/
    home: {js: "./screen/home.js", html: "./screen/home.html"},
        inner_home: {js: "./screen/inner_home.js", html: "./screen/inner_home.html"},
    help: {js: "./screen/help.js", html: "./screen/help.html"},
    
    /*uis*/
    my_ui: {js: "./ui/my_ui.js", html: "./ui/my_ui.html"},
        inner_ui: {js: "./ui/inner_ui.js", html: "./ui/inner_ui.html"}
};


$(document).ready(
    function () {
        iris.baseUri("./"); 
        iris.welcome(iris.path.welcome.js);
    }
);

