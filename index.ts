import { User } from "./src/models/User";

const user = new User({ name: "Myname", age: 20 });

user.set({ name: "newName" });

console.log(user.get("name"));
console.log(user.get("age"));
