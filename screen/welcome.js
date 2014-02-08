iris.screen(
        function(self) {

            self.create = function() {
                console.log("Welcome Screen Created");
                /*registrar template*/
                self.tmpl(iris.path.welcome.html);
                /*registrar screens*/
                self.screens("screens", [
                    ["home", iris.path.home.js],
                    ["help", iris.path.help.js]
                ])
                /*screen por defecto*/
                if (!document.location.hash) {
                    iris.navigate("#/help");
                }
                /*crear screen onclick*/
                self.get("navigate_home").click(function() {
                    iris.navigate("#/home");
                })
                /*borar screen onclick*/
                self.get("destroy_home_screen").click(
                        function() {       
                            iris.navigate("#/help");//abandonar screen actual (Uncaught TypeError: Cannot call method 'canSleep' of undefined)
                            iris.destroyScreen("#/home");
                        }
                );
            };

            self.awake = function() {
                console.log("Welcome Screen Awakened");
            };

            self.sleep = function() {
                console.log("Welcome Screen Asleep"); //Never called
            };

            self.destroy = function() {
                console.log("Welcome Screen Destroyed");//Never called
            };

        },
        iris.path.welcome.js
        );