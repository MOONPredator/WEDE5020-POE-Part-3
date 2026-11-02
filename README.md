
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UrbanGear | Sports & Lifestyle Apparel in Pretoria, SA</title>
    <meta name="description" content="UrbanGear is Pretoria's leading sports and lifestyle brand. Shop affordable urban streetwear, running shoes, hoodies, t-shirts and accessories.">
    <meta name="keywords" content="UrbanGear, sports wear Pretoria, streetwear South Africa, running shoes, urban clothing, lifestyle apparel">
    <meta name="author" content="UrbanGear">
    <link rel="canonical" href="https://yourusername.github.io/urbangear/index.html">
    <meta property="og:title" content="UrbanGear | Sport. Style. Attitude.">
    <meta property="og:description" content="Discover latest sports and lifestyle apparel in Pretoria.">
    <link rel="stylesheet" href="cs_assets/style.css">
    <script type="application/ld+json">
    { "@context":"https://schema.org", "@type":"ClothingStore", "name":"UrbanGear", "address":{"@type":"PostalAddress","addressLocality":"Pretoria","addressCountry":"ZA"}, "url":"https://urbangear.co.za" }
    </script>
</head>
<body>
<header>
    <nav class="navbar" aria-label="Main Navigation">
        <div class="logo">URBANGEAR</div>
        <ul class="nav-links">
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="enquiries.html">Special Offers</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
<main>
    <section class="hero">
        <div class="hero-content fade-in">
            <h1>SPORT. STYLE. ATTITUDE.</h1>
            <p>Discover the latest sports and lifestyle apparel in Pretoria, South Africa. Modern, affordable, comfortable.</p>
            <a href="products.html" class="button" aria-label="Shop Products">Shop Collection</a>
        </div>
    </section>
    <section class="section fade-in">
        <h2>Welcome to UrbanGear</h2>
        <p class="intro">UrbanGear brings you quality sports and lifestyle clothing that lets you feel confident and stylish every day. From <a href="products.html">urban hoodies</a> to running shoes.</p>
        <div class="features">
            <div class="feature-card"><h3>Quality Clothing</h3><p>Premium fabrics for everyday comfort.</p></div>
            <div class="feature-card"><h3>Modern Footwear</h3><p>Urban runners and street trainers.</p></div>
            <div class="feature-card"><h3>Urban Style</h3><p>Designed for young South Africans.</p></div>
        </div>
    </section>
    <section class="offer fade-in">
        <h2>Limited Time Offer</h2>
        <p>Get 20% off your first enquiry. Check our Special Offers page.</p>
        <a href="enquiries.html" class="button">Make an Enquiry</a>
    </section>
</main>
<footer><p>&copy; 2026 UrbanGear Sports & Lifestyle. All Rights Reserved. | <a href="sitemap.xml">Sitemap</a></p>
<div class="social"><a href="#">Instagram</a> | <a href="#">Facebook</a></div></footer>
<script src="js_assets/script.js" defer></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Products | UrbanGear Sports & Streetwear Collection</title>
    <meta name="description" content="Explore UrbanGear products: sports t-shirts R399, hoodies R699, urban runners R899, caps, backpacks. Filter by category, search and sort.">
    <meta name="keywords" content="buy sports t-shirt South Africa, UrbanGear hoodie price, running shoes Pretoria">
    <link rel="stylesheet" href="cs_assets/style.css">
</head>
<body>
<nav class="navbar"><div class="logo">URBANGEAR</div><ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="About.html">About</a></li><li><a href="products.html" class="active">Products</a></li><li><a href="enquiries.html">Special Offers</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
<div class="page-heading"><h1>Our Products</h1><p>Explore our range of sports and lifestyle gear</p></div>
<section class="section">
    <div class="search-sort">
        <input type="text" id="searchInput" placeholder="Search products (e.g. hoodie)..." aria-label="Search products">
        <select id="sortSelect" aria-label="Sort products"><option value="default">Sort by</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="name">Name A-Z</option></select>
    </div>
    <div class="categories">
        <button onclick="filterProducts('all')" class="active-cat">All</button>
        <button onclick="filterProducts('clothing')">Clothing</button>
        <button onclick="filterProducts('footwear')">Footwear</button>
        <button onclick="filterProducts('accessories')">Accessories</button>
    </div>
    <div class="products-grid" id="productsGrid"></div>
</section>

<!-- MODAL -->
<div id="productModal" class="modal"><div class="modal-content"><span class="close-modal">&times;</span><div id="modalBody"></div></div></div>
<!-- LIGHTBOX -->
<div id="lightbox" class="lightbox"><span class="close-lightbox">&times;</span><img id="lightboxImg" src="" alt="Enlarged product view"><p id="lightboxCaption"></p></div>

<footer><p>&copy; 2026 UrbanGear</p></footer>
<script src="js_assets/script.js" defer></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Enquiry | Check Price & Availability - UrbanGear</title>
<meta name="description" content="Enquire about UrbanGear products. Get instant feedback on cost, stock availability and delivery in Pretoria.">
<link rel="stylesheet" href="cs_assets/style.css"></head>
<body>
<nav class="navbar"><div class="logo">URBANGEAR</div><ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="About.html">About</a></li><li><a href="products.html">Products</a></li><li><a href="enquiries.html" class="active">Special Offers</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
<div class="page-heading"><h1>Product Enquiry</h1><p>Interested in one of our products? Send us an enquiry.</p></div>
<section class="form-section fade-in">
<form id="enquiryForm" action="https://formspree.io/f/maykexample" method="POST" novalidate>
<label for="name">Full Name *</label><input type="text" id="name" name="name" required minlength="3" placeholder="John Doe">
<span class="error" id="nameError"></span>
<label for="email">Email Address *</label><input type="email" id="email" name="email" required placeholder="john@example.com">
<span class="error" id="emailError"></span>
<label for="phone">Phone Number *</label><input type="tel" id="phone" name="phone" required pattern="^0[0-9]{9}$" placeholder="0123456789">
<span class="error" id="phoneError"></span>
<label for="product">Product *</label><select id="product" name="product" required><option value="">-- Select Product --</option><option value="tshirt">Urban Sports T-Shirt - R399</option><option value="hoodie">UrbanGear Hoodie - R699</option><option value="runner">Urban Runner - R899</option><option value="trainers">Street Trainers - R799</option><option value="cap">Urban Cap - R199</option><option value="backpack">Urban Backpack - R499</option></select>
<span class="error" id="productError"></span>
<label for="quantity">Quantity</label><input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
<label for="message">Message *</label><textarea id="message" name="message" rows="6" required minlength="10" placeholder="Ask about size, availability..."></textarea>
<span class="error" id="messageError"></span>
<button type="submit" class="button">Submit Enquiry</button>
<p id="formMessage" role="alert"></p>
</form>
</section>
<footer><p>&copy; 2026 UrbanGear</p></footer>
<script src="js_assets/script.js" defer></script>
</body>
</html>
