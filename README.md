#MEAN potions

[Live Site](https://mean-pots.herokuapp.com/)

This is a potion shopping app built on the MEAN stack.  Users are presented with inventory that they may filter based on category and/or keyword. Potions can be added to the 'bag of holding' (cart) and then checked out.

##Front-End Stack
+ AngularJS
+ HTML/CSS

##Back-End Stack
+ NodeJS
+ ExpressJS
+ MongoDB
  + MongoJS as a query builder


##Thoughts/Concerns/Challenges
+ Challenges
  + Juggling multiple scopes in the view had me stuck for awhile.  I had to realize the power of a directive in a situation like this and learn to properly pass in scopes.
+ Thoughts
  + Predicting the $digest cycle was another obstacle, and I am wondering if using testing with Protractor would help.
  + I would still like to add some custom filters to the potion info, such as for currency.
