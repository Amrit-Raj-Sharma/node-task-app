    // Find One document
    // db.collection('users').findOne({ _id: new ObjectID('6411ab923fe36e8d18fd1103') }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to find user!')
    //     }

    //     console.log(user)
    // })

    // Find Many documents
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if(error){
    //         return console.log('Unable to find!')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if(error){
    //         return console.log('Unable to find!')
    //     }
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('6411ad7b9f6b198f5c9ddd0e') }, (error, task) => {
    //     if(error){
    //         return console.log('Unable to find task!')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if(error){
    //         return console.log('Unable to find!')
    //     }
    //     console.log(tasks)
    // })

    // {_id: new ObjectID('6411ad7b9f6b198f5c9ddd0d')},
    //     {_id: new ObjectID('6411ad7b9f6b198f5c9ddd0e')}

        // // Update one ducument
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('6411ab923fe36e8d18fd1103')
    // }, {
    //     // $set: {
    //     //     name: 'Amrit Raj'
    //     // }

    //     $inc: {
    //         age: 1
    //     }
    // }
    // )

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log('Error', error)
    // })

    //  // Update Many ducument
    //   db.collection('tasks').updateMany(
    //     {
    //         completed: false
    //     }, 
    //     {
    //     $set: {
    //         completed: true
    //     }
    // }
    // ).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log('Error', error)
    // })


    // const me = new User({
//     name: '  Raj ',
//     email: 'raj@mail.com',
//     password: 'raj@1234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch(error => {
//     console.log('Error!', error)
// })


// const task = new Task({
//     description: 'Go to market.     ',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(error => {
//         console.log('Error!', error)
// })


// app.use((req, res, next) => {
//     if(req.method === "GET"){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })


// const User = require('./models/user')

// const main = async () => {

//     // const task = await Task.findById('641970d465a4615c68c02f4c')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('64196ff765a4615c68c02f4a')
//     await user.populate('userTasks').execPopulate()
//     console.log(user.userTasks)
// }

// main()



// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word Document!'))
//         }

//         cb(undefined, true)
//     }
// })

// const errorMiddleWare = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })