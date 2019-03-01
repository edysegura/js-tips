'use strict'

const myTag = (template, ...values) => {
  return template.reduce((previousTemplate, nextTemplate, index) => {
    return `${previousTemplate}${values[index - 1].toUpperCase()}${nextTemplate}`
  })
}

 const name = "Edy Segura"
 const city = "Santa Rita do Sapucaí"

 const output = myTag`Hi! I'm ${name} and I live in ${city}.`
 console.log(output)