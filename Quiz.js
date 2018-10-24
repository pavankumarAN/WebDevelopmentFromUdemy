const rashmi = [['Enter your user name','rashmipj'],
['enter your password',9620777408],
['what is your father name?','phakkireddy'],
['what is your mother name?','gayathri'],
['what is your brother name','krishnareddy']];
let name=prompt(rashmi[0][0]);
if(rashmi[0][1]===name.toLowerCase().trim()) {
let pass = prompt('Welcome '+name+' '+rashmi[1][0]); 
if(pass==rashmi[1][1]) {
    alert("You are successfully logged in to Quiz factory and here we fire questions for you");
    let fatherName=prompt(rashmi[2][0]);
    if(fatherName.toLowerCase().trim()===rashmi[2][1]) {
        let motherName = prompt(`very good ${name}. ${rashmi[3][0]}`);
        if(motherName.toLowerCase().trim()===rashmi[3][1]) {
            let brotherName = prompt(`very good ${name}. ${rashmi[4][0]}`);
            if(brotherName.toLowerCase().trim()===rashmi[4][1])
            {
                alert("Very good "+ name +" Your dad is proud of you");
            }
            else {
                alert("Waste Body we have your brother name as "+rashmi[4][1]);
            }
        }         
        else {
            alert("Idiot we have "+rashmi[3][1]+ " as your brother name");
        }
    }
    else {
        alert('Idiot we have '+rashmi[2][1]+' as your father name');
    }
}

else {
    alert('Please enter the correct password dear katte');
}
}
else {
    alert("Dana kayoke hogele rashmipj");
}