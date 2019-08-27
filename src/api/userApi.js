import 'whatwg-fetch';
import getBaseUrl from "./baseUrl";

const baseUrl=getBaseUrl();
console.log("baseUrl-baseUrl-----"+baseUrl);//eslint-disable-line no-console
export function getUsers(){
	console.log("baseUrl::::"+baseUrl); //eslint-disable-line no-console
	return get("users");
}
function get(url){
	return fetch("http://localhost/3001/users").then(onSuccess,onError);}
function onSuccess(res){
	return res.json();
}
function onError(err){
	console.log("DCOR Error fetching data:::"+err); //eslint-disable-line no-console
}
