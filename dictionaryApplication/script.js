const input = document.querySelector('input');
const btn = document.querySelector('button');
const dictionaryArea = document.querySelector('.dictionary-app');

// API URL: https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionaryFn(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    return data;
}

btn.addEventListener('click', fetchAndCreateCard);

async function fetchAndCreateCard() {
    const data = await dictionaryFn(input.value);
    console.log(data);

    if (!data || data.title === "No Definitions Found") {
        dictionaryArea.innerHTML = `<p style="color: red;">No definition found for "${input.value}".</p>`;
        return;
    }

    // Extracting Data Safely
    const word = data[0].word || "N/A";
    const phonetics = data[0].phonetics.length > 0 ? data[0].phonetics[0].text : "N/A";
    const audio = data[0].phonetics.length > 0 ? data[0].phonetics[0].audio : "";


    const definition = data[0].meanings.length > 0 ? data[0].meanings[0].definitions[0].definition : "N/A";
    const example = data[0].meanings.length > 0 ? data[0].meanings[0].definitions[0].example : "No example available";
    const partOfSpeech = data[0].meanings.length > 0 ? data[0].meanings[0].partOfSpeech : "N/A";

    dictionaryArea.innerHTML = `
        <div class="card">
            <div class="property">
                <span>Word:</span>
                <span>${word}</span>
            </div>
            <div class="property">
                <span>Phonetics:</span>
                <span>${phonetics}</span>
            </div>
            <div class="property">
                <span>
                <audio controls src="${audio}"
                </span>
                 
             </div>
            <div class="property">
                <span>Definition:</span>
                <span>${definition}</span>
            </div>
            <div class="property">
                <span>Example:</span>
                <span>${example}</span>
            </div>
            <div class="property">
                <span>Part of Speech:</span>
                <span>${partOfSpeech}</span>
            </div>
        </div>
    `;
}
