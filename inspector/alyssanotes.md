# Approach to solving the problem...

- First, I follow the instructions on the readme.md
  - From there, I notice that there are some errors
    - These errors are within the pr-nudges.js files, so I go there to look to make sure that I understand what is going on. 

## Understanding the pr-nudges.js file

### Deconstructing `require("dotenv").config();`
- Notice that there is a requirement statement for "dotenv" -- I know that I set up an .env file, so I wonder if it is that, but it seems odd to me since that doesn't match up since ".env" /= "dotenv"
  - Do a search in the file repository to see if "dotenv" is mentioned anywhere
    - Ahhh! That makes sense, it shows up in the package.json files; so that tells me that this is a dependency (duh!)
    - Now I'm confused about the .config(); portion of the statement. 

### Examining the required files

Ok, so these are also dependinces that exist in the package.json file. I did a search to find where they exist and they are all in there. 

Now, I'm curious -- I am going to look over at the package.json file to see if there is anything that is listed in that file that hasn't been listed as a require. 

Looks like `fs` and `path` aren't mentioned in the package.json -- going to go on a rabit hole and understand what those are more in depth. 

## Parking Lot

### Questions

#### General
- What is the point of the pr-nudges.test.js file -- what purpose does that serve and how should I be utilizing it?

- How can one tell whether or not a particular Javascript framework is used?

#### Dependency
- Why is the dotenv dependencies required in a different way than lodash, fs, path, graphql & web-api?

- What does setting private to true accomplish?

### Learnings

I was confused about "flavors" of Javascript. Since we're using NPM, node package manager, I assumed that had something to do with node.js which I had heard of. That made me wonder what the difference between javascript and node.js is. From there, I learned that Javascript is a front end and has many different frameworks and that node.js is server side. 