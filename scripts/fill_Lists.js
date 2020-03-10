function getStates() {
    var url, stateOptions;
    url = '/jsonFiles/states.json';


    fetch(url)
    .then(Response=>Response.json())
    .then(json=>{

        Object.keys(json).forEach(function(key){

            let option = document.createElement('option');
            option.value = json[key].abbreviation; 
            option.innerHTML=json[key].name;
            document.getElementById("states[]").appendChild(option);
        });//end of loop
    })//end of then
}//end of getStates


function showAndFillCities(){
    document.getElementById("cities").hidden = false;
    var x = document.getElementById("StatesID");
    var url='/jsonFiles/'+x.value+'.json';
    
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>{

        Object.keys(json).forEach(function(key){
            //console.log(json[key]);
            let option = document.createElement('option');
            option.value = json[key].city; 
            option.innerHTML=json[key].city;
            document.getElementById("cities[]").appendChild(option);
        });//end of loop
    })//end of then
    
}//end of showAndFillCities

function changeToDisplay(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: value
    }));
}//end of changeToDisplay