import db from '@/store/firebaseInit'

const collection = 'Users'
const docRef = db.collection(collection)

export const getUsers = (store, param) => {
  if (!param) {
    // get all users
    return docRef.get().then(docs => {
      if (!docs.empty) {
        docs.forEach(doc => {
          if (doc.exists) {
            console.log(doc.data())
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
  } else {
    // get specific user
    return docRef.doc(param).get().then(doc => {
      if (doc.exists) {
        console.log(doc.data())
      } else {
        console.error('Unable to find document!')
      }
    }).catch(err => {
      console.error('Error getting document: ', err)
    })
  }
}
