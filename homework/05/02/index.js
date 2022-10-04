import { min, max } from "./modules/utility.js";
import readCommanLine from "./modules/commandlineargument.js";

console.log(min(readCommanLine()));
console.log(max(readCommanLine()));
