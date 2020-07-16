const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const PORT = process.env.PORT || 5000

const app = express()

const conn = async () => {
  try{
    await mongoose.connect(keys.dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connected to mongodb')
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
  }catch{}
}
  
conn()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

