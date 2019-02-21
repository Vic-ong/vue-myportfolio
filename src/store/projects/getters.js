export const project = state => {
  return state.project
}

export const projects = state => {
  return state.projects
}

export const projectsTop = getters => {
  const projectsTopFunc = n => {
    let listSorted = getters.projects.sort((a, b) => {
      return a.score - b.score
    })
    return listSorted.slice(0, n)
  }
  return projectsTopFunc
}
