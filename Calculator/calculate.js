let input=document.getElementById('inputDisplay');
let keys=document.querySelectorAll('.keys');
input.value=0;
input.addEventListener('change',()=>{
    input.value=eval(input.value); 
})
for( let key of keys){
    key.addEventListener('click',()=>{
        if(key.innerHTML==="="){
            input.value=eval(input.value); 
            localStorage.setItem('previousResult',`${input.value}`);
        }
        else if(key.innerHTML==="Previous Result"){input.value=localStorage.getItem('previousResult');}
        else if(key.innerHTML==="AC"){ input.value=0;}
        else{
        if(input.value!=0){
        input.value+=key.innerHTML;}
        else{
            input.value=null;
            input.value+=key.innerHTML;
        }
    }
    })
};
