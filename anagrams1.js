let alphabetize=function (any) {
    return any.toLowerCase().split("").sort().join("").trim();
}
let getAnagramsOf= function (inputWord){
    let results =[ ]
    let sortedInputWord =alphabetize(inputWord)

    for (let i=0; i<words.length; i++){
        let dictionaryWord= words[i]

        let sortedDictionaryWord=alphabetize(dictionaryWord)

        if (sortedDictionaryWord === sortedInputWord) {
            results.push(dictionaryWord)
        }
}
let output= document.getElementById('output')
output.textContent = results
document.body.appendChild(output)
return results
}
const button = document.getElementById("findButton");
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}
