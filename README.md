<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Shop NG - E-Commerce Website</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      line-height: 1.6;
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }
    h1 {
      color: #0d6efd;
      border-bottom: 2px solid #ccc;
      padding-bottom: 5px;
    }
    h2 {
      color: #333;
      margin-top: 30px;
      border-left: 5px solid #0d6efd;
      padding-left: 10px;
    }
    ul {
      list-style-type: square;
      padding-left: 20px;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 90%;
    }
    .tech-stack, .features {
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body>

  <h1>Shop NG - E-Commerce Website (React)</h1>

  <p>
    <strong>Shop NG</strong> is a responsive and functional e-commerce website built with <strong>React.js</strong>. 
    This project simulates a modern online shopping experience, allowing users to browse products, 
    view detailed product pages, and manage their cart. Products are dynamically fetched from an external API.
  </p>

  <h2>🚀 Features</h2>
  <div class="features">
    <ul>
      <li>Home Page: Clean landing page with hero section and call to action</li>
      <li>Product Listing: Browse all available products fetched from an API</li>
      <li>Product Details Page: View full product information including image, price, and description</li>
      <li>Add to Cart: Clickable button to add products to the cart with real-time updates</li>
      <li>Delete Button: Allows users to remove items from the cart</li>
      <li>Cart Page: View selected items and remove items from cart</li>
      <li>Alert Notification: Brief confirmation alert pops up when a product is added to cart</li>
      <li>Responsive Design: Works seamlessly on mobile, tablet, and desktop</li>
      
    </ul>
  </div>

  <h2>🧰 Tech Stack</h2>
  <div class="tech-stack">
    <ul>
      <li><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3</li>
      <li><strong>Routing:</strong> React Router DOM</li>
      <li><strong>State Management:</strong> useState and prop drilling</li>
      <li><strong>Icons:</strong> React Icons</li>
      <li><strong>API:</strong> Products fetched from <code>FakeStoreAPI</code> or <code>DummyJSON</code></li>
    </ul>
  </div>

</body>
</html>
