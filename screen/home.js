iris.screen(
        function(self) {
            self.create = function() {
                console.log("Home Screen Created");
                self.tmpl(iris.path.home.html);
                self.screens("inner_home_container", [
                    ["inner_home", iris.path.inner_home.js]
                ])
                /*evento cargar ui*/
                self.get("my_ui_loader").click(
                        function() {
                            my_ui = self.ui("ui_container", iris.path.my_ui.js);
                        }
                );
                /*destruir ultimi ui*/
                self.get("destroy_my_ui").click(
                        function() {
                            if (my_ui != null) {
                                self.destroyUI(my_ui);
                            }
                        }
                );
                
                /*destruir todos los uis*/
                self.get("destroy_all_uis").click(
                        function() {                  
                                self.destroyUIs("ui_container");
                            
                        }
                );
            };
            self.awake = function() {
                console.log("Home Screen Awakened");
            };

            self.sleep = function() {
                console.log("Home Screen Asleep");
            };

            self.destroy = function() {
                console.log("Home Screen Destroyed");
            };
        },
        iris.path.home.js
        );