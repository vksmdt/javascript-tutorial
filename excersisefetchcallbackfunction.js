const arr = [
  {
    definition:"the divine word of God; the second person in the Trinity (incarnate in Jesus)",
    partOfSpeech: "noun",
  },
  {
    definition: "a verbal command for action",
    partsOfSpeech: "noun",
  },
];
function getdata(data,callfunction) {
    setTimeout(() => {
        arr.push(data)
    }, 2000);
    callfunction()
    
}
function fetching() {
   document.getElementById("fetchdata").addEventListener('click',function () {
    setTimeout(() => {
        let str = ''
        arr.forEach(element => {
            str += `<li>${element.definition}</li>`
        });
        document.getElementById('stdnt').innerHTML=str
    }, 1000);
   })
}
let boj = {definition: "to store" , partsOfSpeech : "verb"};
getdata(boj,fetching)