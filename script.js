// importazione della funzione 
const subject = require('./name.js')
const hobbies = require('./hobbies.js')
// definisco una funzione di recupero
const getSubjectInfo = () => {
  return {
    subjectInfo: subject('Gennaro', 'Buonomo'),
    hobbies: hobbies('Nuoto', 'Palestra', 'Rugby')
  }
}

console.log(getSubjectInfo())