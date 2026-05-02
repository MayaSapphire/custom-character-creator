function convertColor(hexa){
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
        return null
    }
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;").replace(/\n/g, "\\n");
}

function makeLoadout() {

    var formData = new FormData(document.querySelector('form'));

    const name = sanitize(formData.get('name'));
    const name_full = sanitize(formData.get('name_full'));
    const race = sanitize(formData.get('race'));
    const emoji = sanitize(formData.get('emoji'));
    const color = sanitize(formData.get('color'));
    const image_url = sanitize(formData.get('image_url'));
    const desc = sanitize(formData.get('desc'));
    const bio = sanitize(formData.get('bio'));
    const gender = sanitize(formData.get('gender'));
    const pronouns = sanitize(formData.get('pronouns'));
    const commander_priority = sanitize(formData.get('commander_priority'));
    const comms_priority = sanitize(formData.get('comms_priority'));
    const neron_priority = sanitize(formData.get('neron_priority'));
    const glory_path = sanitize(formData.get('glory_path'));

    const skills = sanitize(formData.getAll('skills').join('","'));
    const traits = sanitize(formData.getAll('traits').join('","'));

    const output = `{
"name":"${name}",
"name_full":"${name_full}",
"race":"${race}",
"emoji":"👤",
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
"skills":["${skills}"],
"traits":["${traits}"]
}`

    document.getElementById("Output").innerHTML = output;

}
