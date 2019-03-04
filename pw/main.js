"use strict";
function copy(s) {
    let pw=document.getElementById('pw');
    pw.value=s;
    pw.select();
}
function hash(pw) {
   var password = new buffer.SlowBuffer(pw.normalize('NFKC'));
      var salt = new buffer.SlowBuffer("WAAutoMaton".normalize('NFKC'));

      var N = 32768, r = 8, p = 1;
      var dkLen = 8;

      scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
        if (error) {
          console.log("Error: " + error);
        } else if (key) {
          let a=0;
          for(let i=0; i<8; i++) {
             a=a*256+key[i];
          }
          let b="";
          let flag=true;
          for(let i=1; i<=10; i++) {
                let t=a%36;
                a=parseInt(a/36);
                if (t<10) {
                    //console.log(t.toString());
                    b+=t.toString();
                } else {
                    //console.log(String.fromCharCode(96+t-10));
                    if (flag) {
                        flag=false;
                        b+=String.fromCharCode(65+t-10)
                    } else {
                        b+=String.fromCharCode(97+t-10)
                    }

                }
          }
          console.log(b);
          copy(b);
        } else {
        }
      });
}

function main() {
    let password_button=document.getElementById('password');
    let password=password_button.value;
    hash(password)
}