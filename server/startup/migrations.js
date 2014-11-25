// Migrations help you keep data consistency.
MigrationsEnabled = false;
Migrations = new Meteor.Collection('migrations');

Meteor.startup(function() {
    if(MigrationsEnabled) {
        allMigrations = Object.keys(migrationMethods);
        _.each(allMigrations, function(migrationName)) {
            runMigration(migrationName);
        }
    }
});

var runMigration = function(migrationName) {
    var migration = Migrations.findOne({name: migrationName});

    if(migration) {
        if(typeof migration.finishedAt === 'undefined') {
            console.log('!!! Found incomplete migration "'+ migrationName +'", removing and running again.');
            Migrations.remove({name: migrationName});
        }else{
            // do nothing
            return
        }
    }

    console.log("//----------------------------------------------------------------------//");
    console.log("//------------//    Starting "+migrationName+" Migration    //-----------//");
    console.log("//----------------------------------------------------------------------//");
    Migrations.insert({name: migrationName, startedAt: new Date(), completed: false});

    var itemsAffected = migrationMethods[migrationName]() || 0;
    Migrations.update({name: migrationName}, {$set: {finishedAt: new Date(), completed: true, itemsAffected: itemsAffected}});

    console.log("//----------------------------------------------------------------------//");
    console.log("//------------//     Ending "+migrationName+" Migration     //-----------//");
    console.log("//----------------------------------------------------------------------//");
};

var migrationMethods = {

    // All migration methods will go here...
    // Example: renaming a field
    headlineToTitle: function() {
        var i = 0;
        Posts.find({title: {$exists: false}}).forEach(function(post) {
            i++;
            console.log("Post: "+ post.headline +" "+ post.title);
            Posts.update(post._id, {$rename: {'headline': 'title'}}, {multi: true, validate: false});
            console.log("--------------");
        });
        return i;
    }

};