//your code here
document.getElementById("evaluatedText").value=""; // initially string is empty so count is also empty
document.addEventListener("keyup", function ()
{
    count=document.getElementById("evaluatedText").value; // here thisvalue will return the string
    document.querySelector("#letterCount").textContent=count.length;
})