const sourcelangsBox = document.getElementById('sourceLangsBox')
const targetLangsBox = document.getElementById('targetLangsBox')
const sourcelangBtn1 = document.querySelector('#sourcelangBtn1')
const sourcelangBtn2 = document.querySelector('#sourcelangBtn2')
const sourcelangBtn3 = document.querySelector('#sourcelangBtn3')
const sourcelangBtn4 = document.querySelector('#sourcelangBtn4')
const targetlangBtn1 = document.querySelector('#targetlangBtn1')
const targetlangBtn2 = document.querySelector('#targetlangBtn2')
const targetlangBtn3 = document.querySelector('#targetlangBtn3')
const targetlangBtn4 = document.querySelector('#targetlangBtn4')
const translateBTN = document.querySelector('.translateBtn')
let sourceInput = document.querySelector('#sourceInput')
let output = document.querySelector('#output')
let selectSourceLangOption = document.querySelector('#selectSourceLangOption')
let selectTargetLangOption = document.querySelector('#selectTargetLangOption')

selectSourceLangOption.addEventListener("change", () => {
    translateBTN.disabled = false
    sourceSelect = selectSourceLangOption.value
    console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);
    if(sourceSelect == 'select'){
        translateBTN.disabled = true
    }
})

selectTargetLangOption.addEventListener("change", () => {
    translateBTN.disabled = false
    targetSelect = selectTargetLangOption.value
    console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);
    if(targetSelect == 'select'){
        translateBTN.disabled = true
    }
})

let sourceSelect = 'en'
let targetSelect = 'az'

sourcelangBtn1.style.color = '#1966d2'
sourcelangBtn1.style.borderBottom = '2px solid #1966d2'
targetlangBtn2.style.color = '#1966d2'
targetlangBtn2.style.borderBottom = '2px solid #1966d2'

console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);

sourcelangsBox.addEventListener('click', function(e){
    sourcelangBtn1.style.color = '#6e7175'
    sourcelangBtn2.style.color = '#6e7175'
    sourcelangBtn3.style.color = '#6e7175'
    sourcelangBtn4.style.color = '#6e7175'
    sourcelangBtn1.style.borderBottom = '0'
    sourcelangBtn2.style.borderBottom = '0'
    sourcelangBtn3.style.borderBottom = '0'
    sourcelangBtn4.style.borderBottom = '0'
    translateBTN.disabled = false
    if(targetSelect === e.target.value){
        translateBTN.disabled = true
        return
    }
    e.target.style.color = '#1966d2'
    e.target.style.borderBottom = '2px solid #1966d2'
    sourceSelect = e.target.value
    console.log('sourcelang', sourceSelect);
})

targetLangsBox.addEventListener('click', function(e){
    targetlangBtn1.style.color = '#6e7175'
    targetlangBtn2.style.color = '#6e7175'
    targetlangBtn3.style.color = '#6e7175'
    targetlangBtn4.style.color = '#6e7175'
    targetlangBtn1.style.borderBottom = '0'
    targetlangBtn2.style.borderBottom = '0'
    targetlangBtn3.style.borderBottom = '0'
    targetlangBtn4.style.borderBottom = '0'
    translateBTN.disabled = false
    if(sourceSelect === e.target.value){
        translateBTN.disabled = true
        return
    }
    e.target.style.color = '#1966d2'
    e.target.style.borderBottom = '2px solid #1966d2'
    targetSelect = e.target.value
    console.log('targetLang', targetSelect);
})


async function translate(sourceSelect, targetSelect, sourceInput){
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '6e28a6c431msh0e9881c32ad023bp1037b5jsneeb2674a6b68',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: sourceSelect,
		target_language: targetSelect,
		text: sourceInput.value
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return result.data.translatedText
} catch (error) {
	console.error(error);
}
}

async function translateBtn(){
    if(sourceInput.value === ''){
        return
    }
    output.innerHTML = await translate(sourceSelect, targetSelect, sourceInput)
    output.style.color = '#000'
}