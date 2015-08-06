Tasks = new Ground.Collection(null);
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, { sort: { createdAt : -1 }});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var task_text = event.target.text.value;
      var date = event.target.date.value;


      // Insert a task into the collection
      Tasks.insert({
        text: task_text,
        int_date: date,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
      event.target.date.value = "";

      Tasks.empty();


    }
  });

}
