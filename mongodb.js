const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb+srv://Amrit:Raj123456@clustor0.gah4dwe.mongodb.net/?retryWrites=true&w=majority'
const database = 'task-manager'


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(database)

    // // Delete Many document
    // db.collection('users').deleteMany({
    //     age:26
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Renew inspection'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})