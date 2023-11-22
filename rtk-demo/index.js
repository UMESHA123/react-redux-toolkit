const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
const  featchUsers = require('./features/user/userSlice').featchUsers

console.log(store.getState())

// const unsubscribe = store.subscribe(()=> console.log(store.getState()))
const unsubscribe = store.subscribe(()=> {})


// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.reStore(4))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())

store.dispatch(featchUsers())

// unsubscribe();