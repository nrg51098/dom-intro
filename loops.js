const colors=["yellow", "orange", "blue", "red"];

const colorloop = () => {
    let domstring = '';
    for (let index = 0; index < colors.length; index++) {
        domstring += `<h2>${colors[index]}</h2>`;
        
    }
    console.log(domstring);
}




const instructors= [
{
    firstName: "Nikhil",
    lastName: "Gaikwad"
},
{
    firstName: "Luke",
    lastName: "Lancaster"
},
{
    firstName: "Matt",
    lastName: "Gill"
},
{
    firstName: "Shawn",
    lastName: "Garrison"
}]

const instructorloop = (namesObj) =>{
    let instructorString ="";

    for (let index = 0; index < namesObj.length; index++) {
        instructorString += `<h2>First Name: ${namesObj[index].firstName}</h2>`;
        instructorString += `<h2>Last Name: ${namesObj[index].lastName}</h2>`;
    }

    console.log(instructorString);
    document.body.innerHTML = instructorString;
}


const init = () => {
    
    instructorloop(instructors);
}

init();







