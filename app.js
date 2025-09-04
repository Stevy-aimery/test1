const form = document.createElement('form');
form.innerHTML = `
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name" required />
    <br/>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <br/>
    <button type="submit">Envoyer</button>
`;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    alert(`Nom: ${name}\nEmail: ${email}`);
});

document.body.appendChild(form);