var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/restaurant',{ useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',() => console.log("Connected to Database"));

// app.get('/data', (req, res) => {
//   db.collection('featutredItems').find().toArray((err, result) => {
//     if (err) {
//       console.error('Error retrieving data from MongoDB:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.json(result);
//   });
// });


app.post("/sign_up",(req,res)=>{
    var name = req.body.fullName;
    var email = req.body.email;
    var phno = req.body.phoneNumber;
    var password = req.body.password;
    console.log(name);
    console.log(email);

    var data = {
        "_id": email,
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

    if(name != "" || email != "" || phno != "" || password != "")
    {db.collection('users').findOne({ _id: email }, (err, doc) => {
        if (err) throw err;

        // Check if the document was found
        if (doc) {
          console.log(`Document with ID ${email} found:`, doc);
        //   res.status(400).send({ message: 'User already exists!' });
        // alert('Sign up successful!');
        //   app.get('/alert', (req, res) => {
        //     console.log('Alert')
        //     res.send({ message: 'Hello, this is an alert!' });
        // });

        } else {
          console.log(`Document with ID ${email} not found.`);
          db.collection('users').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
            return res.redirect('signup_success.html')
        });
        }

        // Close the connection
        // client.close();

      });} else {
        console.log('Not Accept');
        return res.redirect('signup_success.html');
      }

    // db.collection('users').insertOne(data,(err,collection)=>{
    //     // if(err){
    //     //     throw err;
    //     // }
    //     console.log("Record Inserted Successfully");
    // });



})


app.post("/sign_in",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "email" : email,
        "password" : password
    }

    console.log(data)
    db.collection('users').findOne({ _id: email }, (err, doc) => {
        if (err) throw err;
        // Check if the document was found
        if (doc) {
          console.log(`Document with ID ${email} found:`, doc);
        } else {
          console.log(`Document with ID ${email} not found.`);
        }
        // Close the connection
        // client.close();

      });

    // db.collection('users').insertOne(data,(err,collection)=>{
    //     // if(err){
    //     //     throw err;
    //     // }
    //     console.log("Record Inserted Successfully");
    // });

    return res.redirect('signup_success.html')

})

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});

// app.get('/',(req,res)=>{
//   return res.redirect('./index.html');
// });

app.get('/api/users',(req,res)=> {
  // db.collection('featuredItems').find().toArray((err, data) => {
  //   if(err) {
  //     console.error('Error fetching data from MongoDB:', err);
  //     res.status(500).send('Internal Server Error');
  //     return;
  //   }

  //   if (!data || data.length === 0) {
  //     console.log('No data found in MongoDB');
  //     res.status(404).send('No data found');
  //     return;
  //   }

  //   res.json(data);
  // });
  users = [{
      id: '123',
      name: 'Vikram'
    },
    {
      id:'456',
      name: 'Rahul'
    },
    {
      id: '789',
      name: 'Ajay'
    }
  ];

  res.json(users);
});

app.get('/login', (req, res) => {
    // Render the login page
    return res.redirect('./index2.html');
  });


console.log("Listening on PORT 3000");