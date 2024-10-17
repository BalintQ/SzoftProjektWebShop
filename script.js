let cart = [];
const productPrices = {
  "Air Jordan 1 Low": 39990,
  "Termék 2": 3000
};

// Képek színek szerint
const productImages = {
  '1': {
    'Arany-Fehér': './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW arany_feher.jfif',
    'Fehér-Fekete': './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW feher fekete.png',
    'Fehér': './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW feher.png',
    'Fehér-Kék': './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW feher_kek.jfif',
    'Fekete': './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW fekete.png',
    'Fekete-Kék' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW fekete_kek.jfif',
    'Kék' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW kek.jfif',
    'Kék-Fehér' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW kek_feher.jfif',
    'Piros-Fekete' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW piros_fekete.jfif',
    'Sötétzöld' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW sotetzold.jfif',
    'Szürke-Fehér' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW szurke_feher.jfif',
    'Szürke-Piros' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW szurke_piros.png',
    'Zöld-Fekete-Fehér' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOW zold_fekte_feher.png',
    'Fekete-Fehér-Kék' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOWfekete_feher_kek.jfif',
    'Plüssmintás Zöld' : './Kepek/alacsonyszaru/ferfi/AIR JORDAN 1 LOWplussmintas zold.jfif',
  },
  '2': {
    'Piros': 'https://via.placeholder.com/150/FF0000',
    'Kék': 'https://via.placeholder.com/150/0000FF',
    'Zöld': 'https://via.placeholder.com/150/008000',
    'Fekete': 'https://via.placeholder.com/150/000000',
    'Fehér': 'https://via.placeholder.com/150/FFFFFF',
    'Lila': 'https://via.placeholder.com/150/800080'
  }
};

// Kosár megjelenítése és elrejtése
const cartSidebar = document.getElementById('cart-sidebar');
const toggleCartBtn = document.getElementById('toggle-cart-btn');
toggleCartBtn.addEventListener('click', () => {
  const isCartOpen = cartSidebar.style.right === '0px';
  cartSidebar.style.right = isCartOpen ? '-300px' : '0px';
  toggleCartBtn.textContent = isCartOpen ? 'Kosár' : 'Bezárás';
});

// Kép frissítése szín szerint
function changeProductImage(productId, color) {
  const imageElement = document.getElementById(`product-image-${productId}`);
  imageElement.src = productImages[productId][color];
}

// Termékek kosárba helyezése
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const size = card.querySelector('.size-select').value;
    const color = card.querySelector('.color-select').value;

    const existingProduct = cart.find(p => p.title === title && p.size === size && p.color === color);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
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
  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach((product, index) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');

    if (product.title === 'Air Jordan 1 Low') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="38" ${product.size === '38' ? 'selected' : ''}>38</option>
            <option value="39" ${product.size === '39' ? 'selected' : ''}>39</option>
            <option value="40" ${product.size === '40' ? 'selected' : ''}>40</option>
            <option value="41" ${product.size === '41' ? 'selected' : ''}>41</option>
            <option value="42" ${product.size === '42' ? 'selected' : ''}>42</option>
          </select> <br>
          Szín: 
          <select class="color-select" onchange="updateProductColor(${index}, this.value)">
            <option value="Arany-Fehér" ${product.color === 'Arany-Fehér' ? 'selected' : ''}>Arany-Fehér</option>
            <option value="Fehér-Fekete" ${product.color === 'Fehér-Fekete' ? 'selected' : ''}>Fehér-Fekete</option>
            <option value="Fehér" ${product.color === 'Fehér' ? 'selected' : ''}>Fehér</option>
            <option value="Fehér-Kék" ${product.color === 'Fehér-Kék' ? 'selected' : ''}>Fehér-Kék</option>
            <option value="Fekete" ${product.color === 'Fekete' ? 'selected' : ''}>Fekete</option>
            <option value="Fekete-Kék" ${product.color === 'Fekete-Kék' ? 'selected' : ''}>Fekete-Kék</option>
            <option value="Kék" ${product.color === 'Kék' ? 'selected' : ''}>Kék</option>
            <option value="Kék-Fehér" ${product.color === 'Kék-Fehér' ? 'selected' : ''}>Kék-Fehér</option>
            <option value="Piros-Fekete" ${product.color === 'Piros-Fekete' ? 'selected' : ''}>Piros-Fekete</option>
            <option value="Sötétzöld" ${product.color === 'Sötétzöld' ? 'selected' : ''}>Sötétzöld</option>
            <option value="Szürke-Fehér" ${product.color === 'Szürke-Fehér' ? 'selected' : ''}>Szürke-Fehér</option>
            <option value="Szürke-Piros" ${product.color === 'Szürke-Piros' ? 'selected' : ''}>Szürke-Piros</option>
            <option value="Zöld-Fekete-Fehér" ${product.color === 'Zöld-Fekete-Fehér' ? 'selected' : ''}>Zöld-Fekete-Fehér</option>
            <option value="Fekete-Fehér-Kék" ${product.color === 'Fekete-Fehér-Kék' ? 'selected' : ''}>Fekete-Fehér-Kék</option>
            <option value="Plüssmintás Zöld" ${product.color === 'Plüssmintás Zöld' ? 'selected' : ''}>Plüssmintás Zöld</option>
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    if (product.title === 'Termék 2') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="40" ${product.size === '40' ? 'selected' : ''}>40</option>
            <option value="41" ${product.size === '41' ? 'selected' : ''}>41</option>
            <option value="42" ${product.size === '42' ? 'selected' : ''}>42</option>
            <option value="43" ${product.size === '43' ? 'selected' : ''}>43</option>
            <option value="44" ${product.size === '44' ? 'selected' : ''}>44</option>
            <option value="45" ${product.size === '45' ? 'selected' : ''}>45</option>
          </select> <br>
          Szín: 
          <select class="color-select" onchange="updateProductColor(${index}, this.value)">
            <option value="Piros" ${product.color === 'Piros' ? 'selected' : ''}>Piros</option>
            <option value="Kék" ${product.color === 'Kék' ? 'selected' : ''}>Kék</option>
            <option value="Zöld" ${product.color === 'Zöld' ? 'selected' : ''}>Zöld</option>
            <option value="Fehér" ${product.color === 'Fehér' ? 'selected' : ''}>Fehér</option>
            <option value="Lila" ${product.color === 'Lila' ? 'selected' : ''}>Lila</option>
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    // Mennyiség változás
    item.querySelector('.quantity-input').addEventListener('change', (e) => {
      product.quantity = parseInt(e.target.value);
      updateCart();
    });

    // Termék eltávolítása
    item.querySelector('.remove-from-cart-btn').addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    cartItems.appendChild(item);
    totalPrice += product.price * product.quantity;
  });

  totalPriceElement.textContent = `Összesen: ${totalPrice} Ft`;
}

// Kosár termék színének frissítése
function updateProductColor(index, color) {
  cart[index].color = color;
  updateCart();
}

// Szűrők frissítése
function filterProducts() {
  const nem = document.getElementById('nem').value;
  const kategoria = document.getElementById('kategoria').value;
  const cards = document.querySelectorAll('.card');
  const productContainer = document.querySelector('.col-md-4'); // A szülő div
  console.log( "nem ,",nem)
  console.log( "kat,",kategoria)
  console.log( "card ,",cards)
  console.log( "cont ,",productContainer)

  cards.forEach(card => {
      const productNem = card.dataset.nem;
      const productKategoria = card.dataset.kategoria;

      const matchesNem = nem == 'all' || productNem == nem;
      const matchesKategoria = kategoria == 'all' || productKategoria == kategoria;
      
      if (matchesNem && matchesKategoria) {
          productContainer.classList.remove('d-none');
          productContainer.classList.add('col-md-4');
      } else {
          productContainer.classList.add('d-none');
          productContainer.classList.remove('col-md-4');
      }
  });

}


// Szűrő események
document.getElementById('nem').addEventListener('change', filterProducts);
document.getElementById('kategoria').addEventListener('change', filterProducts);

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

    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<pre>' + receipt + '</pre>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
});
