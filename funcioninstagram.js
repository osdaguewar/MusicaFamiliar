function getInstagramPhotos() {
    // Reemplaza "ACCESS_TOKEN" y "USER_ID" con tus valores de access token y user id
    var accessToken = "ACCESS_TOKEN";
    var userId = "USER_ID";
    var instagramUrl = "https://api.instagram.com/v1/users/" + userId + "/media/recent?access_token=" + accessToken;
    
    $.get(instagramUrl, function(data) {
      // Recorre cada publicación
      data.data.forEach(function(post) {
        // Obtiene la url de la imagen y la agrega a un elemento <img>
        var imgUrl = post.images.standard_resolution.url;
        var imgElement = $("<img src='" + imgUrl + "'>");
        
        // Agrega el elemento <img> a la página web
        $("#instagram-photos").append(imgElement);
      });
    });
  }
  
  // Llama a la función getInstagramPhotos cuando la página web se haya cargado por completo
  $(document).ready(function() {
    getInstagramPhotos();
  });
  