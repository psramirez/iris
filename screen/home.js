iris.screen(
        function(self) {
            var my_ui_number = 0;
            self.create = function() {
                console.log("Home Screen Created");
                self.tmpl(iris.path.home.html);
                self.screens("inner_home_container", [
                    ["inner_home", iris.path.inner_home.js]
                ])

                /*EVENTOS*/
                iris.on("MY_UI_CREATED_event", fn_my_uiCreatedEvent);


                /*crear ui automaticamente*/
                my_ui = self.ui("ui_container", iris.path.my_ui.js);

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

                /*Aumentar contador*/
                function fn_my_uiCreatedEvent() {
                    my_ui_number++;
                    self.get("my_ui_number").html(my_ui_number);
                }
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