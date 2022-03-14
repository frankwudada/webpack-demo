import x from "./x.js"
import jpg from "./assets/1.jpg"

const div = document.getElementById("app")
div.innerHTML = `<img src = "${jpg}">`

const button = document.createElement("button")
button.innerText = "懒加载"
button.onclick = () => {
  const promise = import("./lazy")  // import() 是动态导入，会返回一个 promise
  promise.then((Module) => {
    console.log(Module.default())
  })  // 返回的是一个模块
}
div.appendChild(button)