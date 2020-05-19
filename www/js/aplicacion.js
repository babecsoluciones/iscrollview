var tURL = "https://cors-anywhere.herokuapp.com/http://app.vivirenpurpura.mx/app/app-01-01.php";
function iniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  
                  if(data.exito==1)
                  {
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("usuario", data.usuario);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                       window.location="index.html";
                  }
                  else
                  {
                          var mensaje="";
                     
                         mensaje += (data.error ? data.error : data.errores)+"\n";
                     
                          alert(mensaje);
                
                //document.getElementById('divErrores').innerHTML = "<div class=\"alert alert-danger\"><strong>"+data.error+"</div>";
                //$('#resError').modal('show');
                //setTimeout(function(){
                //$('#resError').modal('hide');
                //},2000);
                          //alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                  }
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function reiniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
    
            localStorage.removeItem("codigousuario");
            localStorage.removeItem("codigopromotoria");
            localStorage.removeItem("codigotienda");
            localStorage.removeItem("tiposimagenes");
            localStorage.removeItem("productos");
            localStorage.removeItem("correo");
            localStorage.removeItem("password");
          
          $.ajax({
              type: "POST",
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                 
                  
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("codigopromotoria", data.codigopromotoria);
                      localStorage.setItem("codigotienda", data.codigotienda);
                      localStorage.setItem("tiposimagenes", data.tiposimagenes);
                      localStorage.setItem("productos", data.productos);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                      window.location="index.html";
                  
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function cerrarSesion()
{
          if(confirm("¿Deseas cerrar la sesión?"))
              {
                localStorage.clear();
                validarSesion();
              }
          
        }
function validarSesion()
{
    if(localStorage.getItem("codigousuario"))
       {
           var cmbUsuario = document.querySelectorAll("[id^=eCodUsuario]");
           cmbUsuario.forEach(function(nodo){
               nodo.value = localStorage.getItem("codigousuario");
           });
            document.getElementById('tUsuario').innerHTML = localStorage.getItem("usuario");
    }   
    else
        {
            window.location="login.html"; 
        }
    
}

function enviarDatos()
{           
            var obj = $('#frmUsuario').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      alert("Informacion almacenada exitosamente");
                      setTimeout(function(){ window.location="index.html"; }, 500);
                      
                  }
                  else
                      {
                         
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

function cargarInicio()
{
      var obj = $('#frmInicio').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var listInicio = document.getElementById('ini-con');
          
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  listInicio.innerHTML = data.tHTML;
                  $("#ini-con").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        
}

function cargarBlog()
{
      var obj = $('#frmBlog').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var listBlog = document.getElementById('blg-con');
          var syncAlertas = document.getElementById('syncAlert');
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  listBlog.innerHTML = data.tHTML;
                  $("#blg-con").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        
}

function cargarNoticias()
{
      var obj = $('#frmNoticias').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var listBlog = document.getElementById('not-con');
          var syncAlertas = document.getElementById('syncAlert');
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  listBlog.innerHTML = data.tHTML;
                  $("#not-con").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        
}

function verPublicacion(codigo)
{
    localStorage.setItem("codigopublicacion", codigo);
    document.location="blog.html";
}

function cargarPublicacion()
{
    document.getElementById('codigo').value = localStorage.getItem("codigopublicacion");
    
    var obj = $('#frmDetalle').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var listBlog = document.getElementById('not-det');
          var syncAlertas = document.getElementById('syncAlert');
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  listBlog.innerHTML = data.tHTML;
                  $("#not-det").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
    
}