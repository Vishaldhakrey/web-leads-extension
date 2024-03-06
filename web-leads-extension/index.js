

let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEL = document.getElementById('list-el');
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); 

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}



tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // Access the 'tabs' variable inside this callback function
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
});


function render(myLeads) {
    let listItem = "";

    for(let i=0; i<myLeads.length; i++) {
        
        listItem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
            
        </li>`
    }

    ulEL.innerHTML = listItem;
}


deleteBtn.addEventListener('click', function(){
    localStorage.clear(); 
    myLeads = []; 
    render(myLeads); 
});


inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    }
});

