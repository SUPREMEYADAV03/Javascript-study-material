const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(programming[key]); // console.log(key) will give you index
}

const map = new Map()
map.set('in', 'India');
map.set('USA', 'united states of america')
map.set('fr', 'france')
map.set('in', 'India');

for(const key in map){
    console.log(key);
}