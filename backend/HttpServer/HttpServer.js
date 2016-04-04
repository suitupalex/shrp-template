'use strict'

const Hapi = require('hapi')
const Vision = require('vision')
const Inert = require('inert')

class HttpServer {
  constructor(options) {
    this.viewPath = options.viewPath
    this.baseJsPath = options.baseJsPath

    this.server = new Hapi.Server()

    this.connection({
      host: options.host || 'localhost'
    , port: options.port
    })

    this.register(Vision, this.handleVisionRegister.bind(this))
    this.register(Inert)

    this.get('/base.js', this.handleGetBaseJs.bind(this))
    this.get('/{path*}', this.handleGetWildcard.bind(this))
  }

  // Settings
  connection(...args) {
    this.server.connection(...args)
  }

  register(...args) {
    this.server.register(...args)
  }

  // Routes
  get(path, handler) {
    this.server.route({
      method: 'GET'
    , path: path
    , handler: handler
    })
  }

  // Start
  start(handler) {
    this.server.start(handler || this.handleStart)
  }

  // Handlers
  handleVisionRegister(error) {
    if (error) {
      throw error
    }

    this.server.views({
      engines: {pug: require('pug')}
    , path: this.viewPath
    })
  }

  handleGetWildcard(request, response) {
    response.view('base')
  }

  handleGetBaseJs(request, response) {
    response.file(this.baseJsPath)
  }
}

module.exports = HttpServer
