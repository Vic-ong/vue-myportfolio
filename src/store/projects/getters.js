export const project = state => {
  return state.project
}

export const projects = state => {
  return state.projects
}

export const projectsTop3 = getters => {
  const list = getters.projects
  let arr = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].score) {
      arr.push({
        id: list[i].id,
        name: list[i].name,
        thumbnail_image: list[i].thumbnail_image,
        sector: list[i].sector,
        caption: list[i].caption
      })
    }
  }
  // compact sort
  let arrSorted = arr.sort((a, b) => {
    return a.score - b.score
  })
  return arrSorted
}
