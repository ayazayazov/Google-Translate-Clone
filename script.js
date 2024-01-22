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
// let selectSourceLangOption = document.querySelector('#selectSourceLangOption')
// let selectTargetLangOption = document.querySelector('#selectTargetLangOption')
const sourceLangsSelectBox = document.querySelector('#sourceLangsSelectBox')
const targetLangsSelectBox = document.querySelector('#targetLangsSelectBox')
const showMoreBtn = document.querySelector('.showMoreBtn')
const targetShowMoreBtn = document.querySelector('#targetShowMoreBtn')
const sourceShowMoreBtn = document.querySelector('#sourceShowMoreBtn')
let languages = []
let sourceSelect = 'en'
let targetSelect = 'az'

sourcelangBtn1.style.color = '#1966d2'
sourcelangBtn1.style.borderBottom = '2px solid #1966d2'
targetlangBtn2.style.color = '#1966d2'
targetlangBtn2.style.borderBottom = '2px solid #1966d2'

console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);

sourceLangsSelectBox.addEventListener('click', (e)=>{
    console.log(e.target.textContent, e.target.value);
    if(e.target.value === sourcelangBtn1.value){
        if(targetSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        sourceSelect = e.target.value
        resetSourceBtnsStyle()
        sourcelangBtn1.style.color = '#1966d2'
        sourcelangBtn1.style.borderBottom = '2px solid #1966d2'
        console.log('code run');
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === sourcelangBtn2.value){
        if(targetSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        sourceSelect = e.target.value
        resetSourceBtnsStyle()
        sourcelangBtn2.style.color = '#1966d2'
        sourcelangBtn2.style.borderBottom = '2px solid #1966d2'
        console.log('code run 2');
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === sourcelangBtn3.value){
        if(targetSelect === e.target.value){
            console.log('same langauge!!!');
            // translateBTN.disabled = true
            return
        }
        sourceSelect = e.target.value
        resetSourceBtnsStyle()
        sourcelangBtn3.style.color = '#1966d2'
        sourcelangBtn3.style.borderBottom = '2px solid #1966d2'
        console.log('code run 3');
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === sourcelangBtn4.value){
        if(targetSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        sourceSelect = e.target.value
        resetSourceBtnsStyle()
        sourcelangBtn4.style.color = '#1966d2'
        sourcelangBtn4.style.borderBottom = '2px solid #1966d2'
        console.log('code run 4');
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }
    sourcelangBtn4.value = sourcelangBtn3.value
    sourcelangBtn4.textContent = sourcelangBtn3.textContent
    sourcelangBtn3.value = sourcelangBtn2.value
    sourcelangBtn3.textContent = sourcelangBtn2.textContent
    sourcelangBtn2.value = sourcelangBtn1.value
    sourcelangBtn2.textContent = sourcelangBtn1.textContent
    sourcelangBtn1.value = e.target.value
    sourcelangBtn1.textContent = e.target.textContent
    resetSourceBtnsStyle()
    if(targetSelect === e.target.value){
        console.log('same langauge!!!');
        // translateBTN.disabled = true
        sourceSelect = sourcelangBtn2.value
        sourcelangBtn2.style.color = '#1966d2'
        sourcelangBtn2.style.borderBottom = '2px solid #1966d2'
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }
    sourceSelect = sourcelangBtn1.value
    sourcelangBtn1.style.color = '#1966d2'
    sourcelangBtn1.style.borderBottom = '2px solid #1966d2'
    sourceLangsSelectBox.style.display = 'none'
    sourceShowMoreBtn.style.transform = 'rotate(0deg)'
})

targetLangsSelectBox.addEventListener('click', (e)=>{
    console.log(e.target.textContent, e.target.value);
    if(e.target.value === targetlangBtn1.value){
        if(sourceSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        targetSelect = e.target.value
        resetTargetBtnsStyle()
        targetlangBtn1.style.color = '#1966d2'
        targetlangBtn1.style.borderBottom = '2px solid #1966d2'
        console.log('code run');
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === targetlangBtn2.value){
        if(sourceSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        targetSelect = e.target.value
        resetTargetBtnsStyle()
        targetlangBtn2.style.color = '#1966d2'
        targetlangBtn2.style.borderBottom = '2px solid #1966d2'
        console.log('code run 2');
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === targetlangBtn3.value){
        if(sourceSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        targetSelect = e.target.value
        resetTargetBtnsStyle()
        targetlangBtn3.style.color = '#1966d2'
        targetlangBtn3.style.borderBottom = '2px solid #1966d2'
        console.log('code run 3');
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }else if(e.target.value === targetlangBtn4.value){
        if(sourceSelect === e.target.value){
            // translateBTN.disabled = true
            return
        }
        targetSelect = e.target.value
        resetTargetBtnsStyle()
        targetlangBtn4.style.color = '#1966d2'
        targetlangBtn4.style.borderBottom = '2px solid #1966d2'
        console.log('code run 4');
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }
    targetlangBtn4.value = targetlangBtn3.value
    targetlangBtn4.textContent = targetlangBtn3.textContent
    targetlangBtn3.value = targetlangBtn2.value
    targetlangBtn3.textContent = targetlangBtn2.textContent
    targetlangBtn2.value = targetlangBtn1.value
    targetlangBtn2.textContent = targetlangBtn1.textContent
    targetlangBtn1.value = e.target.value
    targetlangBtn1.textContent = e.target.textContent
    resetTargetBtnsStyle()
    if(sourceSelect === e.target.value){
        console.log('same langauge!!!');
        // translateBTN.disabled = true
        targetSelect = targetlangBtn2.value
        targetlangBtn2.style.color = '#1966d2'
        targetlangBtn2.style.borderBottom = '2px solid #1966d2'
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
        return
    }
    targetSelect = targetlangBtn1.value
    targetlangBtn1.style.color = '#1966d2'
    targetlangBtn1.style.borderBottom = '2px solid #1966d2'
    targetLangsSelectBox.style.display = 'none'
    targetShowMoreBtn.style.transform = 'rotate(0deg)'
})

function resetSourceBtnsStyle(){
    sourcelangBtn1.style.color = '#6e7175'
    sourcelangBtn2.style.color = '#6e7175'
    sourcelangBtn3.style.color = '#6e7175'
    sourcelangBtn4.style.color = '#6e7175'
    sourcelangBtn1.style.borderBottom = '0'
    sourcelangBtn2.style.borderBottom = '0'
    sourcelangBtn3.style.borderBottom = '0'
    sourcelangBtn4.style.borderBottom = '0'
}

function resetTargetBtnsStyle(){
    targetlangBtn1.style.color = '#6e7175'
    targetlangBtn2.style.color = '#6e7175'
    targetlangBtn3.style.color = '#6e7175'
    targetlangBtn4.style.color = '#6e7175'
    targetlangBtn1.style.borderBottom = '0'
    targetlangBtn2.style.borderBottom = '0'
    targetlangBtn3.style.borderBottom = '0'
    targetlangBtn4.style.borderBottom = '0'
}

// selectSourceLangOption.addEventListener("change", () => {
//     sourcelangBtn1.style.color = '#6e7175'
//     sourcelangBtn2.style.color = '#6e7175'
//     sourcelangBtn3.style.color = '#6e7175'
//     sourcelangBtn4.style.color = '#6e7175'
//     sourcelangBtn1.style.borderBottom = '0'
//     sourcelangBtn2.style.borderBottom = '0'
//     sourcelangBtn3.style.borderBottom = '0'
//     sourcelangBtn4.style.borderBottom = '0'
//     selectSourceLangOption.style.borderBottom = '2px solid #1966d2'
//     translateBTN.disabled = false
//     sourceSelect = selectSourceLangOption.value
//     console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);
//     if(sourceSelect == 'select'){
//         translateBTN.disabled = true
//     }
// })

// selectTargetLangOption.addEventListener("change", () => {
//     targetlangBtn1.style.color = '#6e7175'
//     targetlangBtn2.style.color = '#6e7175'
//     targetlangBtn3.style.color = '#6e7175'
//     targetlangBtn4.style.color = '#6e7175'
//     targetlangBtn1.style.borderBottom = '0'
//     targetlangBtn2.style.borderBottom = '0'
//     targetlangBtn3.style.borderBottom = '0'
//     targetlangBtn4.style.borderBottom = '0'
//     selectTargetLangOption.style.borderBottom = '2px solid #1966d2'
//     translateBTN.disabled = false
//     targetSelect = selectTargetLangOption.value
//     console.log('sourcelang', sourceSelect, '\ntargetLang', targetSelect);
//     if(targetSelect == 'select'){
//         translateBTN.disabled = true
//     }
// })







sourcelangsBox.addEventListener('click', function(e){
    resetSourceBtnsStyle()
    // selectSourceLangOption.style.borderBottom = '0'
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
    resetTargetBtnsStyle()
    // selectTargetLangOption.style.borderBottom = '0'
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
    output.innerHTML = 'Translating...'
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

async function getLanguages(){
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e28a6c431msh0e9881c32ad023bp1037b5jsneeb2674a6b68',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    return result.data.languages;
} catch (error) {
	console.error(error);
}
}

sourceLangsSelectBox.style.display = 'none'
function sourceShowMoreBTN(){
    targetLangsSelectBox.style.display = 'none'
    console.log('click');
    if(sourceLangsSelectBox.style.display === 'none'){
        sourceShowMoreBtn.style.transform = 'rotate(-180deg)'
        sourceLangsSelectBox.style.display = 'block'
    }else{
        sourceLangsSelectBox.style.display = 'none'
        sourceShowMoreBtn.style.transform = 'rotate(0deg)'
    }
}
targetLangsSelectBox.style.display = 'none'
function targetShowMoreBTN(){
    sourceLangsSelectBox.style.display = 'none'
    console.log('click');
    if(targetLangsSelectBox.style.display === 'none'){
        targetShowMoreBtn.style.transform = 'rotate(-180deg)'
        targetLangsSelectBox.style.display = 'block'
    }else{
        targetLangsSelectBox.style.display = 'none'
        targetShowMoreBtn.style.transform = 'rotate(0deg)'
    }
}

async function getMoreLangs(){
    let result = await getLanguages()
    // result = result.filter((e) => e.code != 'hy')
    sourceLangsSelectBox.innerHTML = result.map((e)=>{
        return `
        <button value="${e.code}">${e.name}</button>
        `
    }).join('')
    targetLangsSelectBox.innerHTML = result.map((e)=>{
        return `
        <button value="${e.code}">${e.name}</button>
        `
    }).join('')
}

getMoreLangs()