const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Amrit:Raj123456@clustor0.gah4dwe.mongodb.net/task-manager?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModified: false,
})

