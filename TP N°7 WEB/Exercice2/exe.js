        document.getElementById("commentaire").addEventListener("keypress", function(e) {
            if (this.value.length >= 50) {
                e.preventDefault();
                document.getElementById("errorCommentaire").style.display = "block";
            }
        });
        function valider() {
            let errors = document.getElementsByClassName("error");
            for (let i = 0; i < errors.length; i++) {
                errors[i].style.display = "none";
            }
            
            let valide = true;
            if (document.getElementById("nom").value.trim() === "") {
                document.getElementById("errorNom").style.display = "block";
                valide = false;
            }
            if (document.getElementById("prenom").value.trim() === "") {
                document.getElementById("errorPrenom").style.display = "block";
                valide = false;
            }
            if (document.getElementById("email").value.trim() === "") {
                document.getElementById("errorEmail").style.display = "block";
                valide = false;
            }
            if (valide) {
                alert("Formulaire envoyé avec succès !");
                document.getElementById("contactForm").reset();
            }
        }