# parse-comm

Parses the comm-string from ```ps``` output to show which .app is responsible for the running process.

``` javascript
npm i --save parse-comm
```

## Usage

``` javascript
const parse = require('parse-comm')

parse('/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal')
// '/Applications/Utilities/Terminal.app'
```
