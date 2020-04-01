import { debounce } from "./debounce.js";

const myAction = debounce(() => console.log('Now its time!'), 500)

for (let i = 0; i < 1000; i++) {
  myAction()
}