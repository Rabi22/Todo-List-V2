const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();
const app = express();

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

////////////////mongo ////////////////////////////////////////
const mongoose = require('mongoose');

// connect to atlas using environment variable
mongoose.connect(process.env.mongodb_url)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

let todoSchema = new mongoose.Schema({
    task : {
        type : String,
        required: true
    }
})

const Todo = mongoose.model('Todo', todoSchema);

// async function insert(){
//     try{
//         const todo = new Todo({ task: 'Sample Task' , name: 'Sample Name' });
//         await todo.save();
//         console.log('Task inserted successfully');
//         } catch(err){
//             console.log('Error inserting task:', err);
//         } finally {
//             mongoose.connection.close();
//         }
// }

//     insert();

app.get('/', async (req,res) => {
    try{
        const items = await Todo.find({});
        console.log('Current tasks:', items);
        res.render('index', { ejes: items });
    }catch(err){
        console.log('Error fetching tasks:', err);
        res.status(500).send('Error fetching tasks');
        mongoose.connection.close();
    }
})

app.post('/',async (req,res) => {
    const input_data = req.body.todo_input;
        const items = new Todo({
        task: input_data 
    });
    items.save()
    res.redirect('/');
    console.log('Added item:', input_data);
})

app.delete('/task/:id', async (req, res) => {
    const deleteItem = req.params.id;
    try {
        await Todo.findByIdAndDelete(deleteItem);
        console.log('Item deleted successfully');
    } catch (err) {
        console.log('Error deleting item:', err);
    }
    res.redirect('/');
});

app.put('/task/:id', async (req, res) => {
    const updateItem = req.params.id;
    const newTask = req.body.edit_item;
    try {
        await Todo.findByIdAndUpdate(updateItem, { task: newTask },{new: true});
        // if i print data of updateItem , then it will show the old data
        // if i print data of newTask , then it will show the new data
        console.log('Item updated successfully');
    } catch (err) {
        console.log('Error updating item:', err);
    }
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
