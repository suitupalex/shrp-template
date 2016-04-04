'use strict'

const env = require('../lib/env')
const log = require('../lib/log')
const paths = require('../lib/paths')

const HttpServer = require('./HttpServer/HttpServer')

const httpServer = new HttpServer({
  port: env.PORT
, log: log.httpServer
, viewPath: paths.FRONTEND
, baseJsPath: paths.BASE_JS
})

httpServer.start()
