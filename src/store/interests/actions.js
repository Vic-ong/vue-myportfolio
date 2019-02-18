import db from '@/store/firebaseInit'

const collection = 'Interests'
const docRef = db.collection(collection)

export const getInterests = (store) => {
  store.commit('CLEAR_INTERESTS')
  // get all interests
  return docRef.get().then(docs => {
    if (!docs.empty) {
      docs.forEach(doc => {
        if (doc.exists) {
          store.commit('STORE_INTEREST', doc.data())
        } else {
          console.error('Unable to find document!')
        }
      })
    } else {
      console.error('Empty collection')
    }
  }).catch(err => {
    console.error('Error getting document: ', err)
  })
}
