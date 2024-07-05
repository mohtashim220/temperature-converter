// function temp() {
//     console.log("function called");
//     let inp = document.getElementById("amount").value;
//     let frm = document.getElementById("from").value;
//     if (frm == celsius) {
//         res = (inp- 32) * (5 / 9);
//         document.getElementsByClassName("out-msg").innerHTML = res;
       
//     }
    
//  preventDefault();
//     return false;
// }



let msg = document.querySelectorAll(".out");
let res;

 

convert.addEventListener("click", async (evt) => {
    evt.preventDefault();
    console.log("function called");
    let inp = document.getElementById("amount").value;
    let flag = 1;
    
    if (inp=="")
    {
        flag = 0;

    }
    if (flag == 1) {
        console.log(inp);
        console.log(typeof (inp));

        let frm = document.getElementById("from").value;
    
        console.log(frm);
        console.log(typeof (frm));
        if (frm == "celsius") {
            console.log(typeof ("celsius"));
            console.log("celsius part");
            res = (inp - 32) * (5 / 9);
        
            console.log(msg);
            msg[0].innerHTML = res + " C";
       
            console.log(res);
            console.log(typeof res);
        }
        if (frm == "fahrenhiet") {
            console.log("fahrenhiet part");
            res = (inp * (9 / 5)) + 32;
       
            console.log(msg);
            msg[0].innerHTML = res + " F";

            console.log(res);
            console.log(typeof res);
        }
    }
    else {
        alert("input can't be null"); 
        msg[0].innerHTML ="";
    }
});
      