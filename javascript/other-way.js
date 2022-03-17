"use strict";

const btnTime = document.querySelectorAll(".btn-time");
let list = [];
const urlData = "/data.json";

const render = async (option) => {

  const data = await fetch(urlData);
  list = await data.json();

  const _title = document.querySelectorAll(".bottom__title");
  const _current = document.querySelectorAll(".bottom__current");
  const last = document.querySelectorAll(".bottom__last");
 
  //------------------------
  //use Object instead Switch 
  const timeframesOption = {
    "daily": "Yesterday",
    "weekly": "Last Week",
    "monthly": "Last Month"
  }
  //-------------------------

  list.forEach((item, index) => {
     
    const {title, timeframes} = item;
    const {current, previous} = timeframes[option];   
    
    _title[index].textContent = title;
    _current[index].textContent = `${current}hrs`;
    last[index].textContent = `${timeframesOption[option]} - ${previous}hrs`;

  })

}

btnTime.forEach(btn => {
    btn.addEventListener("click", () => {
      let clickOption = btn.dataset.option; //dataset
      
      render(clickOption);
    })
  
});

btnTime[0].focus();
btnTime[0].click();


/*
const clear = () => {
  const div = document.querySelectorAll(".bg-color");
  div.forEach(item => item.remove());
}

const render = (option) => {
  clear(); //hàm xóa khi nhấp nút chọn daily or weekly or monthly
  
  const app = document.getElementById("app");
 
  list.forEach(item => {
     const div = document.createElement("div");
     div.classList.add("bg-color")
    
    const {title, timeframes} = item;
    const {current, previous} = timeframes[option];   
    
    let str = `
          <h1>${title}</h1>
          <span>${current}hrs |</span> <span> ${previous}hrs</span>`
    
    div.innerHTML = str;
    
    app.append(div);
  })
}

const btn = document.querySelectorAll("button");
btn.forEach(item => {
    item.addEventListener("click", () => {
      const clickOption = item.dataset.name;
      
      render(clickOption);
    })
  
});

btn[0].click(); // click vào cái mình muốn
*/