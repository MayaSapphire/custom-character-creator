function convertColor(hexa){
    if (!hexa) {
        hexa = "#000000";
    }
    var chunks = [];
    var tmp,i;
    hexa = hexa.substr(1); // remove the pound
    if ( hexa.length === 3){
        tmp = hexa.split("");
        for(i=0;i<3;i++){
            chunks.push(parseInt(tmp[i]+""+tmp[i],16));
        }
    } else if (hexa.length === 6){
        tmp = hexa.match(/.{2}/g);
        for(i=0;i<3;i++){
            chunks.push(parseInt(tmp[i],16));
        }
    } else {
        throw new Error("'"+hexa+"' is not a valid hex format");
    }

    return chunks;
}


function sanitize(input) {
    if (input == null) {
        return "";
    }
    return input.replace(/"/g, "\\\"").replace(/\n/g, "\\n");
}

function makeLoadout() {
    let problems = [];


    var formData = new FormData(document.querySelector('form'));

    let name = sanitize(formData.get('name'));
    let name_full = sanitize(formData.get('name_full'));
    let race = sanitize(formData.get('race'));
    let emoji = sanitize(formData.get('emoji'));
    let color = sanitize(formData.get('color'));
    let image_url = sanitize(formData.get('image_url'));
    let desc = sanitize(formData.get('desc'));
    let bio = sanitize(formData.get('bio'));
    let gender = sanitize(formData.get('gender'));
    
    if (gender == "gender_custom") {
        gender = sanitize(formData.get("gender_custom"));
        if (gender.length > 10) {
            problems.push("Length of gender must be 10 characters or fewer. You have entered " + gender.length + " characters.");
        }
    }

    let pronouns = sanitize(formData.get('pronouns'));

    if (pronouns == "pronouns_custom") {
        pronouns = sanitize(formData.get("pronouns_custom"));
    }

    let commander_priority = sanitize(formData.get('commander_priority'));
    let comms_priority = sanitize(formData.get('comms_priority'));
    let neron_priority = sanitize(formData.get('neron_priority'));
    let glory_path = sanitize(formData.get('glory_path'));

    if (!color) {
        color = "#000000";
    }

    const rawSkills = formData.getAll('skills');


    if (name.length > 12) {
        problems.push("Length of name must be 12 characters or fewer. You have entered " + name.length + " characters.");
    }
    if (name_full.length > 60) {
        problems.push("Length of full name must be 60 characters or fewer. You have entered " + name_full.length + " characters.");
    }
    if (race.length > 12) {
        problems.push("Length of race must be 12 characters or fewer. You have entered " + race.length + " characters.");
    }
    if (emoji.length > 30) {
        problems.push("Length of emoji must be 30 characters or fewer. You have entered " + emoji.length + " characters.");
    }
    if (desc.length > 100) {
        problems.push("Length of description must be 100 characters or fewer. You have entered " + desc.length + " characters.");
    }
    if (bio.length > 1000) {
        problems.push("Length of bio must be 1000 characters or fewer. You have entered " + bio.length + " characters.");
    }
    if (rawSkills.length > 7) {
        problems.push("You can only select up to 7 skills. You have selected " + rawSkills.length + ".");
    }
    if (formData.getAll('traits').length > 2) {
        problems.push("You can only select up to 2 traits. You have selected " + formData.getAll('traits').length + ".")
    }

    /*if (rawSkills.filter(skill => skill.includes("Limited")).length > 1) {
        problems.push("You can only select one Limited skill.");
    }*/
    let skills = "";
    if (rawSkills.length > 0) { 
        skills = "\"" +rawSkills.join('","') + "\"";
    }
    
    let traits = ""
    if (formData.getAll('traits').length > 0) {
        traits = "\"" + formData.getAll('traits').join('","') + "\"";
    }

    if (problems.length > 0) {
        document.getElementById("problems").innerHTML = "There are problems with your loadout:<br> <li>" + problems.join("</li><li>") + "</li>This tool will still generate a loadout, but you may experience issues with importing this loadout into the bot.<br>";
    } else {
        document.getElementById("problems").innerHTML = ""
    }


    const output = `{
"name":"${name}",
"name_full":"${name_full}",
"race":"${race}",
"emoji":"${emoji}",
"color":[${convertColor(color)}],
"image_url":"${image_url}",
"desc":"${desc}",
"bio":"${bio}",
"gender":"${gender}",
"pronouns":"${pronouns}",
"commander_priority":${commander_priority},
"comms_priority":${comms_priority},
"neron_priority":${neron_priority},
"glory_path":"${glory_path}",
"skills":[${skills}],
"traits":[${traits}]
}`
    document.getElementById("Output").value = output;

}


