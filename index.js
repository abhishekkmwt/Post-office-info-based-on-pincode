const tbody=document.getElementById("tbody");
function onSearch(){
    tbody.innerHTML=``;
    const elemnet= document.querySelector("div input");
    let pincode=elemnet.value.trim();
    fetchAPI(pincode);
}


async function fetchAPI(pincode){
    const response= await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const result =await response.json();
    displayAPIonUI(result[0].PostOffice);
}

function displayAPIonUI(dataArray){
      
    for(let data of dataArray){
        const tr = document.createElement("tr");
        tr.innerHTML=`
        <td>${data.Name}</td>
        <td>${data.BranchType}</td>
        <td>${data.Block}</td>
        <td>${data.Country}</td>
        <td>${data.DeliveryStatus}</td>
        <td>${data.District}</td>
        <td>${data.Division}</td>
        <td>${data.Pincode}</td>
        <td>${data.Region}</td>
        <td>${data.State}</td>`
        tbody.appendChild(tr);
    }
    
    
}