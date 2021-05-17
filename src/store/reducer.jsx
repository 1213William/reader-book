const defaultState = {
  count: 19
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_count':
      state.count = action.count
      return state
  }
}