 let phoneCount = 1;

        document.getElementById('add-phone').addEventListener('click', function() {
            phoneCount++;
            const container = document.getElementById('phones-container');
            
            const phoneGroup = document.createElement('div');
            phoneGroup.className = 'phone-group';
            phoneGroup.innerHTML = `
                <label>Téléphone</label>
                <input type="tel" class="phone-input" name="telephone[]">
                <button type="button" class="remove-btn" onclick="removePhone(this)">Supprimer</button>
            `;
            
            container.appendChild(phoneGroup);
        });

        window.removePhone = function(btn) {
            const phoneGroups = document.querySelectorAll('.phone-group');
            if (phoneGroups.length > 1) {
                btn.parentElement.remove();
                phoneCount--;
            }
        };

        document.getElementById('submit-btn').addEventListener('click', function() {
            const nom = document.getElementById('nom');
            const prenom = document.getElementById('prenom');
            const phoneInputs = document.querySelectorAll('.phone-input');
            
            let isValid = true;
            const errorContainer = document.getElementById('error-container');
            errorContainer.innerHTML = '';

            nom.classList.remove('error', 'valid');
            prenom.classList.remove('error', 'valid');
            phoneInputs.forEach(input => input.classList.remove('error', 'valid'));

            if (!nom.value.trim()) {
                nom.classList.add('error');
                isValid = false;
            } else {
                nom.classList.add('valid');
            }

            if (!prenom.value.trim()) {
                prenom.classList.add('error');
                isValid = false;
            } else {
                prenom.classList.add('valid');
            }

            let hasEmptyPhone = false;
            phoneInputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    hasEmptyPhone = true;
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
            });

            if (!isValid) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Champ obligatoire !';
                errorMsg.style.marginTop = '20px';
                errorContainer.appendChild(errorMsg);
            } else {
                alert('Formulaire envoyé avec succès !');
                console.log('Nom:', nom.value);
                console.log('Prénom:', prenom.value);
                phoneInputs.forEach((input, index) => {
                    console.log(`Téléphone ${index + 1}:`, input.value);
                });
            }
        });