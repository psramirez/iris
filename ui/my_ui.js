iris.ui(
    function (self) {
        self.create = function () {
            console.log("my_ui UI Created");
            self.tmplMode(self.APPEND);/*no borrar contenedor padre*/
            self.tmpl(iris.path.my_ui.html);
            /*crear ui hijo automaticamente*/
            self.ui("inner_ui_container", iris.path.inner_ui.js);
        };
        self.awake = function () {   
            console.log("my_ui UI Awakened");
        };
        self.sleep = function () {
            console.log("my_ui UI Asleep");
        };

        self.destroy = function () {
            console.log("my_ui UI Destroyed");
        };
    },
    iris.path.my_ui.js
);