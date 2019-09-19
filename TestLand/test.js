  let game1 = document.querySelectorAll("#game");

  for(let i = 0; i < 9; i++){
    game1[0].innerHTML += "<div class='game11'></div>"
  }
  
  hod = 0;
  let kl = document.getElementsByClassName("game11")
  game1[0].onclick = (event) => {
    if(hod%2 == 0){
      this.event.target.innerHTML = "X"
      hod++
    } else{
      this.event.target.innerHTML = "0"
      hod++
      }
    if(kl[0].innerHTML == "X" && kl[1].innerHTML == "X" && kl[2].innerHTML == "X") {
      alert("Крестики попедили!!!")
      location.reload()
    } else if (kl[3].innerHTML == "X" && kl[4].innerHTML == "X" && kl[5].innerHTML == "X"){
      alert("Крестики победили")
      location.reload()
    } else if (kl[6].innerHTML == "X" && kl[7].innerHTML == "X" && kl[8].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    } else if (kl[0].innerHTML == "X" && kl[3].innerHTML == "X" && kl[6].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    } else if (kl[1].innerHTML == "X" && kl[4].innerHTML == "X" && kl[7].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    } else if (kl[2].innerHTML == "X" && kl[5].innerHTML == "X" && kl[8].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    } else if (kl[0].innerHTML == "X" && kl[4].innerHTML == "X" && kl[8].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    } else if (kl[2].innerHTML == "X" && kl[4].innerHTML == "X" && kl[6].innerHTML == "X") {
      alert("Крестики победили")
      location.reload()
    }
    
    if (kl[0].innerHTML == "0" && kl[1].innerHTML == "0" && kl[2].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[3].innerHTML == "0" && kl[4].innerHTML == "0" && kl[5].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[6].innerHTML == "0" && kl[7].innerHTML == "0" && kl[8].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[0].innerHTML == "0" && kl[3].innerHTML == "0" && kl[6].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[1].innerHTML == "0" && kl[4].innerHTML == "0" && kl[7].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[2].innerHTML == "0" && kl[5].innerHTML == "0" && kl[8].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[0].innerHTML == "0" && kl[4].innerHTML == "0" && kl[8].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    } else if (kl[2].innerHTML == "0" && kl[4].innerHTML == "0" && kl[6].innerHTML == "0") {
      alert("Нолики победили")
      location.reload()
    }
  }
  let r1 = document.querySelectorAll("#r")
  
  r1[0].onclick = (event) => {
    alert(document.documentElement.clientHeight + " " + document.documentElement.clientWidth)
  } 
  //Ширина документа == 933px
  //Высота документа == 1266px