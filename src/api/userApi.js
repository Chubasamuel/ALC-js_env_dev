import 'whatwg-fetch';
import getBaseUrl from "./baseUrl";

const baseUrl=getBaseUrl();
console.log(baseUrl);//eslint-disable-line no-console
export function getUsers(){
	console.log("baseUrl::::"+baseUrl); //eslint-disable-line no-console
	return get("users");
}
function get(url){
	return fetch("http://localhost/3001/"+url).then(onSuccess,onError);}
function onSuccess(res){
	return res.json();
}
function onError(err){
	console.log(err); //eslint-disable-line no-console
}
