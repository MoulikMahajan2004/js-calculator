let string ="";

let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach((buttonss)=>{
    buttonss.addEventListener("click",(e)=>
    {

        if(e.target.innerHTML==="=" )
        {
            //eval is used to implement the mathematical operation on the string
            console.log("sum is "+eval(string))
            string = eval(string)
            document.querySelector("input").value  = string
        }
        else if(e.target.innerHTML==="AC" )
        {
            //this is used to clear all the vlaues in the display
            string = ""
            document.querySelector("input").value  = string
        }
        else
        {
            // console.log(e.target);
            string = string+e.target.innerHTML;
            document.querySelector("input").value  = string;
        }
    })
});

