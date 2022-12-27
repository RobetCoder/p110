Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90,
})
camera = document.getElementById("camera");
Webcam.attach("#attach");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j30NEWX8X/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}