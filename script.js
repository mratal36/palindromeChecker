const inputValue = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result")
checkBtn.addEventListener("click",()=>{
    if(inputValue.value === ""){
        alert("Please input a value");
    }

    else if(inputValue.value.length === 1 && inputValue !== ""){
        result.innerHTML= `${inputValue.value} is a palindrome`;
    }

    else if(inputValue.value.length > 1){

        function removeSpace(arr){
            let array = arr.split("")
             array = array.filter((i)=>{
                return i != " ";
            })

             array = array.filter((i)=>{
                return i != "_";
            })

             array = array.filter((i)=>{
                return i != "-";
            })

             array = array.filter((i)=>{
                return i != ",";
            })

             array = array.filter((i)=>{
                return i != ".";
            })

             array = array.filter((i)=>{
                return i != "(";
            })

             array = array.filter((i)=>{
                return i != ")";
            })

             array = array.filter((i)=>{
                return i != ":";
            })
             array = array.filter((i)=>{
                return i != "/";
            })

            return array;
        }

        console.log(removeSpace(inputValue.value))

        removeSpace(inputValue.value).reverse().join("").toLowerCase() === removeSpace(inputValue.value).join("").toLowerCase()   ? 
            result.innerHTML=`<b>${inputValue.value}</b> is a palindrome` :  
                result.innerHTML=`<b>${inputValue.value}</b> is not a palindrome`;
    }
})