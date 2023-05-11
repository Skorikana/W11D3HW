//Load express 
const express = require("express")
const foods   = require("./models/foods")
const flowers = require("./models/flowers")
const countries = require("./models/Countries")
const authors = require("./models/Authors")


//Instantiate our express
const app = express();

//Other Variables
const port =3001;

//Data
const answers = ["It is certain", "It is decidedly so","Without a doubt", "Yes definitely",
              "You may rely on it", "As I see it yes","Most likely", "Outlook good","Yes", "Signs point to yes", ]

//Mount middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());                        


//10 routes
app.get('/', (req, res) => {
    res.send("<h1>Welcome Everyone..Do checkout the other routes!!!</h1>")
  })
  
app.get('/question', (req, res) => {
    res.send("<h1>Do you want to know how to do programming?</h2>");
  })

app.get("/magic",(req,res) =>{
    res.send("<h1>Ask the Magic 8 ball a question in the route to get an answer</h1>")
})

app.get("/magic/:question" ,(req,res) =>{
    console.log(req.params);
    res.send("<h3>Your Question:</h3>" + req.params.question + "<h3>Answer:</h3>" + answers[Math.floor(Math.random() * answers.length)])
})

app.get("/greeting" ,(req,res) =>{
  res.send("<h1>Hello, Stranger!!!Welcome to the page</h1>"+"Kindly add your name to the route")
  })
     
app.get("/greeting/:firstname" ,(req,res) =>{
    console.log(req.params);
    res.send("<h1>Wow! Hello there, <h1>" +req.params.firstname +"!!!"+ "<h1>It's good to see you!</h1>")
})

app.get('/flowers', (req, res) => {
    res.render('Show', {flowers: flowers})
  })

app.get('/foods', (req, res) => {
    res.render('index', {foods: foods})
  })

app.get('/countries', (req, res) => {
    res.render('indexcountry', {countries: countries})
  })  

  app.get('/Authors', (req, res) => {
    res.render('Showauthor', {authors: authors})
  })

  
//Tell express to listen
app.listen(port,() =>{
console.log(`Listening on ${port}`)

})
