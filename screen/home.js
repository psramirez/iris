iris.screen(
    function (self) {
        self.create = function () {   
            console.log("Home Screen Created");
            self.tmpl(iris.path.home.html);
        };
        self.awake = function () {   
            console.log("Home Screen Awakened");
        };

        self.sleep = function () {
            console.log("Home Screen Asleep");
        };

        self.destroy = function () {
            console.log("Home Screen Destroyed");
        };
    },
    iris.path.home.js
);