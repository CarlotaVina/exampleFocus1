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
 
      self.nameLocation = searchLocation;
  }
 
function  NeighborhoodModel() {
  var self = this;
  self.map = undefined;
  self.isFocused=ko.observable();
  self.listLocatons = ko.observableArray([]);
   self.searchLocation= ko.observable("");
  self.locations = ko.observableArray();
  self.nameLocation = ko.observable(" ");
  self.loadList = function() {
    self.locations = ko.observableArray();
    for (var i=0; i<dataLocations.locations.length; i++) {
      self.locations.push(new buildLocation(dataLocations.locations[i].title));
      
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
   
    self.locations.push(new buildLocation(dataLocations.locations[i].title));
    
  }

  self.searcherLocations = function() {
    
    var cadena = self.searchLocation();
	var nativeArray = ko.observableArray();
	
	for (var i=0; i< self.locations().length;i++) {
    
	    		  nativeArray.push(new buildLocation(self.locations()[i].nameLocation));
		   
   }
   
    self.locations.removeAll();
	
    for (var i=0; i<nativeArray().length;i++) {
	
     
      var existe = nativeArray()[i].nameLocation.toLowerCase().indexOf(cadena.toLowerCase())

      if (existe > -1) {
        console.log("exist "+existe);
        self.locations.push(new buildLocation(nativeArray()[i].nameLocation));
      }
      else {
        console.log("not exist "+existe);
      }
    }
	console.log(" end loop "+self.locations().length);
	
  }

}

 // Activates knockout.js
ko.applyBindings(new NeighborhoodModel());