
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 4000



const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', (req, res) =>{
  res.json(users)
})

app.get('/users/1', (req, res) =>{
  res.json(users[0])
})

// app.post('/users', (req, res) => {
//   let newUser = {
//     _id: 6,
//     name: "Mogar The Destroyer",
//     occupation: "Killer Orc",
//     avatar:
//       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daz3d.com%2Forc-hd-for-genesis-8-male&psig=AOvVaw2gy5I_M_uJ3_IOp63UDEGT&ust=1607980046835000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDCrYfvy-0CFQAAAAAdAAAAABAE",
//   };
//   users.push(newUser);
//   let last = users.length - 1;
//   return res.json(users[last]);
// })

app.put('/users/1', (req, res) =>{
  users[0].name = "Valeera Sanguinar";
  return res.json(users)
})

app.delete('/users/1', (req, res) => {
  users.splice(0, 1);
  res.send("deleted");
});

app.post('/users', (req, res) => {
  let counter = users.length
  let newUser = req.body;
  newUser._id = counter + 1;
  users.push(newUser);
  let last = users.length - 1;
  return res.json(users[last]);
})



/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))