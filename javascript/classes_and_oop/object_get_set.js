const User = {
    _email : "h@hc.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this.email = value
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this.password = value
    }
}

const tea = Object.create(User)

console.log(tea.email);