// object literal
var petSalon ={
    name:"The Pet Shop",
    address:{
        street:"Marline Ave",
        number:"123",
        zip:"19999"
    },
    hours:{
        open:"9:00 am",
        close:"12:00 pm"
    },
    pets:[{
        name:"Scooby-Do",
        age:99,
        gender:"Male",
        breed:"Dane",
        service:"Grooming"
    
    },
    {
        name:"Scrappy-Do",
        age:25,
        gender:"Male",
        breed:"mixed",
        service:"Shots"
    },  
    {
        name:"Rambo",
        age:40,
        gender:"Male",
        breed:"Mixed-lab",
        service:"bath"
    }  

    ]
}
console.log(petSalon.name);
console.log(petSalon.address.zip);
console.log(petSalon.pets[1].service)
document.getElementById("results").innerHTML+=`
<h2>Number of Pets Registered ${petSalon.pets.length}</h2>`

/*make a for loop that 
console logs each pet name
then send it to the html
then add css to it*/
function displayPets(){
    for(let i =0; i <petSalon.pets.length; i++){
        console.log(petSalon.pets[i])
        console.log(petSalon.pets[i].name)
        document.getElementById("results").innerHTML+=`
        <p>${petSalon.pets[i].name}</p>
        `
    }
}

displayPets()

