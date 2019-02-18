const interestDict = {
  hobby: 'hobbies',
  goal: 'goals',
  music: 'music'
}

export const STORE_INTEREST = (state, payload) => {
  if (payload.type) {
    Object.keys(interestDict).some(type => {
      if (type === payload.type) {
        state[interestDict[type]].push(payload.name)
        return true
      }
    })
  }
}

export const CLEAR_INTERESTS = (state) => {
  Object.keys(interestDict).forEach(type => {
    state[interestDict[type]] = []
  })
}
