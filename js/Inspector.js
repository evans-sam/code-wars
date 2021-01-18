class Inspector {
  constructor() {
    this.require = {}
    this.allow = {}
    this.deny = {}
    this.expiration = new Date('1983.11.23')
  }
  
  receiveBulletin(bulletin) {

  }

  inspect(entrant) {
    const documents = this.parseDocuments(entrant)
    if (!this.valid(documents)) return false

  }

  parseBulletin(bulletin) {

  }

  parseDocuments(entrant) {
    const toDocObject = (docObject, property) => {
      const [propKey, propValue] = property.split(': ')
      return {
        ...docObject,
        [propKey]: propValue,
      }
    }

    const parseDoc = (doc) => doc
      .split('\n')
      .reduce(toDocObject, {})

    const toDocObjects = (docs, [docName, docString]) => ({
      ...docs,
      [docName]: parseDoc(docString.replace(/,/, ''))
    })

    return Object
      .entries(entrant)
      .reduce(toDocObjects, {});
  }

  valid(documents) {

    if (Object.entries(documents).length === 1) return true
    for (const [document, properties] of Object.entries(documents)) {
      
    }

  }

  expired(dateString) {
    return new Date(dateString) < this.expiration
  }

  
}

const inspector = new Inspector();''  
const bulletin = 'Entrants require passport\nAllow citizens of Arstotzka, Obristan';
inspector.receiveBulletin(bulletin);

const josef = {
  passport:'ID#: GC07D-FU8AR\nNATION: Arstotzka\nNAME: Costanza, Josef\nDOB: 1933.11.28\nSEX: M\nISS: East Grestin\nEXP: 1983.03.15'
};

const guyovich = {
  access_permit: 'NAME: Guyovich, Russian\nNATION: Obristan\nID#: TE8M1-V3N7R\nPURPOSE: TRANSIT\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13'
};

const roman = {
  passport:'ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12',
  grant_of_asylum: 'NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20'
};

const entrant_tests = [
  [josef,'Josef Costanza','Glory to Arstotzka.'],
  [guyovich,'Russian Guyovich','Entry denied: missing required passport.'],
  [roman,'Roman Dolanski','Detainment: ID number mismatch.']
];

// console.log(inspector.parseDocuments(roman))
// console.log(inspector.parseDocuments(guyovich))
// console.log(inspector.parseDocuments(josef))

// console.log(inspector.expired('1984.03.15'))
// console.log(inspector.expired('1979.03.15'))

//one liners

// const parseEntrant=a=>Object.entries(a).reduce((a,[b,c])=>({...a,[b]:c.split("\n").reduce((a,b)=>({...a,[b.split(": ")[0]]:b.split(": ")[1]}),{})}),{});