## styled-components
> css文件在一个模块中被引入，则在全局都生效，就会造成样式冲突
> 我们希望每个组件的样式是独立的，不要互相影响
```
yarn add styled-components
```

## redux-devtools-extension

```javascript
import {createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware()
))
export default store
```
