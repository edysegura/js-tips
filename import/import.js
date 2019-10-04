'use strict'

const js = `console.log('Hello Everyone')`
const encodeJs = encodeURIComponent(js)
const dataUri = 'data:text/javascript;charset=utf-8,' + encodeJs

import(dataUri)