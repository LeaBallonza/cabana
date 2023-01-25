const mediaQueryCel = window.matchMedia('(max-width: 599px)')
const mediaQueryNbk = window.matchMedia('(min-width: 600px)')

let footerId = document.getElementById("footerId")
let conteneiner = document.createElement("div");

// Check if the media query is true
if (mediaQueryNbk.matches) {
  // Then trigger an alert
  console.log('Media Query NBK!')

  footerId.innerHTML += `<nav class="row footer-cuadricula">
  <div class="col-xs-2 col-md-2 col-sm-2 col-lg-2 col-xl-2.col-xxl-2 col1">
      <h3>Sitio</h3>
      <ul class="footer-lista">
          <li class="footer-item"> <a href="index.html">INICIO</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/eventos.html">EVENTOS</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/servicios.html">SERVICIOS</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/entorno.html">ENTORNO ÚNICO</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/historia.html"> SITIO HISTÓRICO</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/fotos.html">FOTOS</a> </li>
          <li class="footer-item"> <a href="./src/Paginas/contacto.html">CONTACTO</a> </li>
      </ul>
  </div>
  <div class="col-xs-7 col-md-7 col-sm-7 col-lg-7 col-xl-7.col-xxl-7 col2">
      <div>
          <a href="../Paginas/contacto.html">Contactanos</a> 
      </div>
      
      <div class="container-direccion">
          <a class="direccion" href="https://goo.gl/maps/eu5RQdx3gLrgxSnGA" target="_blank">Camacua 2655 - 1611 Don Torcuato, Provincia de Buenos Aires, Argentina</a>
      </div>
      <div class="tel"><a href="https://wa.me/5491165306761">+5411.1234.5678</a></div>
      <div class="mail"><a href="../Paginas/contacto.html">contacto@losgranados.com</a> </div>
      <div class="cotiza-evento-container">  
         <div class="cotiza-evento"> <a  href="./src/Paginas/contacto.html" >COTIZAR TU EVENTO</a></div>
       </div>
     

  </div>
  <div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 col-xl-3.col-xxl-3 col3">
  <div class="logo"><img src="./src/multimedia/Img/home/iso_header.png" alt="Isologo granada de Cabaña los Granados" width="200%">
  </div>
  <div><h4>Cabaña de Los Granados</h4></div>
  <div><h5>Todos los derechos reservados</h5></div>
  <ul class="redes-footer">
      <li><a href="https://twitter.com/?lang=es"><img src="./src/multimedia/Img/home/ico_TW_footer.png" alt="Redes sociales Cabaña Los Granados - Twitter"></a></li>
      <li><a href="https://www.facebook.com/"><img src="./src/multimedia/Img/home/ico_FB_footer.png" alt="Redes sociales Cabaña Los Granados - Facebook"></a></li>
      <li><a href="https://www.instagram.com"><img src="./src/multimedia/Img/home/ico_IG_footer.png" alt="Redes sociales Cabaña Los Granados - Instagram"></a></li>
 

  </div>
</nav>`

}

if (mediaQueryCel.matches) {
    // Then trigger an alert
    console.log('Media Query CEL!')
  
    footerId.innerHTML += `<nav class=" footer-container">
    
      <a class="navbar-brand logo-footer" href="/">
      <img src="./src/multimedia/Img/logo_header.png"
      alt="Logo Cabaña Los Granados"></a>

      <ul class="redes-footer">
      <li><a href="https://twitter.com/?lang=es"><img src="./src/multimedia/Img/home/ico_TW_footer.png" alt="Redes sociales Cabaña Los Granados - Twitter"></a></li>
      <li><a href="https://www.facebook.com/"><img src="./src/multimedia/Img/home/ico_FB_footer.png" alt="Redes sociales Cabaña Los Granados - Facebook"></a></li>
      <li><a href="https://www.instagram.com"><img src="./src/multimedia/Img/home/ico_IG_footer.png" alt="Redes sociales Cabaña Los Granados - Instagram"></a></li>
      </ul>
  </nav>`
   
  }