let string="";

let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((butt)=>{
    butt.addEventListener('click',(e)=>{

        if(e.target.innerHTML== '='){
            string= eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    });
});

