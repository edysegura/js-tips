'use strict'

const language = {
  currentLanguage: '',
  log: [],

  set current(name) {
    this.currentLanguage = name
    this.log.push(name)
  },

  get current() {
    return this.currentLanguage
  }
}

language.current = 'PT-BR'
language.current = 'JP'
language.current = 'EN-US'

console.log('Current Language: ', language.current)
console.log(language.log)
