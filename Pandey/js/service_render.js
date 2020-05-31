
var myvar = '<header class="s-header" style="background-color: black;">'+
'<div class="header-logo">'+
'<a class="site-logo" href="index.html">'+
'<img src="images/logo.png" alt="Homepage">'+
'</a>'+
'</div>'+
'<nav class="header-nav">'+
'<a href="#0" class="header-nav__close" title="close"><span>Close</span></a>'+
'<div class="header-nav__content">'+
'<h3>Navigation</h3>'+
'<ul class="header-nav__list">'+
''+
'<li><p class="user">Hello,</p></li>'+
'<li><p class="username">Satyam Pandey</p></li>'+
'<li onclick="location.replace(\'index.html\')" class="current"><a   href="#" title="home">HOME</a></li>'+
'<li class="current"><a href="#home" title="profile">MY PROFILE</a></li>'+
'<li class="current"><a href="#services" title="about">SERVICES</a></li>'+
'<li class="current"><a href="#" title="about">ORDERS</a></li>'+
'<li class="current"><a href="#works" title="works">WORKS</a></li>'+
'<li class="current"><a href="#contact" title="contact">CONTACT</a></li>'+
'<li id="logout" class="current"><a href="#" title="logout">LOGOUT</a></li>'+
'</ul>'+
'<ul class="header-nav__social">'+
'<li>'+
'<a href="#"><i class="fa fa-facebook"></i></a>'+
'</li>'+
'<li>'+
'<a href="#"><i class="fa fa-twitter"></i></a>'+
'</li>'+
'<li>'+
'<a href="#"><i class="fa fa-instagram"></i></a>'+
'</li>'+
'<li>'+
'<a href="#"><i class="fa fa-behance"></i></a>'+
'</li>'+
'<li>'+
'<a href="#"><i class="fa fa-dribbble"></i></a>'+
'</li>'+
'</ul>'+
'</div> '+
'</nav> '+
'<a class="header-menu-toggle" href="#0">'+
'<span class="header-menu-text" style="font-weight: 900;">Menu</span>'+
'<span class="header-menu-icon"></span>'+
'</a>'+
'</header> '+
''+
' '+
''+
'<section id=\'services\' class="s-services">'+
''+
'<div class="row section-header has-bottom-sep" data-aos="fade-up">'+
'<div class="col-full">'+
'<h3 class="subhead">services available in your area</h3>'+
'<div id=\'root\'></div>'+
'</div>'+
'<center>'+
'<div id="location" class="subhead" >'+
'  '+
'  <select id="location_selection" onchange="show_service()">'+
'    <option disabled selected>Choose Your Current Locality</option>'+
'    <option>TILKAMANJHI</option>'+
'    <option>SABOUR</option>'+
'    <option>SURKIKAL</option>'+
'    <option>TULSI NAGAR BANK COLONY</option>'+
'  </select>'+
'  </div>'+
'</div> '+
'</center>'+
'<center><div id="ser_load"><img src="images/25.gif"></div></center>'+
'<div class="row" id="service_layout">'+
'  <center>'+
'  <div class="col-md-3" onclick="get_name(\'HOME SALON\')">'+
'    <img id="ser"  src="images/cut.png">'+
'    <label style="text-align: center;" class="sub">Home Salon</label>'+
'</div>'+
'<div class="col-md-3" onclick="get_name(\'PAINTER\')">'+
'  <img id="ser" src="images/painter.png">'+
'  <label style="text-align: center;" class="sub">Painter</label>'+
'</div>'+
'<div class="col-md-3" onclick="get_name(\'MAKEUP\')">'+
'  <img id="ser" src="images/makeup.png">'+
'  <label style="text-align: center;" class="sub">Makeup</label>'+
'</div>'+
'<div class="col-md-3" onclick="get_name(\'PHOTO-SHOOT\')">'+
'  <img id="ser" src="images/photo.png" >'+
'  <label style="text-align: center;" class="sub">Photo-shoot</label>'+
'</div>'+
'<div class="col-md-3" onclick="get_name(\'HOME TUTOR\')">'+
'<img id="ser" src="images/pencil.png">'+
'<label style="text-align: center;" class="sub">Home Tutor</label>'+
'</div>'+
'<div class="col-md-3">'+
'<img id="ser" src="images/repair.png" onclick="get_name(\'MECHANIC\')">'+
'<label style="text-align: center;" class="sub">Mechanic</label>'+
'</div>'+
'<div class="col-md-3">'+
'  <img id="ser" src="images/soldering.png" onclick="get_name(\'TECHNICIAN\')">'+
'  <label style="text-align: center;" class="sub">Technician</label>'+
'</div>'+
'<div class="col-md-3">'+
'<img id="ser" src="images/taxi.png" onclick="get_name(\'CAR RENTAL\')">'+
'<label style="text-align: center;" class="sub">Cab Rental</label>'+
'</div>'+
'<div class="col-md-3">'+
'<img id="ser" src="images/wrench.png" onclick="get_name(\'PLUMBER\')">'+
'<label style="text-align: center;" class="sub">Plumber</label>'+
'</div>'+
'</div></center>'+
'</section> '+
''+
'<div id="preloader">'+
'<div id="loader">'+
'<div class="line-scale-pulse-out">'+
'<div></div>'+
'<div></div>'+
'<div></div>'+
'<div></div>'+
'<div></div>'+
'</div>'+
'</div>'+
'</div>'+
'<!------------------------------------------------------------------------------------------------------------------------------------------------------------->'+
'<div id="myModal" class="modal">'+
'  <div class="modal-content"> '+
'    <div class="row" style="padding:30px 7px 0px 7px ;"> '+
'     <label class="labreg" id="service_name_db"></label> <span class="close"><button  id="closebtn">CLOSE</button></span>   '+
'      </div>'+
'    <div class="row" style="padding: 0;">'+
'      <div class="col-md-6">'+
'      </div>'+
'     </div>'+
'    </div>'+
'  </div>';
	
document.getElementById('service_render').innerHTML = myvar;