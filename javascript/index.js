"use strict";

//import data from "/data.json" assert {type:"json"};

let keyTime = "daily";

window.addEventListener("load", () => {
	const btnTime = document.getElementsByClassName("btn-time");

	btnTime[0].focus();
})

function listMap(list, keyTime) {
	const _title = document.getElementsByClassName("bottom__title");
	const _current = document.getElementsByClassName("bottom__current");
	const last = document.getElementsByClassName("bottom__last");

	list.map((item, index) => {

		const {title, timeframes} = item;
		const {current, previous} = timeframes[keyTime];

		_title[index].textContent = title;
		_current[index].textContent = `${current}hrs`;

		//----------- SWITCH -----------
		switch (keyTime) {
			case "daily":
				last[index].textContent = `Yesterday - ${previous}hrs`;
				break;
			case "weekly": 
				last[index].textContent = `Last Week - ${previous}hrs`;
				break;
			case "monthly":
				last[index].textContent = `Last Month - ${previous}hrs`;
				break;
			default: 
				console.log("error !!!");
		}
	})
}

async function getList() {
	let list = [];
	const urlData = "/data.json";

	try {
		let data = await fetch(urlData);
		list = await data.json();

	} catch(error) {
		console.log(error);
	}

	listMap(list, keyTime); //run default for keyTime = "daily"
	getKeyTimeToHTML(list); //when click button to change keyTime
}

function getKeyTimeToHTML(list) {
	const btnTime = document.getElementsByClassName("btn-time");

	for(let btn = 0; btn < btnTime.length; btn++) {
		btnTime[btn].addEventListener("click", (event) => {
			keyTime = event.target.textContent.toLowerCase();
			
			listMap(list, keyTime);
		});
	}

}

getList();

//---------------------------------------
/*
async function checkData() {
	let list = [];
	const urlData = "/data.json";
	
	try {
		let getData = await fetch(urlData);
		list = await getData.json();

	} catch(error) {
		console.log(error);
	}

	const test = dataIntoHtml(list);
	test();
}

checkData();

function dataIntoHtml(list) {
	const bottomTitle = document.getElementsByClassName("bottom__title");
	const bottomCurrent = document.getElementsByClassName("bottom__current");
	const bottomLast = document.getElementsByClassName("bottom__last");

	//for(let i = 0; i < list.length; i++) {
	//	console.log(bottomTitle[i].textContent = list[i].title);
	//}
	
	list.map((item, index) => {
		//let keyTime = "daily";

		const {title, timeframes} = item;
		//const {daily} = timeframes;
		const {current, previous} = timeframes[keyTime];

		bottomTitle[index].textContent = title;
		bottomCurrent[index].textContent = `${current}hrs`;
		bottomLast[index].textContent = `Yesterday - ${previous}hrs`;
	})

	return () => {
		const btnTime = document.getElementsByClassName("btn-time");

		for(let btn = 0; btn < btnTime.length; btn++) {
			btnTime[btn].addEventListener("click", changeData);
		}

		function changeData(event) {
			//console.log(btnTime[btn].textContent.toLowerCase())
			//text = btnTime[btn].textContent.toLowerCase();		
			//console.log(text);

			let text = event.target.textContent.toLowerCase();

			keyTime = text;

			// test ------------>>>
			list.map((item, index) => {
				const {title, timeframes} = item;
				//const {daily} = timeframes;
				const {current, previous} = timeframes[keyTime];

				bottomTitle[index].textContent = title;
				bottomCurrent[index].textContent = `${current}hrs`;

				//--------switch
				switch (keyTime) {
					case "daily":
						bottomLast[index].textContent = `Yesterday - ${previous}hrs`;
						break;
					case "weekly": 
						bottomLast[index].textContent = `Last Week - ${previous}hrs`;
						break;
					case "monthly":
						bottomLast[index].textContent = `Last Month - ${previous}hrs`;
						break;
					default: 
						console.log("error !!!");
				}
			})
			//------------------------

			console.log(keyTime);
		}
	};
}
*/

//-------------------------------------kiểm tra lại phần này
/*function buttonChange() {
	const btnTime = document.getElementsByClassName("btn-time");

	for(let btn = 0; btn < btnTime.length; btn++) {
		btnTime[btn].addEventListener("click", changeData);
	}
}

function changeData(event) {
	//console.log(btnTime[btn].textContent.toLowerCase())
	//text = btnTime[btn].textContent.toLowerCase();		
	//console.log(text);

	let text = event.target.textContent.toLowerCase();

	keyTime = text;
}*/


//tạo key giống như 1 biến
//khi click button lấy key để đưa vào timeframes[key]