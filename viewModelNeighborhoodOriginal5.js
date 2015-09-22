var dataLocations = {
  locations:[
    {
      position: {lat: 40.438169, lng: -3.687462},
      title: 'Restaurant 1',
      tags: ['restaurant']
    },
    {
      position:  {lat: 40.436407, lng: -3.690125},
      title: 'Restaurant 2',
      tags: ['restaurant']
    },
    {
      position:  {lat: 40.435680, lng: -3.689642},
      title: 'Coffee 1 ',
      tags: ['coffe']
    },
  ]
};
function buildLocation(searchLocation){
var self = this;
 
    console.log("lista  ");
    self.nameLocation = searchLocation;
  }
 
function  NeighborhoodModel() {
  var self = this;
  self.map = undefined;

  console.log("initialize");
  console.log(" size dataLocations locations "+ dataLocations.locations.length);
  self.isFocused=ko.observable();

  self.listLocatons = ko.observableArray([]);
  console.log("initialize1");
  self.searchLocation= ko.observable("");
  self.locations = ko.observableArray();
  self.nameLocation = ko.observable(" ");

 



  self.loadList = function() {
    console.log("en load ");
    self.locations = ko.observableArray();

    for (var i=0; i<dataLocations.locations.length; i++) {
      console.log("construyendo  size locations  antes "+self.locations().length);
      self.locations.push(new buildLocation(dataLocations.locations[i].title));
      console.log("construyendo  size locations  despues "+self.locations().length);
    }
  };

  self.focusHandler = function(){
     console.log("the input was focused ");
     self.loadList();
   };

   self.blurHandler = function() {
     console.log("the input lost focus ");
   };

 for (var i=0; i<dataLocations.locations.length; i++) {
    console.log("construyendo  size locations  antes "+self.locations().length);
    self.locations.push(new buildLocation(dataLocations.locations[i].title));
    console.log("construyendo  size locations  despues "+self.locations().length);
  }

  self.searcherLocations = function() {
    console.log("search Function");
    console.log(" size locations "+self.locations().length);

    console.log(" size cadena  "+self.searchLocation());
	console.log(" size locations "+self.locations().length);

    var cadena = self.searchLocation();
	var nativeArray = ko.observableArray();
	console.log(" size nativeArray antes inicializacion ");
	console.log(" size nativeArray antes inicializacion size  "+nativeArray().length);
	for (var i=0; i< self.locations().length;i++) {
	     console.log(" fuera de bucle inicializacion  "+self.locations()[i].nameLocation);
	    		  nativeArray.push(new buildLocation(self.locations()[i].nameLocation));
		   
   }
   console.log(" fuera de bucle inicializacion  "+self.locations()[i]);
    	  console.log(" size nativeArray antes "+nativeArray().length);

    self.locations.removeAll();
	console.log(" despues borrar "+self.locations().length);

    console.log(" size nativeArray despues "+nativeArray().length);

    for (var i=0; i<nativeArray().length;i++) {
	
      console.log("dentro de bucle cadena  1"+nativeArray()[i].nameLocation);
      var existe = nativeArray()[i].nameLocation.toLowerCase().indexOf(cadena.toLowerCase())

      if (existe > -1) {
        console.log("existe "+existe);
        self.locations.push(new self.buildLocation(nativeArray[i].nameLocation));
      }
      else {
        console.log("no existe "+existe);
      }
    }
	console.log(" final de bucle "+self.locations().length);
	
  }

}

 // Activates knockout.js
ko.applyBindings(new NeighborhoodModel());