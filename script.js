const relations = ["Father","Mother", "Spouse","Child","Others"]

const countries = ["India", "United States of America","United Kingdom","New Zealand","South Korea"]
const states = {
    "India": [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"],
    "United States of America": ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
    "United Kingdom" : ['Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East-Sussex', 'Essex', 'Gloucestershire', 'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle-of-Wight', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'London', 'Merseyside', 'Middlesex', 'Norfolk', 'Northamptonshire', 'Northumberland', 'North-Humberside', 'North-Yorkshire', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South-Humberside', 'South-Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey', 'Tyne-and-Wear', 'Warwickshire', 'West-Midlands', 'West-Sussex', 'West-Yorkshire', 'Wiltshire', 'Worcestershire'],
    "New Zealand": ["Auckland","New Plymouth","Canterbury","Otago","Nelson","Wellington"],
    "South Korea":["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"],

    
}




function addOptionsForRelation(){
    var selectTag = document.getElementById("relation");
    selectTag.innerHTML = '<option value="">Select Relation with Nominee</option>';
    for(var i=0;i<relations.length;i++){
        // console.log(selectTag)
        var optionTag = document.createElement('option');
        optionTag.setAttribute('value',relations[i]);
        optionTag.textContent = relations[i];
        selectTag.appendChild(optionTag);
    }

}

function updateCountryOptions(){
    var countryTag = document.getElementById("country");
    countryTag.innerHTML = '<option value="">Select your country</option>';
    for(var i=0;i<countries.length;i++){
        var optionTag = document.createElement("option");
        optionTag.value=countries[i];
        optionTag.textContent = countries[i];
        countryTag.appendChild(optionTag);
    }
}

function updateStateOptions(){

    const selectedCountry = document.getElementById("country");
    const stateTag = document.getElementById("state");
    var country = selectedCountry.value;
    if(country!=""){
        stateTag.innerHTML = '<option value="">Select your State</option>';

        for(var i=0;i<states[country].length;i++){
            var optionElement = document.createElement('option');
            optionElement.value=states[country][i];
            optionElement.textContent = states[country][i];
            stateTag.appendChild(optionElement);
        }
    }
}



function logSubmission(e){
    e.preventDefault();
    if(e.target.password.value!=e.target.confirm.value){
        alert("Passwords not matching")
    }
    
    let x = Math.floor((Math.random()*10000)+1);
    var data = {
        "Reference No":x,
        "name":e.target.name.value,
        "email":e.target.email.value,
        "nominee":e.target.nominee.value,
        "relation":e.target.relation.value,
        "country":e.target.country.value,
        "state":e.target.state.value,
        "password":e.target.password.value,
    }

    let peopleData = localStorage.getItem('people')?JSON.parse(localStorage.getItem('people')):[];
    peopleData = [...peopleData,data];
    localStorage.setItem('people',JSON.stringify(peopleData));
    localStorage.setItem('person',JSON.stringify(data));
    window.location.href = "registration201.html";
    

    
}
document.addEventListener('DOMContentLoaded',()=>{
    addOptionsForRelation();
    updateCountryOptions();
    updateStateOptions();
    var form = document.getElementById("registerForm")
    form.addEventListener("submit",logSubmission)
})