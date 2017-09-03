# Vending-Machine-Sequelize
Here I made a SQL databases using joins, the ORM Sequelize and Restful APIs.
Send back JSON as the response for the Front-end Dev to do what they please with the Api's.  

I have two Tables in a SQL Database, 1 for the Items, and another for the Purchases.  
  - The Items table covers the Name, Cost of item, and Quanitiy of that Item in the Vending Machine. 
  - The Purchase table covers Purchase (time and date), Total money in the Vending Machine, and Change back for the buyer. 

The following are my API endpoints. 

  - GET /api/customer/items - get a list of items
  - POST /api/customer/items/:itemId/purchases - purchase an item
  - GET /api/vendor/purchases - get a list of all purchases with their item and date/time
  - GET /api/vendor/money - get a total amount of money accepted by the machine
  - POST /api/vendor/items - add a new item not previously existing in the machine
  - PUT /api/vendor/items/:itemId - update item quantity, description, and cost
