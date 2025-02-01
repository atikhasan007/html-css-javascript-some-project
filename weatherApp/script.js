//http://api.weatherapi.com/v1/current.json?key=99906ef584334757a69152043252601&q=Dhaka&aqi=no

//step: 1
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const searchButton = document.querySelector(".search_button");
const form = document.querySelector("form");

//step : 4
form.addEventListener('submit', searchForLocation)

let target = 'Mumbai'


//step: 2 
const fetchResults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=99906ef584334757a69152043252601&q=${targetLocation}&aqi=no`
    const res = await  fetch(url)
    const data =await res.json()
console.log(data);

    let locationName = data.location.name 
    let currentTime  = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text


updateDetails(temp, locationName, currentTime, condition)

}
//step : 4 
function updateDetails(temp, locationName, time, condition){

    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]
    let currentDay = getDayName(new Date(splitDate).getDay());
    console.log(currentDay);



    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition

}

//step: 3

function searchForLocation(e){
    e.preventDefault();

    target = searchField.value 
    fetchResults(target);

}


fetchResults(target);


//step: 5

function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday';
            case 1:
                return 'Monday';
                case 2:
                    return 'Tuesday';
                    case 3: 
                        return 'Wednesday';
                        case 4:
                            return 'Thursday';
                            case 5:
                                return 'Friday';
                                case 6:
                                    return 'saturday';
    }
}