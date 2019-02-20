export const STORE_PROJECTS = (state, payload) => {
  state.projects.push(payload)
}

export const STORE_PROJECT = (state, payload) => {
  state.project = payload
}

export const CLEAR_PROJECTS = (state) => {
  state.projects = []
}
