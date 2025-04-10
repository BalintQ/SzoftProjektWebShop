    // Az űrlap kezelése
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Megakadályozzuk, hogy az űrlap ténylegesen elküldődjön
  
        // Űrlap értékek
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        // Validálás (egyszerű példaként)
        if (name === "" || email === "" || message === "") {
          document.getElementById('error-message').style.display = 'block';
          document.getElementById('success-message').style.display = 'none';
        } else {
          // Üzenet elküldése (csak vizuális visszajelzés)
          document.getElementById('success-message').style.display = 'block';
          document.getElementById('error-message').style.display = 'none';
  
          // Üzenet a konzolban (a valódi backend elküldés helyett)
          console.log("Név:", name);
          console.log("Email:", email);
          console.log("Üzenet:", message);
        }
  
        // Űrlap törlése
        document.getElementById('contact-form').reset();
      });