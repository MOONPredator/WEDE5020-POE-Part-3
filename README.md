
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
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Us | UrbanGear Pretoria - Get In Touch</title>
<meta name="description" content="Contact UrbanGear in Pretoria, South Africa. Email info@urbangear.co.za, Phone 012 345 6789. Find us on the map.">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="cs_assets/style.css"></head>
<body>
<nav class="navbar"><div class="logo">URBANGEAR</div><ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="About.html">About</a></li><li><a href="products.html">Products</a></li><li><a href="enquiries.html">Special Offers</a></li><li><a href="contact.html" class="active">Contact</a></li></ul></nav>
<div class="page-heading"><h1>Contact Us</h1><p>We would love to hear from you.</p></div>
<section class="section contact-container">
<div class="contact-card"><h2>Get In Touch</h2><p>Email: info@urbangear.co.za</p><p>Phone: 012 345 6789</p><p>Address: Pretoria, South Africa</p><div id="map" style="height:300px; margin-top:20px; border-radius:8px;"></div></div>
<div class="contact-card">
<h2>Send Us a Message</h2>
<form id="contactForm" action="https://formspree.io/f/maykexample2" method="POST" novalidate>
<label>Full Name *</label><input type="text" id="cName" name="cName" required minlength="3"><span class="error" id="cNameError"></span>
<label>Email *</label><input type="email" id="cEmail" name="cEmail" required><span class="error" id="cEmailError"></span>
<label>Message Type *</label><select id="msgType" name="msgType" required><option value="">Select</option><option value="general">General Enquiry</option><option value="support">Support</option><option value="feedback">Feedback</option><option value="business">Business Opportunity</option></select><span class="error" id="msgTypeError"></span>
<label>Full Message *</label><textarea id="cMessage" name="cMessage" required minlength="15" rows="5"></textarea><span class="error" id="cMessageError"></span>
<button type="submit" class="button">Send Email</button>
<p id="contactFormMessage"></p>
</form>
</div>
</section>
<footer><p>&copy; 2026 UrbanGear</p></footer>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="js_assets/script.js" defer></script>
</body>
</html>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>About UrbanGear | Our Mission & Story</title><meta name="description" content="Learn about UrbanGear's mission to make affordable sports lifestyle products accessible to young people in South Africa."><link rel="stylesheet" href="cs_assets/style.css"></head><body>
<nav class="navbar"><div class="logo">URBANGEAR</div><ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="About.html" class="active">About</a></li><li><a href="products.html">Products</a></li><li><a href="enquiries.html">Special Offers</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
<div class="page-heading"><h1>About UrbanGear</h1><p>Sport meets modern urban lifestyle</p></div>
<section class="section about-content fade-in">
<div class="tabs"><button class="tab-btn active" data-tab="who">Who We Are</button><button class="tab-btn" data-tab="mission">Our Mission</button><button class="tab-btn" data-tab="why">Why Us</button></div>
<div id="who" class="tab-content active"><h2>Who We Are</h2><p>UrbanGear is a sports and lifestyle brand focused on modern clothing, footwear, accessories. Our goal is to provide products that allow customers to feel comfortable, confident and stylish.</p></div>
<div id="mission" class="tab-content"><h2>Our Mission</h2><p>To make sports and lifestyle products accessible to young people and communities across South Africa, with quality and modern design.</p></div>
<div id="why" class="tab-content"><h2>Why Choose UrbanGear?</h2><ul class="about-list"><li>Modern designs</li><li>Affordable</li><li>Comfortable</li><li>Simple enquiries</li></ul></div>

<h2 style="margin-top:40px;">FAQs</h2>
<div class="accordion"><div class="accordion-item"><button class="accordion-header">What sizes do you offer? <span>+</span></button><div class="accordion-body"><p>We offer S to XXL for clothing and 6-11 for footwear.</p></div></div><div class="accordion-item"><button class="accordion-header">Do you deliver outside Pretoria? <span>+</span></button><div class="accordion-body"><p>Yes, we deliver nationwide via Courier Guy.</p></div></div><div class="accordion-item"><button class="accordion-header">What is your return policy? <span>+</span></button><div class="accordion-body"><p>30-day returns if unworn with tags.</p></div></div></div>
</section><footer><p>&copy; 2026 UrbanGear</p></footer><script src="js_assets/script.js" defer></script></body></html>
/* UrbanGear - Part 3 Enhanced CSS */
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:Arial,sans-serif;background:#FFFFFF;color:#111111;line-height:1.6;scroll-behavior:smooth;}
.navbar{background:#111111;color:#FFF;display:flex;justify-content:space-between;align-items:center;padding:20px 8%;position:sticky;top:0;z-index:1000;transition:0.3s;}
.logo{color:#F97316;font-size:24px;font-weight:bold;letter-spacing:2px;}
.nav-links{list-style:none;display:flex;gap:25px;}
.nav-links a{color:#FFF;text-decoration:none;font-weight:bold;transition:0.3s;}
.nav-links a:hover,.nav-links a.active{color:#F97316;}
.hero{min-height:500px;background:#111111;display:flex;justify-content:center;align-items:center;text-align:center;padding:40px;animation:fadeIn 1s ease-in;}
.hero h1{color:#FFF;font-size:50px;margin-bottom:20px;}
.hero p{color:#FFF;font-size:18px;margin-bottom:30px;}
.button{display:inline-block;background:#F97316;color:#FFF;padding:12px 25px;text-decoration:none;border:none;border-radius:5px;font-weight:bold;cursor:pointer;transition:0.3s transform, background;}
.button:hover{background:#111111;transform:translateY(-3px);}
.section{padding:60px 8%;}.section h2{text-align:center;font-size:32px;margin-bottom:20px;}
.intro{text-align:center;max-width:700px;margin:0 auto 40px;}
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;}
.feature-card{border:2px solid #111111;padding:30px;text-align:center;border-radius:8px;transition:0.3s;}.feature-card:hover{transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,0.1);}
.feature-card h3{color:#F97316;margin-bottom:15px;}
.offer{background:#F97316;color:#FFF;text-align:center;padding:60px 20px;}
.page-heading{background:#111111;color:#FFF;text-align:center;padding:70px 20px;}
.page-heading h1{font-size:40px;color:#F97316;margin-bottom:10px;}
.search-sort{display:flex;gap:15px;justify-content:center;margin-bottom:30px;flex-wrap:wrap;}
.search-sort input,.search-sort select{padding:12px;border:1px solid #111111;border-radius:5px;min-width:250px;}
.categories{text-align:center;margin-bottom:40px;}.categories button{background:#111111;color:#FFF;border:none;padding:12px 20px;margin:5px;border-radius:5px;cursor:pointer;transition:0.3s;}.categories button:hover,.categories button.active-cat{background:#F97316;}
.products-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
.product-card{border:1px solid #111111;border-radius:8px;overflow:hidden;background:#FFF;transition:0.3s;cursor:pointer;}.product-card:hover{transform:scale(1.02);box-shadow:0 8px 20px rgba(0,0,0,0.15);}
.product-image{height:220px;background:#111111;color:#F97316;display:flex;justify-content:center;align-items:center;font-weight:bold;font-size:20px;overflow:hidden;}.product-image img{width:100%;height:100%;object-fit:cover;}
.product-info{padding:20px;}.product-info h4{color:#F97316;font-size:22px;margin:15px 0;}
/* Modal */ .modal{display:none;position:fixed;z-index:2000;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.7);}.modal-content{background:#FFF;margin:10% auto;padding:30px;border-radius:8px;max-width:600px;position:relative;animation:slideIn 0.3s;}.close-modal,.close-lightbox{position:absolute;right:15px;top:10px;font-size:28px;cursor:pointer;}
/* Lightbox */ .lightbox{display:none;position:fixed;z-index:3000;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.9);text-align:center;padding-top:60px;}.lightbox img{max-width:90%;max-height:80%;border-radius:8px;}
/* Accordion */ .accordion-item{border:1px solid #111111;margin-bottom:10px;border-radius:5px;}.accordion-header{width:100%;padding:15px;background:#FFF;border:none;text-align:left;font-weight:bold;cursor:pointer;display:flex;justify-content:space-between;}.accordion-body{display:none;padding:15px;background:#f9f9f9;}.accordion-body.active{display:block;}
/* Tabs */ .tabs{display:flex;gap:10px;margin-bottom:20px;}.tab-btn{padding:10px 20px;border:1px solid #111111;background:#FFF;cursor:pointer;border-radius:5px;}.tab-btn.active{background:#F97316;color:#FFF;border-color:#F97316;}.tab-content{display:none;}.tab-content.active{display:block;}
.form-section{max-width:700px;margin:0 auto;padding:60px 20px;}form{display:flex;flex-direction:column;}form label{font-weight:bold;margin-bottom:5px;margin-top:15px;}form input,form select,form textarea{padding:12px;border:1px solid #111111;border-radius:5px;font-family:Arial;font-size:16px;}form textarea{resize:vertical;margin-bottom:20px;}form .button{align-self:flex-start;}.error{color:#F97316;font-size:13px;margin-top:3px;}#formMessage,#contactFormMessage{margin-top:20px;font-weight:bold;}
.contact-container{display:grid;grid-template-columns:1fr 1fr;gap:30px;max-width:900px;margin:0 auto;}.contact-card{border:2px solid #111111;padding:30px;border-radius:8px;}
footer{background:#111111;color:#FFF;text-align:center;padding:25px;margin-top:40px;}footer a{color:#F97316;}
.fade-in{opacity:0;transform:translateY(20px);transition:0.6s;} .fade-in.visible{opacity:1;transform:translateY(0);}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideIn{from{transform:translateY(-50px)}to{transform:translateY(0)}}
@media(max-width:768px){.navbar{flex-direction:column;gap:20px;}.nav-links{flex-direction:column;text-align:center;gap:10px;}.hero h1{font-size:35px;}.features,.products-grid,.contact-container{grid-template-columns:1fr;}.search-sort{flex-direction:column;}}
// UrbanGear Part 3 - Enhanced Functionality
const productsData = [
 {id:'tshirt',name:'Urban Sports T-Shirt',category:'clothing',price:399,image:'t-shirt',desc:'Comfortable cotton sports t-shirt for daily urban wear.',stock:'In Stock - 15 left',imgUrl:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'},
 {id:'hoodie',name:'UrbanGear Hoodie',category:'clothing',price:699,image:'HOODIE',desc:'Warm fleece hoodie, modern street design.',stock:'In Stock - 8 left',imgUrl:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'},
 {id:'runner',name:'Urban Runner',category:'footwear',price:899,image:'RUNNING SHOE',desc:'Lightweight running shoe for city and track.',stock:'Limited - 4 left',imgUrl:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'},
 {id:'trainers',name:'Street Trainers',category:'footwear',price:799,image:'TRAINERS',desc:'Durable street trainers with grip.',stock:'In Stock - 12 left',imgUrl:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500'},
 {id:'cap',name:'Urban Cap',category:'accessories',price:199,image:'CAP',desc:'Classic urban cap, adjustable.',stock:'In Stock - 20 left',imgUrl:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500'},
 {id:'backpack',name:'Urban Backpack',category:'accessories',price:499,image:'BACKPACK',desc:'Spacious backpack for gym and daily use.',stock:'In Stock - 10 left',imgUrl:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'}
];

let currentFilter='all', currentSearch='', currentSort='default';
function renderProducts(){
 const grid=document.getElementById('productsGrid'); if(!grid) return;
 let filtered=productsData.filter(p=>{
   const matchCat=currentFilter==='all'||p.category===currentFilter;
   const matchSearch=p.name.toLowerCase().includes(currentSearch.toLowerCase())||p.category.includes(currentSearch.toLowerCase());
   return matchCat&&matchSearch;
 });
 if(currentSort==='price-low') filtered.sort((a,b)=>a.price-b.price);
 if(currentSort==='price-high') filtered.sort((a,b)=>b.price-a.price);
 if(currentSort==='name') filtered.sort((a,b)=>a.name.localeCompare(b.name));
 grid.innerHTML=filtered.map(p=>`
  <div class="product-card" data-category="${p.category}" data-id="${p.id}">
   <div class="product-image" onclick="openLightbox('${p.imgUrl}','${p.name}')"><img src="${p.imgUrl}" alt="${p.name} - ${p.category} - UrbanGear Pretoria" loading="lazy"></div>
   <div class="product-info" onclick="openModal('${p.id}')"><h3>${p.name}</h3><p>${p.desc.substring(0,40)}...</p><h4>R${p.price}</h4><button class="button">View Details</button></div>
  </div>`).join('');
}
function filterProducts(cat){currentFilter=cat;document.querySelectorAll('.categories button').forEach(b=>b.classList.remove('active-cat'));event.target.classList.add('active-cat');renderProducts();}
function searchProducts(val){currentSearch=val;renderProducts();}
function sortProducts(val){currentSort=val;renderProducts();}

// Modal
function openModal(id){const p=productsData.find(x=>x.id===id);document.getElementById('modalBody').innerHTML=`<h2>${p.name}</h2><img src="${p.imgUrl}" alt="${p.name}" style="width:100%;border-radius:8px;margin:15px 0;"><p>${p.desc}</p><p><strong>Price:</strong> R${p.price}</p><p><strong>Availability:</strong> ${p.stock}</p><p><strong>Delivery:</strong> 2-3 days in Pretoria, 3-5 days nationwide.</p><a href="enquiries.html" class="button">Enquire Now</a>`;document.getElementById('productModal').style.display='block';}
function closeModal(){document.getElementById('productModal').style.display='none';}
// Lightbox
function openLightbox(src,caption){document.getElementById('lightboxImg').src=src;document.getElementById('lightboxCaption').textContent=caption;document.getElementById('lightbox').style.display='block';}
function closeLightbox(){document.getElementById('lightbox').style.display='none';}

document.addEventListener('DOMContentLoaded',()=>{
 renderProducts();
 const search=document.getElementById('searchInput'); if(search) search.addEventListener('input',e=>searchProducts(e.target.value));
 const sort=document.getElementById('sortSelect'); if(sort) sort.addEventListener('change',e=>sortProducts(e.target.value));
 document.querySelector('.close-modal')?.addEventListener('click',closeModal);
 document.querySelector('.close-lightbox')?.addEventListener('click',closeLightbox);
 window.addEventListener('click',e=>{if(e.target.id==='productModal')closeModal();if(e.target.id==='lightbox')closeLightbox();});
 // Accordion
 document.querySelectorAll('.accordion-header').forEach(btn=>{btn.addEventListener('click',()=>{const body=btn.nextElementSibling;const isActive=body.classList.contains('active');document.querySelectorAll('.accordion-body').forEach(b=>b.classList.remove('active'));if(!isActive)body.classList.add('active');})});
 // Tabs
 document.querySelectorAll('.tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.tab).classList.add('active');})});
 // Fade-in animation
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.1});document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
 // Leaflet Map - Pretoria
 if(document.getElementById('map')){const map=L.map('map').setView([-25.7479,28.2293],13);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);L.marker([-25.7479,28.2293]).addTo(map).bindPopup('UrbanGear HQ<br>Pretoria, South Africa').openPopup();}
 // Enquiry Form Validation + AJAX
 const enquiryForm=document.getElementById('enquiryForm'); if(enquiryForm){enquiryForm.addEventListener('submit',function(e){e.preventDefault();if(validateEnquiry()){const formData=new FormData(enquiryForm);const product=productsData.find(p=>p.id===document.getElementById('product').value);const qty=document.getElementById('quantity').value||1;const total=product?product.price*qty:'TBD';document.getElementById('formMessage').innerHTML=`Thank you ${sanitize(document.getElementById('name').value)}! Your enquiry for <strong>${product?product.name:'selected product'}</strong> (Qty: ${qty}) has been received.<br>Estimated Total: <strong>R${total}</strong><br>Availability: ${product?product.stock:'Checking'}<br>We will email you at ${sanitize(document.getElementById('email').value)} within 24 hours.`;document.getElementById('formMessage').style.color='#111111';enquiryForm.reset();setTimeout(()=>{console.log('AJAX Simulation: Sending data to server...',Object.fromEntries(formData));},500);}});}
 // Contact Form Validation + Email compilation
 const contactForm=document.getElementById('contactForm'); if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();if(validateContact()){const name=sanitize(document.getElementById('cName').value);const email=sanitize(document.getElementById('cEmail').value);const type=document.getElementById('msgType').value;const msg=sanitize(document.getElementById('cMessage').value);const compiledEmail=`To: info@urbangear.co.za\nSubject: ${type} from ${name}\nFrom: ${email}\nMessage: ${msg}`;document.getElementById('contactFormMessage').innerHTML=`Thank you! Your ${type} message has been compiled.<br><em style="white-space:pre-wrap;background:#f4f4f4;display:block;padding:10px;margin-top:10px;">${compiledEmail}</em><br><a href="mailto:info@urbangear.co.za?subject=${encodeURIComponent(type+' from '+name)}&body=${encodeURIComponent(msg+'\n\nFrom: '+email)}" class="button">Open Email Client to Send</a>`;contactForm.reset();}});}
});

function validateEnquiry(){
 let valid=true; const name=document.getElementById('name'),email=document.getElementById('email'),phone=document.getElementById('phone'),product=document.getElementById('product'),message=document.getElementById('message');
 document.querySelectorAll('#enquiryForm .error').forEach(e=>e.textContent='');
 if(!name.value.trim()||name.value.length<3){document.getElementById('nameError').textContent='Name must be at least 3 characters.';valid=false;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){document.getElementById('emailError').textContent='Enter valid email.';valid=false;}
 if(!/^0[0-9]{9}$/.test(phone.value)){document.getElementById('phoneError').textContent='Enter valid SA number 0XXXXXXXXX (10 digits).';valid=false;}
 if(!product.value){document.getElementById('productError').textContent='Select a product.';valid=false;}
 if(!message.value.trim()||message.value.length<10){document.getElementById('messageError').textContent='Message at least 10 chars.';valid=false;}
 return valid;
}
function validateContact(){
 let valid=true; document.querySelectorAll('#contactForm .error').forEach(e=>e.textContent='');
 if(!document.getElementById('cName').value.trim()||document.getElementById('cName').value.length<3){document.getElementById('cNameError').textContent='Name required.';valid=false;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('cEmail').value)){document.getElementById('cEmailError').textContent='Valid email required.';valid=false;}
 if(!document.getElementById('msgType').value){document.getElementById('msgTypeError').textContent='Select message type.';valid=false;}
 if(!document.getElementById('cMessage').value.trim()||document.getElementById('cMessage').value.length<15){document.getElementById('cMessageError').textContent='Message at least 15 chars.';valid=false;}
 return valid;
}
function sanitize(str){const div=document.createElement('div');div.textContent=str;return div.innerHTML;} // Security: prevent XSS
