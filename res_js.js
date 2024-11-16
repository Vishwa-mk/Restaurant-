document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
      { id: 1, name: "Pizza", price: 12 },
      { id: 2, name: "Burger", price: 8 },
      { id: 3, name: "Pasta", price: 10 },
    ];
  
    const cart = [];
    const orders = [];
  
    // Load Menu Items
    const menuContainer = document.getElementById("menu-items");
    menuItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <h3>${item.name} Rs</h3>
        <p>${item.price} Rs</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      menuContainer.appendChild(div);
    });
  
    // Add to Cart
    window.addToCart = (id) => {
      const item = menuItems.find((menuItem) => menuItem.id === id);
      cart.push(item);
      renderCart();
    };
  
    // Render Cart
    const renderCart = () => {
      const cartContainer = document.getElementById("cart-items");
      cartContainer.innerHTML = "";
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartContainer.appendChild(li);
      });
    };
  
    // Place Order
    document.getElementById("place-order").addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      orders.push({ id: orders.length + 1, items: [...cart], status: "Pending" });
      cart.length = 0; // Clear cart
      renderCart();
      renderOrders();
      alert("Order placed successfully!");
    });
  
    // Render Orders
    const renderOrders = () => {
      const orderList = document.getElementById("order-list");
      orderList.innerHTML = "";
      orders.forEach((order) => {
        const li = document.createElement("li");
        li.textContent = `Order #${order.id} - Status: ${order.status}`;
        orderList.appendChild(li);
      });
    };
  });
  