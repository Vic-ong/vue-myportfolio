export const STORE_PROJECTS = (state, payload) => {
  state.users.push(payload)
}

export const STORE_PROJECT = (state, payload) => {
  state.user = payload
}

export const CLEAR_PROJECTS = (state) => {
  state.users = []
}
