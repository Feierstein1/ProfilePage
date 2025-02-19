For deploying functions

- create new function call whther its in the index.ts or a new file
- make sure if function is made in new file that it is referenced in index.ts
- make sure to 'cd functions' and run "npm run build"
- cd back to PortfolioPage and run "firebase deploy --only functions"



- > setting up env set up on server 
- use "firebase functions:config:set [name] = [value]"
- this will allow functions to grab env variables
