let cart = [];
    const productPrices = {
      "Termék 1": 1500,
      "Termék 2": 3000
    };

    // Képek színek szerint
    const productImages = {
      '1': {
        'Piros': 'https://via.placeholder.com/150/FF0000',
        'Kék': 'https://via.placeholder.com/150/0000FF',
        'Zöld': 'https://via.placeholder.com/150/008000',
        'Fekete': 'https://via.placeholder.com/150/000000',
        'Fehér': 'https://via.placeholder.com/150/FFFFFF'
      },
      '2': {
        'Piros': 'https://via.placeholder.com/150/FF0000',
        'Kék': 'https://via.placeholder.com/150/0000FF',
        'Zöld': 'https://via.placeholder.com/150/008000',
        'Fekete': 'https://via.placeholder.com/150/000000',
        'Fehér': 'https://via.placeholder.com/150/FFFFFF'
      }
    };

    // Kosár megjelenítése és elrejtése
    const cartSidebar = document.getElementById('cart-sidebar');
    const toggleCartBtn = document.getElementById('toggle-cart-btn');
    toggleCartBtn.addEventListener('click', () => {
      const isCartOpen = cartSidebar.style.right === '0px';
      cartSidebar.style.right = isCartOpen ? '-300px' : '0px';
      toggleCartBtn.textContent = isCartOpen ? 'Kosár' : 'Bezárás'; // Gomb szövegének frissítése
    });

    // Kép frissítése szín szerint
    function changeProductImage(productId, color) {
      const imageElement = document.getElementById(`product-image-${productId}`);
      imageElement.src = productImages[productId][color]; // Frissítjük a termék képét
    }

    // Termékek kosárba helyezése
    document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const size = card.querySelector('.size-select').value;
        const color = card.querySelector('.color-select').value;

        // Ellenőrizzük, hogy a termék már benne van-e a kosárban
        const existingProduct = cart.find(p => p.title === title && p.size === size && p.color === color);

        if (existingProduct) {
          // Ha létezik a termék, akkor növeljük a mennyiségét
          existingProduct.quantity++;
        } else {
          // Ha nem létezik, akkor hozzáadjuk
          const product = { title, size, color, quantity: 1, price: productPrices[title] };
          cart.push(product);
        }
        
        updateCart();
      });
    });

    // Kosár frissítése
    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const totalPriceElement = document.getElementById('total-price');
      cartItems.innerHTML = ''; // Előző kosár tartalom törlése
      let totalPrice = 0; // Teljes ár összesítése

      cart.forEach((product, index) => {
        const item = document.createElement('li');
        item.classList.add('list-group-item');

        // Termék adatai és módosítási lehetőségek
        // Ide kell a módosítás minden terméknek egyedi méret és szín választék
        item.innerHTML = `
          <div>
            <strong>${product.title}</strong> - Méret: 
            <select class="size-select" style="display: inline-block; width: auto;">
              <option value="S" ${product.size === 'S' ? 'selected' : ''}>S</option>
              <option value="M" ${product.size === 'M' ? 'selected' : ''}>M</option>
              <option value="L" ${product.size === 'L' ? 'selected' : ''}>L</option>
            </select>
            Szín: 
            <select class="color-select" onchange="updateProductColor(${index}, this.value)">
              <option value="Piros" ${product.color === 'Piros' ? 'selected' : ''}>Piros</option>
              <option value="Kék" ${product.color === 'Kék' ? 'selected' : ''}>Kék</option>
              <option value="Zöld" ${product.color === 'Zöld' ? 'selected' : ''}>Zöld</option>
              <option value="Fekete" ${product.color === 'Fekete' ? 'selected' : ''}>Fekete</option>
              <option value="Fehér" ${product.color === 'Fehér' ? 'selected' : ''}>Fehér</option>
            </select>
            Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
            <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
          </div>
        `;

        // Mennyiség változás
        item.querySelector('.quantity-input').addEventListener('change', (e) => {
          product.quantity = parseInt(e.target.value);
          updateCart(); // Frissítjük a kosarat, hogy az ár is módosuljon
        });

        // Termék eltávolítása
        item.querySelector('.remove-from-cart-btn').addEventListener('click', () => {
          cart.splice(index, 1);
          updateCart();
        });

        cartItems.appendChild(item);

        // Frissítjük a teljes árat
        totalPrice += product.price * product.quantity;
      });

      // Teljes ár kiírása
      totalPriceElement.textContent = `Összesen: ${totalPrice} Ft`;
    }

    // Kosár termék színének frissítése
    function updateProductColor(index, color) {
      cart[index].color = color; // Frissítjük a színt a kosárban
      updateCart(); // Frissítjük a kosarat
    }

    // Fizetés gombra kattintás
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("A kosár üres.");
      } else {
        let receipt = "Kosár tartalma:\n";
        cart.forEach(product => {
          receipt += `${product.title} - Méret: ${product.size}, Szín: ${product.color}, Mennyiség: ${product.quantity}, Darab ára: ${product.price} Ft, Összesen: ${product.price * product.quantity} Ft\n`;
        });
        receipt += `\n ${document.getElementById('total-price').textContent}`;

        // Kosár tartalmának nyomtatása
        const printWindow = window.open('', '', 'height=400,width=600');
        printWindow.document.write('<pre>' + receipt + '</pre>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    });