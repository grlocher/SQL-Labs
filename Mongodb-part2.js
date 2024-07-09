//Add a person to the collection. You pick the data, but they should have an empty array for children.
db.people.insertOne({first_name: 'Gabriel', last_name: 'Locher', email: 'grandcircus.edu', gender: 'Male', age: 30, state: 'Michigan', children: []});


//Add another person. They should have at least two children.
db.people.insertOne({first_name: 'Grant', last_name: 'Chirpus', email: 'grandcircus1.edu', gender: 'Female', age: 300, state: 'Michigan', children: [{name: 'Benjamin', age: 5}, {name: 'Jon', age: 2}]});


//Update one person named Clarence. He moved from North Dakota to South Dakota.
db.people.updateOne({first_name: 'Clarence'}, {$set: {state: 'South Dakota'}});


//Update Rebecca Hayes. Remove her email address.
db.people.updateOne({first_name: 'Rebecca'}, {$unset: {email: 1}});


//Update everyone from Missouri. They all had a birthday today, so add one to their age. (expect 4 matches)
db.people.updateMany({state: 'Missouri'}, {$inc: {age: 1}});


//Jerry Baker has updated information. Replace with a new document:
//{ first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
db.people.replaceOne({first_name: 'Jerry', last_name: 'Baker'}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] });


//Delete Wanda Bowman.
db.people.deleteOne({first_name: 'Wanda', last_name: 'Bowman'});


//Delete everyone who does not have an email address specified. (expect 36 matches - maybe more depending what you added above)
db.people.deleteMany({email: null});


//Create a single field index on the email field.
db.people.createIndex({email: 1});


//Create a compound index on the first_name and last_name fields.
db.people.createIndex({first_name: 1, last_name: 1});


//Add several documents to a new submissions collection. Do it all in one command. (Remember, MongoDB will create the collection for you. Just start adding documents.)
//title: "The River Bend", upvotes: 10, downvotes: 2, artist: <ID of Anna Howard>
//title: "Nine Lives", upvotes: 7, downvotes: 0, artist: <ID of Scott Henderson>
//title: "Star Bright", upvotes: 19, downvotes: 3, artist: <ID of Andrea Burke>
//title: "Why Like This?", upvotes: 1, downvotes: 5, artist: <ID of Steven Marshall>
//title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: <ID of Gerald Bailey>
db.submissions.insertMany([
    {title: "The River Bend", upvotes: 10, downvotes: 2, artist: db.people.findOne({first_name: 'Anna', last_name: 'Howard'})._id},
    {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: db.people.findOne({first_name: 'Scott', last_name: 'Henderson'})._id},
    {title: "Star Bright", upvotes: 19, downvotes: 3, artist: db.people.findOne({first_name: 'Andrea', last_name: 'Burke'})._id},
    {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: db.people.findOne({first_name: 'Steven', last_name: 'Marshall'})._id},
    {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: db.people.findOne({first_name: 'Gerald', last_name: 'Bailey'})._id}
]);


//Add 2 upvotes for "The River Bend".
db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}});


//Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)
db.submissions.updateMany({upvotes: {$gte: 10}}, {$set: {round2: true}});
