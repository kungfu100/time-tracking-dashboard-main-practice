"use strict";

//import data from "/data.json" assert {type:"json"};

async function checkData() {
	let list = [];
	const urlData = "/data.json";
	
	try {
		let getData = await fetch(urlData);
		list = await getData.json();

	} catch(error) {
		console.log(error);
	}

	dataIntoHtml(list);
	
}

checkData();

function dataIntoHtml(list) {
	const bottomTitle = document.getElementsByClassName("bottom__title");
	const bottomCurrent = document.getElementsByClassName("bottom__current");
	const bottomLast = document.getElementsByClassName("bottom__last");

	/*for(let i = 0; i < list.length; i++) {
		console.log(bottomTitle[i].textContent = list[i].title);
	}*/
	
	list.map((item, index) => {
		let keyTime = "daily";

		const {title, timeframes} = item;
		//const {daily} = timeframes;
		const {current, previous} = timeframes[keyTime];

		bottomTitle[index].textContent = title;
		bottomCurrent[index].textContent = `${current}hrs`;
		bottomLast[index].textContent = `Yesterday ${previous}hrs`;
	})
}

function buttonChange() {
	const btnTime = document.getElementsByClassName("btn-time");
	
	for(let btn = 0; btn < btnTime.length; btn++) {
		btnTime[btn].addEventListener("click", () => console.log(btnTime[btn].textContent.toLowerCase()));
	}
}

buttonChange();

//tạo key giống như 1 biến
//khi click button lấy key để đưa vào timeframes[key]