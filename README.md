# Meteor Boilerplate

Meteor boilerplate is a simple layout for building small to
large scale meteor applications. I use this layout for almost
all of my projects. It's simple to setup and use right away
without having to worry about how to organize your project.

## How To Use

1. Clone the Repository.
2. Remove the remote origin after cloning.
3. Start building your project.

## What is everything?

Here is a detailed description of most folders, files, etc...

Since files are separated between client/ and server/ you do not need to use Meteor.isServer() or Meteor.isClient().

- .meteor - Meteor Files (packages, db, etc...)

#### Client Side
- **client**: Client Specific Files
- **client/config**: Spacebars helpers, helper functions, and other client related things.
- **client/lib**: Libraries for the client side.
- **client/modules**: Templates that are frequently reused(navigation, header, footer)
- **client/startup**: Things to do when the client starts up. Maybe start a timer.
- **client/stylesheets**: Location for all .css .less .sass files to go.
- **client/views**: All the templates
- **client/views/application**: Application specific templates(Error pages, layout, not found, etc...)

#### Server Side
- **server**: Server Specific Files
- **server/fixtures**: A place for fixture data. Dummy data and such can go in here. OR default data for your application.
- **server/lib**: Server libraries for things like APIs, helper methods, etc...
- **server/publications**: Publications can be spread out across files because sometimes they can get quite large as I have seen.
- **server/startup**: Server startup files. This would be for things like migrations, application setup, configuration for Meteor account services.

#### Other Stuff
- **lib**: Global helper methods or global libraries to be used across server and client.
- **model**: This is where collections should always go unless you are creating collections dynamically then it can go somewhere else.
- **routes**: Route configuration and routing goes here.

### Contributors
None yet, but feel free to submit a PR and I'll consider your request.