// @ts-ignore

import * as username from 'do_username';
import fetch from 'node-fetch';

let generatedUser: String = username.generate(20);
console.log(generatedUser, ' -- Generated Username')

checkIfUserIsValid(generatedUser).then(res => {
    console.log(res, ' -- Username Status')
}).catch(err => console.log(err));






async function checkIfUserIsValid(user: String) {
    let res = await fetch(`https://auth.roblox.com/v1/usernames/validate?request.username=${user}&request.birthday=1%2F1%2F2000`);
    let json: any = await res.json();

        return json.message;
}
