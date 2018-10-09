var Parse = require('parse');
Parse.initialize("SistemaDeControlDeJuguel");
Parse.serverURL = 'http://192.168.1.15:1337/parse'

var Equipos = Parse.Object.extend("Equipos");
var query = new Parse.Query(Equipos);
query.equalTo("Escaneos", true);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " computers.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      alert(object.id + ' - ' + object.get('NombreDeRed'));
       console.log(results);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});