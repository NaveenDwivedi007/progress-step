const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive =1;

prev.addEventListener("click",()=>{
  currentActive--
  if (currentActive<1) {
   return currentActive=0
  }
  update()
})
next.addEventListener("click",()=>{
  currentActive++
  if (currentActive>circles.length) {
   return currentActive=circles.length
  }
  update()
})

const update =()=>{
  circles.forEach((circle,idx)=>{
    if (idx<currentActive) {
      circle.classList.add("active")
    }
    else{
      circle.classList.remove("active")
    }
  })
  const actives = document.querySelectorAll(".active")
  progress.style.width = ((actives.length-1)/(circles.length-1))*100+"%"

  if (currentActive=== 1) {
    return prev.disabled=true
  }else if (currentActive=== circles.length) {
    return next.disabled=true
  }else{
    prev.disabled=false
    return next.disabled=false
  }


}



