const initState = {
  focused: false
}

function reducer(prevState = initState, action) {
  switch (action.type) {
    case 'search_input_focused':
      return Object.assign({},prevState,{
        focused: !prevState.focused
      })
    default:
      return prevState
  }
}

export default reducer