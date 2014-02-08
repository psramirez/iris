iris.ui(
        function(self) {
            function updateDiv(text) {
                self.get("name_div").text(text);
            }

            self.create = function() {
                console.log("my_ui UI Created");
                self.tmplMode(self.APPEND);/*no borrar contenedor padre*/
                self.tmpl(iris.path.my_ui.html);
                /*crear ui hijo automaticamente*/
                self.ui("inner_ui_container", iris.path.inner_ui.js);
                self.on("text_changed", updateDiv);
                
                /*EVENTOS*/
                var input = self.get("name_input");
                input.keyup(function() {
                    self.notify("text_changed", input.val());//crea un evento text_changed                    
                });
            };
            self.awake = function() {
                console.log("my_ui UI Awakened");
            };
            self.sleep = function() {
                console.log("my_ui UI Asleep");
            };

            self.destroy = function() {
                console.log("my_ui UI Destroyed");
            };
        },
        iris.path.my_ui.js
        );