let baseApiUrl = "https://data.police.uk/api/";
let county = "leicestershire";


$(document).ready(function () {
    loadNeighbourHoods(county);
    $('#countyName').text(county);
});

async function loadNeighbourHoods(area) {
    let hoods;

    try {
        hoods = await $.ajax({
            url: baseApiUrl + area + "/neighbourhoods",
            type: "GET",
            crossDomain: true
        });
    } catch (error) {
        console.log("Neighbourhood not found " + `${error}`);
    }

    hoods.forEach(hood => {
        $("#neighbourhoods").append(`<li value=${hood.id}>${hood.name}</li>`);
    });

    $("#neighbourhoods > li").click(function () {
        loadTeam($(this).attr("value"));
    });
}

async function loadTeam(areaId) {
    let people;

    try {
        people = await $.ajax({
            url: `${baseApiUrl}${county}/${areaId}/people`,
            type: "GET",
            crossDomain: true
        });
    } catch (error) {
        console.log("People not found " + `${error}`);
    }
    console.log(people);
    $('#teamBio').empty();
    people.forEach(person => {
        $("#teamBio").append(`<li>Name:${person.name} (${person.rank}) ${person.bio}</li>`);
    });
}