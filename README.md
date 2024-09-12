[Note] This guide is half a CompClub Guide for Beginners and half a guide to replicate this project
[NOTE] This code requires the use of Node v20.11 up. It may not work on the newest Node version (v22.8.0). If so, utilise a previous version.

# Guide to how to create this Discord Bot
BoilerPlate Code website: https://discordjs.guide/#before-you-begin
DiscordJs Documentation: https://discord.js.org/docs/packages/builders/1.8.2

## Working with a local Database
We're not going to store information through a database service such as MongoDb or MySQL as that could take a bit too much time but feel free to have a look into that in your spare time.

Instead, we're going to want to store our data locally and we're going to do that by storing our data within a file. To ensure that this data is easily readable and storable, we want to utilise a consitent (and ideally universal) method for storing information. Rather than storing the data into a simple `.txt` file, we will be using a specific text file called a `JSON` file (`.json`)

### JSON and JSON Files
JSON (Javascript Object Notation) is a way of writing text/strings such that if you were to look at it, it would look similar to if you were to print out a javascript object. This way, the data is not only readable to a human user but also easily decipherable by a computer as it know what patterns to expect.

Now, although JSON looks fairly similar to a javascript object, there are some differences that you should note:
- JSON, although it looks like an object, is by technicality, text (a string of chracters). As a result, we will need to convert it from a JSON String into a javascript Object when we read the data and vice versa when we write the data to save it
- All keys within the object must be surrounded with apostrophes. E.g `{ test: 5 }` would not be legal but `{ "test": 5 }` would be legal
- There should not be any trailing commas. After the last property listed within the JSON file, there should not be a comma between it and the closing `}` bracket. E.g, the following would NOT be allowed as there is a comma after the "yes" property even though it is the last property in the object
```
{
	"test": 1,
	"yes": 2,
}
```

