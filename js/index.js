// import { idColor1 } from "./db"

function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}
  
const logo = _$("logo")
const nav_link = _$("nav-link")
const idColor = _$("idColor")
const idName = _$("idName")
const idCode = _$("idCode")
const idCol = _$("idColor1")
const idNam = _$("idName1")
const idCod = _$("idCode1")

let idColor1 = ["#49deff", "#4fffdf", "#303030"]
let idName1 = ["Primary - 01","Primary - 02","Primary - 03"]
let idCode1 = ["49DEFF","4FFFDF","303030"]

let idColor2 = ["#4e4e4e", "#dedede", "#f4f4f4","#f9f9f9"]
let idName2 = ["Secondry - 01","Secondry - 02","Secondry - 03","Secondry - 04"]
let idCode2 = ["4E4E4E","DEDEDE","F4F4F4","F9F9F9"]


  
  const image_logo = (selector) => {

    const img_logo = _createElts("span")
    img_logo.classList.add("img-logo")
    selector.appendChild(img_logo)
    
    const img_logo_2 = _createElts("span")
    img_logo_2.classList.add("img-logo-2")
    img_logo.appendChild(img_logo_2)

    const img_logo_3 = _createElts("span")
    img_logo_3.classList.add("img-logo-3")
    img_logo.appendChild(img_logo_3)

    const name_logo = _createElts("span")
    name_logo.classList.add("name-logo")
    name_logo.innerHTML = "PrimeCRM"
    selector.appendChild(name_logo)
  }
  image_logo(logo)
  
  let tab_navLink = ["Solution","Industries","Products","Resources","Pricing"]

  const navLink = (selector, table) => {
    table.forEach((data) => {   
  let lien = _createElts("td")
      selector.appendChild(lien)
  
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
  
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("lien_href")
      lien_href.appendChild(a)
    });
  };
  navLink(nav_link,tab_navLink)


  const tag_Color = (selector,tab_color) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("color1")
  
    tab_color.map((color) => {
      let colorDiv = _createElts("div")
      colorDiv.style.background = color
      colorDiv.classList.add("color")
      t_div.appendChild(colorDiv)
    })
  }
  tag_Color(idColor,idColor1);

  const tag_name = (selector,tab_name) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("nameDiv")
  
    tab_name.map((data) => {
      let nameDiv = _createElts("div")
      nameDiv.textContent = data
      nameDiv.classList.add("nameDiv1")
      t_div.appendChild(nameDiv)
    })
  }
  tag_name(idName,idName1)

  const tag_code = (selector,tab_code) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("codeDiv")
  
    tab_code.map((data) => {
      let codeDiv = _createElts("div")
      codeDiv.textContent = data
      codeDiv.classList.add("codeDiv1")
      t_div.appendChild(codeDiv)
    })
  }
  tag_code(idCode,idCode1)

  const tag_Color1 = (selector,tab_color) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("color2-1")
  
    tab_color.map((color) => {
      let colorDiv = _createElts("div")
      colorDiv.style.background = color
      colorDiv.classList.add("color2")
      t_div.appendChild(colorDiv)
    })
  }
  tag_Color1(idCol,idColor2);

  const tag_name1 = (selector,tab_name) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("nameDiv2")
  
    tab_name.map((data) => {
      let nameDiv = _createElts("div")
      nameDiv.textContent = data
      nameDiv.classList.add("nameDiv2-1")
      t_div.appendChild(nameDiv)
    })
  }
  tag_name1(idNam,idName2)

  const tag_code1 = (selector,tab_code) => {
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    t_div.classList.add("codeDiv2")
  
    tab_code.map((data) => {
      let codeDiv = _createElts("div")
      codeDiv.textContent = data
      codeDiv.classList.add("codeDiv2-1")
      t_div.appendChild(codeDiv)
    })
  }
  tag_code1(idCod,idCode2)