let cart = [];
const productPrices = {
  "Air Jordan 1 Low Férfi": 39990,
  "Air Jordan 1 Low Női": 35999,
  "Air Jordan 1 Mid Férfi": 49999,
  "Air Jordan 1 Mid Női": 41500,
  "Air Jordan 1 High Férfi": 43499,
  "Air Jordan 1 High Női": 40000,
};

//szűrő meg jelenít
const toggleButton = document.getElementById('szurob');
const filterDiv = document.getElementById('szuro');

toggleButton.addEventListener('click', function() {
    if (filterDiv.classList.contains('hidden')) {
        filterDiv.classList.remove('hidden');
        filterDiv.classList.add('show');
    } else {
        filterDiv.classList.remove('show');
        filterDiv.classList.add('hidden');
    }
});



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
    'Barna': './Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW barna.jfif',
    'Barna-Fekete': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW barna_fekete.jfif',
    'Bőszínű': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW borszinu.jfif',
    'Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW feher.png',
    'Fekete': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW fekete.jfif',
    'Fekete-Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW fekete_feher.jfif',
    'Fekete-Kék': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW fekete_kek.jfif',
    'Kék-Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW kek_feher.jfif',
    'Lila-Rózsaszín': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW lila_rozsaszin.jfif',
    'Rózsaszín': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW rozsaszin.jfif',
    'Rózsaszín-Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW rozsaszin_feher.jfif',
    'Vérvörös': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW vervoros.png',
    'Világoskék': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOW vilagoskek.jfif',
    'Magenta': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOWmagenta.jfif',
    'Szürke-Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOWszurke_feher.jfif',
    'Zöld-Fehér': 'Kepek/alacsonyszaru/noi/AIR JORDAN 1 LOWzold_feher.jfif',


  },

'3': {
  'Barna': 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID barna.jfif',
  'Fehér-Fekete': 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID feher_feher.png',
  'Fehér-Kék': 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID feher_kek.png',
  'Fehér-Neonzöld': 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID feher_neonzold.png',
  'Szürke-Fekete': 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID szurke_fekete.png',
  'Vérvörös' : 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID vervoros.png',
  'Zöld' : 'Kepek/kozepmagasszaru/ferfi/AIR JORDAN 1 MID zold.jfif',
},

'4': {
  'Barna-Rózsaszín': 'Kepek/kozepmagasszaru/noi/AIR JORDAN 1 MID barna_rozsaszin.jfif',
  'Mentazöld': 'Kepek/kozepmagasszaru/noi/AIR JORDAN 1 MID mentazold.jfif',
  'Vajszínű': 'Kepek/kozepmagasszaru/noi/AIR JORDAN 1 MID vajszinu.png',
  'Vérvörös' : 'Kepek/kozepmagasszaru/noi/AIR JORDAN 1 MID vervoros.png',
  'Zöld' : 'Kepek/kozepmagasszaru/noi/AIR JORDAN 1 MID zold.jfif',
},

'5': {
  'Fehér-Zöld': 'Kepek/magasszaru/ferfi/AIR JORDAN 1 HIGH feher_zold.jfif',
  'Kék-Fekete': 'Kepek/magasszaru/ferfi/AIR JORDAN 1 HIGH kek_fekete.jfif',
  'Terepmintás': 'Kepek/magasszaru/ferfi/AIR JORDAN 1 HIGH terepmintas.jfif',
  'Világosbarna' : 'Kepek/magasszaru/ferfi/AIR JORDAN 1 HIGH vilagosbarna.jfif',
},


'6': {
  'Világosbarna': 'Kepek/magasszaru/noi/AIR JORDAN 1 HIGH vilagosbarna.jfif',
  'Világosbarna-rózsaszín': 'Kepek/magasszaru/noi/AIR JORDAN 1 HIGHvilagosbarna_rozsaszin.jfif',
  'Zöld-sárga': 'Kepek/magasszaru/noi/AIR JORDAN 1 HIGHzold_sarga.jfif/',
},
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

    if (product.title === 'Air Jordan 1 Low Férfi') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="38" ${product.size === '38' ? 'selected' : ''}>38</option>
            <option value="39" ${product.size === '39' ? 'selected' : ''}>39</option>
            <option value="40" ${product.size === '40' ? 'selected' : ''}>40</option>
            <option value="41" ${product.size === '41' ? 'selected' : ''}>41</option>
            <option value="42" ${product.size === '42' ? 'selected' : ''}>42</option>
            <option value="43" ${product.size === '43' ? 'selected' : ''}>43</option>
            <option value="44" ${product.size === '44' ? 'selected' : ''}>44</option>
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

    if (product.title === 'Air Jordan 1 Low Női') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="35" ${product.size === '35' ? 'selected' : ''}>35</option>
            <option value="36" ${product.size === '36' ? 'selected' : ''}>36</option>
            <option value="37" ${product.size === '37' ? 'selected' : ''}>37</option>
            <option value="38" ${product.size === '38' ? 'selected' : ''}>38</option>
            <option value="39" ${product.size === '39' ? 'selected' : ''}>39</option>
            <option value="40" ${product.size === '40' ? 'selected' : ''}>40</option>
          </select> <br>
          Szín: 
          <select class="color-select" onchange="updateProductColor(${index}, this.value)">
            <option value="Barna" ${product.color === 'Barna' ? 'selected' : ''}>Barna</option>
            <option value="Barna-Fekete" ${product.color === 'Barna-Fekete' ? 'selected' : ''}>Barna-Fekete</option>
            <option value="Bőrszínű" ${product.color === 'Bőrszínű' ? 'selected' : ''}>Bőrszínű</option>
            <option value="Fehér" ${product.color === 'Fehér' ? 'selected' : ''}>Fehér</option>
            <option value="Fekete" ${product.color === 'Fekete' ? 'selected' : ''}>Fekete</option>
            <option value="Fekete-Kék" ${product.color === 'Fekete-Kék' ? 'selected' : ''}>Fekete-Kék</option>
            <option value="Kék-Fehér" ${product.color === 'Kék-Fehér' ? 'selected' : ''}>Kék-Fehér</option>
            <option value="Lila-Rózsaszín" ${product.color === 'Lila-Rózsaszín' ? 'selected' : ''}>Lila-Rózsaszín</option>
            <option value="Rózsaszín" ${product.color === 'Rózsaszín' ? 'selected' : ''}>Rózsaszín</option>
            <option value="Rózsaszín-Fehér" ${product.color === 'Rózsaszín-Fehér"' ? 'selected' : ''}>Rózsaszín-Fehér"</option>
            <option value="Vérvörös" ${product.color === 'Vérvörös' ? 'selected' : ''}>Vérvörös</option>
            <option value="Világoskék" ${product.color === 'Világoskék' ? 'selected' : ''}>Világoskék</option>
            <option value="Szürke-Fehér" ${product.color === 'Szürke-Fehér' ? 'selected' : ''}>Szürke-Fehér</option>
            <option value="Zöld-Fehér" ${product.color === 'Zöld-Fehér' ? 'selected' : ''}>Zöld-Fehér</option>
          
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    if (product.title === 'Air Jordan 1 Mid Férfi') {
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
            <option value="Barna" ${product.color === 'Barna' ? 'selected' : ''}>Barna</option>
            <option value="Fehér-Fekete" ${product.color === 'Fehér-Fekete' ? 'selected' : ''}>Fehér-Fekete</option>
            <option value="Fehér-Kék" ${product.color === 'Fehér-Kék' ? 'selected' : ''}>Fehér-Kék</option>
            <option value="Fehér-Neonzöld" ${product.color === 'Fehér-Neonzöld' ? 'selected' : ''}>Fehér-Neonzöld</option>
            <option value="Szürke-Fekete" ${product.color === 'Szürke-Fekete' ? 'selected' : ''}>Szürke-Fekete</option>
            <option value="Vérvörös" ${product.color === 'Vérvörös' ? 'selected' : ''}>Vérvörös</option>
            <option value="Zöld" ${product.color === 'Zöld' ? 'selected' : ''}>Zöld</option>
          
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    if (product.title === 'Air Jordan 1 Mid Női') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="35" ${product.size === '35' ? 'selected' : ''}>35</option>
            <option value="36" ${product.size === '36' ? 'selected' : ''}>36</option>
            <option value="37" ${product.size === '37' ? 'selected' : ''}>37</option>
            <option value="38" ${product.size === '38' ? 'selected' : ''}>38</option>
            <option value="39" ${product.size === '39' ? 'selected' : ''}>39</option>
            <option value="40" ${product.size === '40' ? 'selected' : ''}>40</option>
          </select> <br>
          Szín: 
          <select class="color-select" onchange="updateProductColor(${index}, this.value)">
            <option value="Barna-Rózsaszín" ${product.color === 'Barna-Rózsaszín' ? 'selected' : ''}>Barna-Rózsaszín</option>
            <option value="Mentazöld" ${product.color === 'Mentazöld' ? 'selected' : ''}>Mentazöld</option>
            <option value="Vajszínű" ${product.color === 'Vajszínű' ? 'selected' : ''}>Vajszínű</option>
            <option value="Vérvörös" ${product.color === 'Vérvörös' ? 'selected' : ''}>Vérvörös</option>
            <option value="Zöld" ${product.color === 'Zöld' ? 'selected' : ''}>Zöld</option>
          
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    if (product.title === 'Air Jordan 1 High Férfi') {
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
            <option value="Barna-Rózsaszín" ${product.color === 'Barna-Rózsaszín' ? 'selected' : ''}>Barna-Rózsaszín</option>
            <option value="Mentazöld" ${product.color === 'Mentazöld' ? 'selected' : ''}>Mentazöld</option>
            <option value="Vajszínű" ${product.color === 'Vajszínű' ? 'selected' : ''}>Vajszínű</option>
            <option value="Vérvörös" ${product.color === 'Vérvörös' ? 'selected' : ''}>Vérvörös</option>
            <option value="Zöld" ${product.color === 'Zöld' ? 'selected' : ''}>Zöld</option>
          
          </select> <br>
          Mennyiség: <input type="number" class="quantity-input" value="${product.quantity}" min="1" style="width: 50px;">
          <p>Darab ár: ${product.price} Ft <br>Összesen: ${product.price * product.quantity} Ft</p>
          <button class="btn btn-danger btn-sm remove-from-cart-btn" style="float: right;">Eltávolítás</button>
        </div>
      `;
    }

    if (product.title === 'Air Jordan 1 High Nő35i') {
      item.innerHTML = `
        <div>
          <strong>${product.title}</strong> <br> Méret: 
          <select class="size-select" style="display: inline-block; width: auto;">
            <option value="40" ${product.size === '35' ? 'selected' : ''}>35</option>
            <option value="41" ${product.size === '36' ? 'selected' : ''}>36</option>
            <option value="42" ${product.size === '37' ? 'selected' : ''}>37</option>
            <option value="43" ${product.size === '38' ? 'selected' : ''}>38</option>
            <option value="44" ${product.size === '39' ? 'selected' : ''}>39</option>
            <option value="45" ${product.size === '40' ? 'selected' : ''}>40</option>
          </select> <br>
          Szín: 
          <select class="color-select" onchange="updateProductColor(${index}, this.value)">
            <option value="Világosbarna" ${product.color === 'Világosbarna' ? 'selected' : ''}>Világosbarna</option>
            <option value="Világosbarna-rózsaszín" ${product.color === 'Világosbarna-rózsaszín' ? 'selected' : ''}>Világosbarna-rózsaszín</option>
            <option value="Zöld-sárga" ${product.color === 'Zöld-sárga' ? 'selected' : ''}>Zöld-sárga</option>
          
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
  const cards = document.querySelectorAll('.termek');

  let anyVisible = false; // Flag a látható termékekhez

  cards.forEach(card => {
      const productNem = card.dataset.nem;
      const productKategoria = card.dataset.kategoria;

      const matchesNem = nem === 'all' || productNem === nem;
      const matchesKategoria = kategoria === 'all' || productKategoria === kategoria;

      if (matchesNem && matchesKategoria) {
          card.classList.remove('d-none');
          card.classList.add('col-md-4');
          anyVisible = true; // Legalább egy termék látható
      } else {
          card.classList.add('d-none');
          card.classList.remove('col-md-4');
      }
  });

  // Ha nincs látható termék, akkor egy figyelmeztetést is adhatsz
  if (!anyVisible) {
      console.log("Nincs megjeleníthető termék a kiválasztott feltételekkel.");
  }
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
    const purchaseData = cart.map(product => {
      receipt += `${product.title} - Méret: ${product.size}, Szín: ${product.color}, Mennyiség: ${product.quantity}, Darab ára: ${product.price} Ft, Összesen: ${product.price * product.quantity} Ft\n`;
      return {
        Név: product.title,
        Méret: product.size,
        Szín: product.color,
        Mennyiség: product.quantity,
        Darab_ár: product.price
      };
    });
    receipt += `\n ${document.getElementById('total-price').textContent}`;

    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<pre>' + receipt + '</pre>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    let sorszam = Math.floor(Math.random() * 9999) + 1000;
    alert("Az ön rendelési száma: "+sorszam)

    // JSON fájl generálása és letöltés elindítása
    const blob = new Blob([JSON.stringify(purchaseData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = sorszam+'.json'; // A fájl neve, amit a felhasználó letölthet
    link.click();  // Automatikusan elindítja a letöltést
    
  }
});
