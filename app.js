var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var txtOutput=document.querySelector("#output");
var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverURL + "?" +"text=" + input
    
}
function clickHandler(){
    // taking value
    var inputText = txtInput.value;
 
    // calling server 
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json =>
            {
            var translatedText= json.contents.translated;
            txtOutput.innerText=translatedText;

            })
      

    };
btnTranslate.addEventListener("click", clickHandler)

  