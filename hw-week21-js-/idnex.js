function saveColor() { 
    let color = document.getElementById("colorPicker").value; 
    document.body.style.backgroundColor = color; 
    sessionStorage.setItem("bgColor", color); 
} 

function clearColor() { 
    sessionStorage.removeItem("bgColor"); 
    document.body.style.backgroundColor = "white"; 
    document.getElementById("colorPicker").value = "#ffffff"; 
} 