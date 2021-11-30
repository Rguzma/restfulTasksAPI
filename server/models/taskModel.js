const mongoose = require( 'mongoose' );
const tasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        required:true
    },
    // updated_at:{
    //     type:Date,

    // }
},{
            timestamps:true
     
    
});

const Task = mongoose.model('tasks', tasksSchema);

const TaskModel = {
    save: function(createdTask){
        return Task.create(createdTask);
    },
    findAll: function(){
        return Task.find();
    },
    findTask: function(id){
        console.log(Task.findById(id));
        return Task.findById(id);
    },
    findandUpdate: function(updatedTask, id){
        // console.log("break the object: "+updateMongoose.mName+" "+updateMongoose.age);
        return Task.findByIdAndUpdate({_id:id}, {$set: {title: updatedTask.title, description:updatedTask.description, completed:updatedTask.completed}});
    },

    delete: function(id){
        return Task.findOneAndRemove({_id:id});
    }

}


module.exports = {
    TaskModel
};