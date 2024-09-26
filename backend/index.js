// Implement a GET API in Node.js that takes two numbers as parameters,
//  adds them, and sends the result.Create validations around input parameters to accept numeric values.
//  Additionally, incorporate authentication using middleware.



const bodyParser = require('body-parser')

const express = require('express')


const app = express()
app.use(bodyParser.json())


//authmiddleware

const auth=(req,res,next)=>{
const {num1,num2}=req.body
if((num1+num2)==2){
    next()
}else{
    throw  Error('Authentication failed!',400)
}

}


app.use(auth)


app.post('/add-num', (req, res) => {
    const {num1,num2}=req.body
    try{
        let num3=num1+num2
        res.json(num3)

    }catch(error){
res.json({
    error:error
})
    }
 

})

app.listen(5000, () => {
    console.log('server is running')
})