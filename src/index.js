import {getUsers} from "./api/userApi";
import "./index.css"
//import numeral from 'numeral'
/*eslint-disable no-console*/
//const courseValue= numeral(1000).format('$0,0.00');
//console.log(`I would pay ${courseValue} for this awesome course!`);
getUsers().then(result=>{
	let usersBody="";
	result.forEach(user=>{
		usersBody+=`<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});
global.document.getElementById("users").innerHTML=usersBody+"getUsers :::"+getUsers+"<br /><br />"+getUsers();
});

console.log("DCOR- testing index.js");
