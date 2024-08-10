function openWin() {
    window.open("http://127.0.0.1:5500/resume.html");
}
function openWin3() {
    window.open("http://127.0.0.1:5500/contct.html");
}















/*let a = 6;

function factorial (number){
let arr = Array.from(Array(number +1).keys())
let c = arr.slice(1,).reduce((a,b) => a*b)
return c;
}
function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac*index
        
    }
    return  fac
}
console.log(factorial(a))
console.log(facfor(a))*/


document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create a new link element
    var link = document.createElement("a");
    
    // Set the download attribute with a filename
    link.download = "resume.pdf";
    
    // Set the href to the file URL
    link.href = "path/to/your/resume.pdf";
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
});
