// List all people
db.people.find();

// Count all people
db.people.count();

// List all people in Arizona
db.people.find({state: 'Arizona'}).count();

//List all males in Arizona
db.people.find({$and: [{state: 'Arizona'}, {gender: 'Male'}]}).count();

//List all people in Arizona plus New Mexico
db.people.find({$or: [{state: 'Arizona'}, {state: 'New Mexico'}]}).count();

//List all people under age 40
db.people.find({age: {$lt: 40}}).count();

//List all females in Florida between the ages of 40 and 45 (inclusive)
db.people.find({state: 'Florida', gender: 'Female', age: {$gt: 40}, age: {$lt: 45}}).count();

//List people whose first name starts with 'H'
db.people.find({first_name: /^H/}).count();

//List all people in Michigan, sorted by first name
db.people.find({state: 'Michigan'}).sort({first_name: 1}).count();

//List all people who live in Virginia or are named Virginia
db.people.find({$or: [{state: 'Virginia'}, {name: 'Virginia'}]});

//List the names of people under age 30. Only display their first and last name
db.people.find({age: {$lt: 30}}, {first_name: true}, {last_name: true}).count();

//List all people in Montana. Display all information except age
db.people.find({state: 'Montana'}, {age: false}).count();

//List the email addresses of people with a ".edu" email. Only display the email
db.people.find({email: /\.edu/}, {email: true}).count();
