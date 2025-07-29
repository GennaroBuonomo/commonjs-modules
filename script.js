// importazione della funzione 
const subject = require('./name.js')
// definisco una funzione di recupero
const getSubjectInfo = () => {
  return {
    subjectInfo: subject('Gennaro', 'Buonomo')
  }
}

console.log(getSubjectInfo())