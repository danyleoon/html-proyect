document.getElementById("form").addEventListener("submit",
            function(event){
                event.preventDefault(); 
                alert("Formulario enviado");
                this.reset();
            }
        )