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
const list_contener = _$("list-contener")
const icon = _$("icon")
const icon1 = _$("icon1")
const icon2 = _$("icon2")
const btn1 = _$("btn1")
const btn2 = _$("btn2")
const btn3 = _$("btn3")
const btn4 = _$("btn4")
const img1 = _$("img1")
const logo2 = _$("logo2")
const Usefull = _$("UseFull")
const Service = _$("Service")
const Contact = _$("Contact")

let idColor1 = ["#49deff", "#4fffdf", "#303030"]
let idName1 = ["Primary - 01","Primary - 02","Primary - 03"]
let idCode1 = ["49DEFF","4FFFDF","303030"]

let idColor2 = ["#4e4e4e", "#dedede", "#f4f4f4","#f9f9f9"]
let idName2 = ["Secondry - 01","Secondry - 02","Secondry - 03","Secondry - 04"]
let idCode2 = ["4E4E4E","DEDEDE","F4F4F4","F9F9F9"]
let listCheck = [
  "Efficiently myocardinate market-driven innovation.",
  "Idea-sharing with back end products.",
  "Ballpark value added activity to beta test",
  "Voluptate at dolores ut dolor "
]
let tab_navLink = ["Solution","Industries","Products","Resources","Pricing"]
let tab_service = ["Sale","Marketing","Real State","Autimotive","Education"]


  // Creation du logo
  const image_logo = (selector) => {
    const img_logo = _createElts("span")
    const img_logo_2 = _createElts("span")
    const img_logo_3 = _createElts("span")
    const name_logo = _createElts("span")

    img_logo.classList.add("img-logo")
    selector.appendChild(img_logo)
    
    img_logo_2.classList.add("img-logo-2")
    img_logo.appendChild(img_logo_2)

    img_logo_3.classList.add("img-logo-3")
    img_logo.appendChild(img_logo_3)

    name_logo.classList.add("name-logo")
    name_logo.innerHTML = "PrimeCRM"
    selector.appendChild(name_logo)
  }
  image_logo(logo)
  
  //--- affichage des navbar
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

  // fonction qui affiche les couleurs
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
 // fonction qui affiche les noms des couleurs
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

  //fonction qui affiche un à un les codes couleurs
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
    let codeDiv = _createElts("div")
    
    selector.appendChild(t_div)
    t_div.classList.add("codeDiv2")
    tab_code.map((data) => {
      codeDiv.textContent = data
      codeDiv.classList.add("codeDiv2-1")
      t_div.appendChild(codeDiv)
    })
  }
  tag_code1(idCod,idCode2)

// fonction affiche un checkbox déssiner dans le css
  function checkbox(selector) {
    let round_background = _createElts("div")
    let check_mark = _createElts("div")
   
    selector.appendChild(round_background)
    selector.appendChild(check_mark)
    selector.classList.add("check-container")
    round_background.classList.add("round-background")
    check_mark.classList.add("check-mark")
  }
  
  // une fonction  qui rend le premier alphabet de chaque mot en majuscule 
  const adjustNameCase = name =>
    name
      .split(" ")
      .reduce((acc, word) => {
        const adjustedWord =
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return acc ? `${acc} ${adjustedWord}` : adjustedWord
      }, "")
  // une fonction qui affiche les phrases générées dans un tableau
  function list(selector, tab_list) {
    let t_table = _createElts("table")
    selector.appendChild(t_table)
    selector.classList.add("tableList")
  
    tab_list.forEach((data) => {
      let t_tr = _createElts("tr")
      let t_td = _createElts("td")
      let t_span = _createElts("span")
      let t_p = _createElts("td")
      
      t_table.appendChild(t_tr)
      t_tr.appendChild(t_td)
      t_tr.appendChild(t_span)
      t_span.classList.add("trList")
      t_tr.appendChild(t_p)

      checkbox(t_span)
      
      t_p.textContent = adjustNameCase(data)
      t_p.classList.add("textList")
      t_p.classList.add("trList")
    });
  }
  
  list(list_contener, listCheck)

  //une fonction qui créer un bouton
const buttonCheck=(color,x,y,z,textColor,value,colorBorder,selector)=>{
    let t_btn = _createElts("button")
    selector.appendChild(t_btn)

    t_btn.style.width = x +"rem"
    t_btn.style.height = y +"em "
    t_btn.textContent = value
    t_btn.style.borderColor = colorBorder
    t_btn.style.background = color
    t_btn.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    t_btn.style.marginLeft = 1 + "rem"
    t_btn.style.borderRadius = z + "px"
    t_btn.style.color = textColor
}

buttonCheck('rgba(48, 48, 48, 1)',13.7,4.3,5,'white','Default',"transparent",btn1)
buttonCheck('rgba(75, 227, 235, 1)',13.7,4.3,5,'white','Default','transparent',btn2)
buttonCheck('rgba(48, 48, 48, 1)',21.7,4.3,5,'white','Default',"transparent",btn3)
buttonCheck('rgba(75, 227, 235, 1)',21.7,4.3,5,'white','Default','transparent',btn4)

//une fonction qui désigne un rond spécifié
  const round_color = (colorChoose,selector,x,y,z) =>{
    selector.style.width = x + "px"
    selector.style.height = x + "px"
    selector.style.borderRadius = 50 + "%"
    selector.style.background = colorChoose
    selector.style.backgroundAttachement = "fixed"
    selector.style.marginLeft = y +"px"
    selector.style.marginTop = z +"px"
  }
  round_color('rgba(177, 232, 242, 0.8)',icon,38,-40,22)
  round_color('rgba(250, 215, 201, 0.8)',icon1,38,-40,22)
  round_color('rgba(245, 201, 233, 0.8)',icon2,38,-38,22)

  // une fonction qui créer un autre logo pour le footer
  const image_logo1 = (selector) => {
    const img_logo = _createElts("span")
    const img_logo_2 = _createElts("span")
    const img_logo_3 = _createElts("span")
    const name_logo = _createElts("span")

    img_logo.classList.add("img-logo2")
    selector.appendChild(img_logo)
    
    
    img_logo_2.classList.add("img-logo-2-2")
    img_logo.appendChild(img_logo_2)

    img_logo_3.classList.add("img-logo-3-2")
    img_logo.appendChild(img_logo_3)

  
    name_logo.classList.add("name-logo2")
    name_logo.innerHTML = "PrimeCRM"
    selector.appendChild(name_logo)
  }
  
  image_logo1(logo2)
//une fonction qui affiche les liens dans le footer
  const navLink1 = (selector, table) => {
    table.forEach((data) => {   
  let lien = _createElts("div")
      selector.appendChild(lien)
      lien.classList.add("lien2")
  
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
  
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("lien_href2")
      lien_href.appendChild(a)
    });
  };
navLink1(Usefull,tab_navLink)
navLink1(Service,tab_service)

// une fonction qui créer une informations spécifique
const lineLetter = (selector,letter,fond,x,y,z,a,align)=>{
  let t_div = _createElts("div")
  selector.appendChild(t_div)
  t_div.textContent = letter
  t_div.style.background = fond
  t_div.style.padding = 1 + "rem"
  t_div.style.borderWidth = x + "px"
  t_div.style.borderRadius = y+ "px"
  t_div.style.height = z + " %"
  t_div.style.width = a + "%"
  t_div.style.textAlign = align
  t_div.style.marginTop = 1 + "rem"
  t_div.style.textColor = "white"
  t_div.classList.add("contactStyle")
}

lineLetter(Contact,"1700 W Blanche St, Kiyev, Port, South USA, American","transparent",2,5,50,50,"left")
lineLetter(Contact,"+3255 456 789 Mail@Primarily.com","transparent",2,5,50,50,"left")