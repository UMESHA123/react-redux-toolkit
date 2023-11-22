const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const userReducer = require('../features/user/userSlice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCReam: iceCreamReducer,
    user : userReducer
  },
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
});

module.exports = store;
