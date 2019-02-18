export const STORE_USERS = (state, payload) => {
  state.users.push(payload)
}

export const STORE_USER = (state, payload) => {
  state.user = payload
}

export const CLEAR_USERS = (state) => {
  state.users = []
}
