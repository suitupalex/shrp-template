'use strict'

const P = 'SHRP'

const PORT = process.env[`${P}_PORT`]
if (!PORT) {
  throw new Error(`MISSING ${P}_PORT`)
}

exports.PORT = PORT
