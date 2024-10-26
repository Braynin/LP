import "./App.module.css";

function Home() {
  return (
    <>
      <body>
    <header>
      <div id="messages-container"><div className="messages">
            
<a className="message" href="#">lp pasion por el derecho</a>

<a className="message" href="#">contactanos para mas informacion</a>

<a className="message" href="#">llamanos o escribenos</a>

        </div></div>
      <div id="header-container">
  <a href="./index.html">
          <img className="header-logo" src="./assets/logolp.webp" alt="Logo Lp">
  </a>
  <form className="header-search">
          <input className="search-input" type="text" placeholder="Buscar" id="search" oninput="captureText(event)">
  </form>
  <ul className="social-links">
<li id="Facebook" className="header-li"><a href="https://www.facebook.com/lpderecho"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1  a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"></path>
  </svg></a></li>

<li id="Whatsapp" className="header-li"><a href="https://wa.me/939613209"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
              </svg></a></li>

<li id="Instagram" className="header-li"><a href="https://www.instagram.com/lpderecho"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg></a></li>

<li id="TikTok" className="header-li"><a href="https://www.tiktok.com/@editorial.lp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"></path>
              </svg></a></li>

<li id="Youtube" className="header-li"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path>
              </svg></a></li>
</ul>
  </div>
      <div id="nav-container"><nav className="nav">
          <ul className="nav-options">
            
<li className="nav-option"><a className="nav-link" href="#" data-section="penal">Penal</a></li>

<li className="nav-option"><a className="nav-link" href="#" data-section="civil">Civil</a></li>

<li className="nav-option"><a className="nav-link" href="#" data-section="familia">Familia</a></li>

<li className="nav-option"><a className="nav-link" href="#" data-section="administrativo">Administrativo</a></li>

<li className="nav-option"><a className="nav-link" href="#" data-section="constitucional">Constitucional</a></li>

          </ul>
  </nav> </div>
    </header>
    <main>
      <div id="main-hero"></div>
      <div id="products-container">
  <h2 className="content-subtitle">Libros</h2>
  <div className="products">
       
  <a className="product-card" href="./details.html?id=1">  
  <img className="product-img" src="assets/CODIGO-PENAL.png" alt="Código Penal Tapa Dura">
      <div className="product-info">
        <span className="product-title">Código Penal Tapa Dura</span>
        <div className="product-price-block">
          <span className="product-price">S/.75</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=2">  
  <img className="product-img" src="assets/CP_TR3-removebg-preview.png" alt="Código Penal Tapa Rústica">
      <div className="product-info">
        <span className="product-title">Código Penal Tapa Rústica</span>
        <div className="product-price-block">
          <span className="product-price">S/.50</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=3">  
  <img className="product-img" src="assets/CODIGO CIVIL.webp" alt="Código Civil Tapa Dura">
      <div className="product-info">
        <span className="product-title">Código Civil Tapa Dura</span>
        <div className="product-price-block">
          <span className="product-price">S/.75</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=4">  
  <img className="product-img" src="assets/CC_TR_3-removebg-preview.png" alt="Código Civil Tapa Rústica">
      <div className="product-info">
        <span className="product-title">Código Civil Tapa Rústica</span>
        <div className="product-price-block">
          <span className="product-price">S/.75</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=5">  
  <img className="product-img" src="assets/DETENCION-POLICIAL.png" alt="Detencion policial en flagrancia y proceso inmediato">
      <div className="product-info">
        <span className="product-title">Detencion policial en flagrancia y proceso inmediato</span>
        <div className="product-price-block">
          <span className="product-price">S/.130</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=6">  
  <img className="product-img" src="assets/MINI CODIGO PENAL.webp" alt="Mini Código penal">
      <div className="product-info">
        <span className="product-title">Mini Código penal</span>
        <div className="product-price-block">
          <span className="product-price">S/.35</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=7">  
  <img className="product-img" src="assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp" alt="El Defensor 2">
      <div className="product-info">
        <span className="product-title">El Defensor 2</span>
        <div className="product-price-block">
          <span className="product-price">S/.60</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=8">  
  <img className="product-img" src="assets/LITIGACION ORAL CIVIL.webp" alt="Litigacion Oral Civil">
      <div className="product-info">
        <span className="product-title">Litigacion Oral Civil</span>
        <div className="product-price-block">
          <span className="product-price">S/.100</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=9">  
  <img className="product-img" src="assets/COLECCION - COMO REDACTAR UN CONTRATO.webp" alt="Coleccion ¿Cómo redactar un contrato? Notas desde la práctica">
      <div className="product-info">
        <span className="product-title">Coleccion ¿Cómo redactar un contrato? Notas desde la práctica</span>
        <div className="product-price-block">
          <span className="product-price">S/.140</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=10">  
  <img className="product-img" src="assets/CULPABILIDAD Y NEUROCIENCIAS.webp" alt="Culpabilidad y Neurociencias">
      <div className="product-info">
        <span className="product-title">Culpabilidad y Neurociencias</span>
        <div className="product-price-block">
          <span className="product-price">S/.80</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=11">  
  <img className="product-img" src="assets/DERECHO DEL CONSUMIDOR.webp" alt="Derecho del Consumidor">
      <div className="product-info">
        <span className="product-title">Derecho del Consumidor</span>
        <div className="product-price-block">
          <span className="product-price">S/.60</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=12">  
  <img className="product-img" src="assets/PAD PROCEDIMIENTO ADMINISTRATIVO DISCIPLINARIO.webp" alt="PAD">
      <div className="product-info">
        <span className="product-title">PAD</span>
        <div className="product-price-block">
          <span className="product-price">S/.120</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=13">  
  <img className="product-img" src="assets/LA CONSTITUCION EN LAS REDES.webp" alt="La Constitucion en las redes">
      <div className="product-info">
        <span className="product-title">La Constitucion en las redes</span>
        <div className="product-price-block">
          <span className="product-price">S/.120</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=14">  
  <img className="product-img" src="assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS.webp" alt="Coleccion Litigacion Oral en audiencias previas - Con caja">
      <div className="product-info">
        <span className="product-title">Coleccion Litigacion Oral en audiencias previas - Con caja</span>
        <div className="product-price-block">
          <span className="product-price">S/.150</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=15">  
  <img className="product-img" src="assets/COLECCION LITIGACION EN AUDIENCIAS PREVIAS - SIN CAJA.webp" alt="Coleccion Litigacion Oral en audiencias previas - Sin caja">
      <div className="product-info">
        <span className="product-title">Coleccion Litigacion Oral en audiencias previas - Sin caja</span>
        <div className="product-price-block">
          <span className="product-price">S/.140</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=16">  
  <img className="product-img" src="assets/EL NUEVO CODIGO PROCESAL CONSTITUCIONAL.webp" alt="El Nuevo Código Procesal Constitucional">
      <div className="product-info">
        <span className="product-title">El Nuevo Código Procesal Constitucional</span>
        <div className="product-price-block">
          <span className="product-price">S/.100</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=17">  
  <img className="product-img" src="assets/CURSO DE REDACCION ADMINISTRATIVA.webp" alt="Curso de Redaccion Administrativa">
      <div className="product-info">
        <span className="product-title">Curso de Redaccion Administrativa</span>
        <div className="product-price-block">
          <span className="product-price">S/.100</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=18">  
  <img className="product-img" src="assets/DERECHO-PENAL-PARTE-GENERAL.png" alt="Derecho penal: parte general">
      <div className="product-info">
        <span className="product-title">Derecho penal: parte general</span>
        <div className="product-price-block">
          <span className="product-price">S/.130</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=19">  
  <img className="product-img" src="assets/MI PRIMER JUICIO DE FAMILIA.webp" alt="Mi primer juicio de familia. ¿Qué le digo al juez?">
      <div className="product-info">
        <span className="product-title">Mi primer juicio de familia. ¿Qué le digo al juez?</span>
        <div className="product-price-block">
          <span className="product-price">S/.100</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=20">  
  <img className="product-img" src="assets/EL DEFENSOR.png" alt="El Defensor">
      <div className="product-info">
        <span className="product-title">El Defensor</span>
        <div className="product-price-block">
          <span className="product-price">S/.60</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

  <a className="product-card" href="./details.html?id=21">  
  <img className="product-img" src="assets/EL DERECHO A LA PRUEBA EN LA INVESTIGACION.webp" alt="El derecho a la prueba en la investigacion preparatoria">
      <div className="product-info">
        <span className="product-title">El derecho a la prueba en la investigacion preparatoria</span>
        <div className="product-price-block">
          <span className="product-price">S/.130</span>
        </div>
        <div className="product-impuesto">
          <span className="product-igv">Incluye IGV</span>
        </div>
      </div>
      </a>

   
  </div></div>
      <div id="offers-container">
  <h2 className="content-subtitle">Ofertas de la semana</h2>
  <div className="offers">
       
    <a className="product-card" href="./details.html?id=1">  
    <img className="product-img" src="assets/CODIGO PENAL.webp" alt="Código Penal Tapa Dura">
      <div className="product-info">
        <span className="product-title">Código Penal Tapa Dura</span>
        <div className="product-price-block">
          <span className="product-price">S/. 75</span>
        </div>
        <div className="product-tax-policy">
          <span className="product-discount">Incluye IGV</span>
        </div>
      </div>
        </a>
  
    <a className="product-card" href="./details.html?id=3">  
    <img className="product-img" src="assets/CODIGO CIVIL.webp" alt="Código Civil Tapa Dura">
      <div className="product-info">
        <span className="product-title">Código Civil Tapa Dura</span>
        <div className="product-price-block">
          <span className="product-price">S/. 75</span>
        </div>
        <div className="product-tax-policy">
          <span className="product-discount">Incluye IGV</span>
        </div>
      </div>
        </a>
  
    <a className="product-card" href="./details.html?id=7">  
    <img className="product-img" src="assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp" alt="El Defensor 2">
      <div className="product-info">
        <span className="product-title">El Defensor 2</span>
        <div className="product-price-block">
          <span className="product-price">S/. 60</span>
        </div>
        <div className="product-tax-policy">
          <span className="product-discount">Incluye IGV</span>
        </div>
      </div>
        </a>
  
   
  </div></div>
    </main>
    <footer>
      <div id="footer-container">
  
<div className="footer-section">
          <h4 className="footer-title">Servicio al cliente</h4>
          <ul className="footer-options">
            <li><a className="footer-option" href="#">Opiniones de clientes</a></li>
            <li><a className="footer-option" href="#">Preguntas Frecuentes</a></li>
            <li>
              <a className="footer-option" href="#">Cambios y Devoluciones</a>
            </li>
             <li><a className="footer-option" href="#">Política de Privacidad</a></li>
          </ul>
        </div>
<div className="footer-section">
          <h4 className="footer-title">Libros Juridicos</h4>
          <ul className="footer-options">
            <li><a className="footer-option" href="#">Libros de Civil</a></li>
            <li><a className="footer-option" href="#">Libros de Penal</a></li>
            <li>
              <a className="footer-option" href="#">Packs</a>
            </li>
             
          </ul>
        </div>
  <div className="footer-section">
          <h4 className="footer-title">¿Consultas?</h4>
          <a className="footer-option" href="tel:+51997743461">+51 997 743 461</a>
          <h4 className="footer-title">Síguenos en</h4>
          <ul className="social-links">
<li id="Facebook" className="header-li"><a href="https://www.facebook.com/lpderecho"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1  a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"></path>
  </svg></a></li>

<li id="Whatsapp" className="header-li"><a href="https://wa.me/939613209"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
              </svg></a></li>

<li id="Instagram" className="header-li"><a href="https://www.instagram.com/lpderecho"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg></a></li>

<li id="TikTok" className="header-li"><a href="https://www.tiktok.com/@editorial.lp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"></path>
              </svg></a></li>

<li id="Youtube" className="header-li"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path>
              </svg></a></li>
</ul>
  </div>
  </div>
    </footer>
    <script src="scripts/layout.js"></script>
    <script src="scripts/products.js"></script>
    <script src="scripts/index.js"></script>
    <script src="scripts/ofertas.js"></script>
  <!-- Code injected by live-server -->
<script>
	
</script>


</body>
    </>
  );
}

export default Home;
