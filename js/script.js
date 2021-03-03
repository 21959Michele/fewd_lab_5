var restaurant = {
    // Object properties
    name: 'Fresh',
    tables: 100,
    booked: 33,
    fireplace: true,
    tableTypes: ['single', 'couple', 'group', 'party'],
    checkAvailablity: function() {
        return this.tables - this.booked;
    }
};


var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var eltables = document.getElementById('tables');
eltables.textContent = restaurant.checkAvailablity();

var display2 = '<p><b>page title: </b>' + document.title + '<br />';
display2 += '<b>page address: </b>' + document.URL + '<br />';
display2 += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = display2;

var changeName = restaurantName.toUpperCase();
