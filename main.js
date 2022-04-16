function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('teachablemachine.withgoogle.com/models/1LDwSBSJ_/model.json', modelReady);
   
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected Voice Of - '+
        results[0].label;
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"; 1

        img = document.getElementById('animal_image');

        if(results[0].label == "Barking") {
            img.src = 'https://media0.giphy.com/media/m9pQ6KapT7Cq3DQ5DZ/200.gif';
        } else if (results[0].label == "Meowing") {
            img.src = 'https://media0.giphy.com/media/td3fwl4I8261W/giphy.gif';
        } else {
            img.src = 'https://c.tenor.com/odxwLexlnCAAAAAC/big-ears-im-listening.gif';
        }
    
    }
        
}