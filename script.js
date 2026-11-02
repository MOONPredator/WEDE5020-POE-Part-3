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


