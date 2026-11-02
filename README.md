
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
