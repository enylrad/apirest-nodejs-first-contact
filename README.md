Hello!

This is a little test I have done to start learning JavaScript

config.js file that is necessary for code works:

```javascript
'use strict'

const user = 'userMongoDB'
const password = 'passwordMongoDB'
const mongodb = `urlMongoDBWithCredentials`

module.exports = {
    port: "portAPI",
    url: mongodb,
    SECRET_TOKEN: 'secretTokenAuth'
}
```