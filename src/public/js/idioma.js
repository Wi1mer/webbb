var lista = document.getElementById("idioma");
var idioma = localStorage.getItem("idioma");

//------------------------------------------------------------------------
var About_le = {
  en: "About",
  es: "Acerca de"
};

if (idioma) {

  lista.value = idioma;
  document.getElementById("About_l").innerHTML = About_le[idioma];
} else {

  document.getElementById("About_l").innerHTML = About_le[lista.value];
}
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var About_2le = {
    en: "About",
    es: "Acerca de"
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("About_2l").innerHTML = About_2le[idioma];
  } else {
  
    document.getElementById("About_2l").innerHTML = About_2le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Home_le = {
    en: "Home",
    es: "Inicio"
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("Home_l").innerHTML = Home_le[idioma];
  } else {
  
    document.getElementById("Home_l").innerHTML = Home_le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Follow_le = {
    en: "Follow",
    es: "Seguir"
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("Follow_l").innerHTML = Follow_le[idioma];
  } else {
  
    document.getElementById("Follow_l").innerHTML = Follow_le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Upload_le = {
    en: "Upload",
    es: "Subir"
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("Upload_l").innerHTML = Upload_le[idioma];
  } else {
  
    document.getElementById("Upload_l").innerHTML = Upload_le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Language_le = {
    en: "Language: ",
    es: "Idioma: "
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("Language_l").innerHTML = Language_le[idioma];
  } else {
  
    document.getElementById("Language_l").innerHTML = Language_le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Categories_le = {
    en: "Categories",
    es: "Categorias"
  };
  
  if (idioma) {
  
    lista.value = idioma;
    document.getElementById("Categories_l").innerHTML = Categories_le[idioma];
  } else {
  
    document.getElementById("Categories_l").innerHTML = Categories_le[lista.value];
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
var Subscriptions_le = {
  en: "Subscriptions",
  es: "Suscripciones"
};

if (idioma) {

  lista.value = idioma;
  document.getElementById("Subscriptions_l").innerHTML = Subscriptions_le[idioma];
} else {

  document.getElementById("Subscriptions_l").innerHTML = Subscriptions_le[lista.value];
}
//------------------------------------------------------------------------



var _lang = $("#idioma").val();

$("select").on("change", function() {
  cambiaId();
  location.reload();
});

function cambiaId() {
  _lang = $("#idioma").val();
  //alert(_lang);
  localStorage.setItem("idioma", _lang)

}
