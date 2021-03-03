  
var restaurant = {
  name : 'Fresh',
  tables : 100,
  booked : 33
};

restaurant.fireplace = true;
restaurant.carpark = false;
delete restaurant.booked;

var elName = document.getElementById('restaurantName'); 
elName.textContent = restaurant.name;                   

var elCarpark = document.getElementById('carpark');      
elCarpark.className = restaurant.carpark;                     

var elFireplace = document.getElementById('fireplace');        
elFireplace.className = restaurant.fireplace; 