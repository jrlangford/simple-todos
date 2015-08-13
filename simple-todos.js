Tasks = new Ground.Collection(null);
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, { sort: { updatedAt : 1 } });
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var task_text = event.target.text.value;
      var freq = event.target.freq.value;


      // Insert a task into the collection
      Tasks.insert({
        text: task_text,
        frequency: freq,
        updatedAt: new Date() // current time
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
      event.target.freq.value = "";

    },

    "click .person": function (event) {
      var id = event.id
      Tasks.update( this._id, {
        $set : { updatedAt : new Date() }
      });

    },

    "click .clear": function () {
      Tasks.clear()
    }

  });


}



