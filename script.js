// var serverurl = "https://api.funtranslations.com/translate/pirate.json";

var serverurl="	https://api.funtranslations.com/translate/morse.json";

var inputText = document.querySelector(".input_text")
var output_text = document.querySelector(".translation");
var btn = document.querySelector("#btnTranslate");
console.log(inputText);

function newUrl(text) {
    return serverurl + "?" + "text=" + text;
}

function errorhanlder(error) {
    console.log("some error", error);
    alert("Something went wrong, please try again later");
}

function Translate() {
    var input = inputText.value;
    console.log(input);
    fetch(newUrl(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output_text.innerText = translatedText;
        })
        .catch(errorhanlder);

}

btn.addEventListener("click", Translate);