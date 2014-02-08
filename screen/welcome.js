iris.screen(

    function (self) {

        self.create = function () {
            console.log("Welcome Screen Created");
            /*registrar template*/
            self.tmpl(iris.path.welcome.html);
            /*registrar screens*/
            self.screens("screens",[
                ["home",iris.path.home.js],
                ["help",iris.path.help.js]
            ])
            /*screen por defecto*/
            if(!document.location.hash){
                iris.navigate("#/home");
            }
            
            self.get("navigate_home").click(function(){
                iris.navigate("#/home");
            })
        };

        self.awake = function () {
            console.log("Welcome Screen Awakened");
        };

        self.sleep = function () {
            console.log("Welcome Screen Asleep"); //Never called
        };

        self.destroy = function () {
            console.log("Welcome Screen Destroyed");//Never called
        };

    },
    iris.path.welcome.js  
 );