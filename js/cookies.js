const cookie = document.cookie;

function ListCookies(){
    let cookies = [];
    let parts = cookie.split(';');

    for(part of parts){
        let keyvalue = part.split('=');
        let key = keyvalue[0].replace(' ', '');
        let value = keyvalue[1];
        cookies.push(new Cookie(key,value));
    }

    return cookies;
}

function GetCookie(query){
    let parts = cookie.split(';');

    for(part of parts){
        let keyvalue = part.split('=');
        let key = keyvalue[0].replace(' ', '');
        let value = keyvalue[1];

        if (key == query){
            return new Cookie(key,value);
        }
    }
}

function SaveCookie(cookie){
    document.cookie = `${cookie.Key}=${cookie.Value}`
}

class Cookie{
    constructor(key,value){
        this.Key = key;
        this.Value = value;
    }
}