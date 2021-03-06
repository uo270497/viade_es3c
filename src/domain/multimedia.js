import { v5 as uuidv5 } from "uuid";
const auth = require("solid-auth-client");
const FC = require("solid-file-client");

export default class Multimedia {
	webId = "";

	constructor(url, date, author, name, ttlUrl) {
		this.url = url;
		this.date = date;
		this.author = author;
		this.name = name;
		this.ttlUrl = ttlUrl;
	}

	getIdMedia() {
		let mix = this.name + this.date + this.author;
		const MY_NAMESPACE = "10eadb41-c6bb-4874-b752-13465ec77185";
		return uuidv5(mix, MY_NAMESPACE);
	}

	get data() {
		const fc = new FC(auth);
		return Promise.resolve(fc.readFile(this.url));
	}
}
