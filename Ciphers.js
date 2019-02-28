function encryption() {    
switch(document.getElementById("methods").value) {
    case "caesar":
        var str = document.getElementById("plain_text").value;
        var amount = Number(prompt("Number of shift"));
        var output = "";

        for (var i = 0; i < str.length; i ++) {
            var c = str[i];
            var code = str.charCodeAt(i);

            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if ( (code >= 97) && (code <= 122) )
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            output += c;
        }
        document.getElementById("text_encoded").value=output;
        break;
    }
}

function decryption(){
switch(document.getElementById("methods").value) {
    case "caesar":
        var str = document.getElementById("text_encoded").value;
        var output = "";
        var amount = str

        for (var i = 0; i < str.length; i ++) {
            var c = str[i];
            var code = str.charCodeAt(i);

            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if ( (code >= 97) && (code <= 122) )
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            output += c;
        }
        document.getElementById("text_decoded").value=output;
        break;
    }
}

function base_64(){
switch(document.getElementById("methods").value){
    case "base-64":    
        var input = document.getElementById("plain_text");

        output = window.btoa(input.value);
        
        document.getElementById("text_encoded").value = output;
        break;
    }
}

function dec_base_64(){
switch(document.getElementById("methods").value){
    case "base-64":    
        var input = document.getElementById("text_encoded");

        output = window.atob(input.value);
        
        document.getElementById("text_decoded").value = output;
        break;
    }
}