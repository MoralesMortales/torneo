const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

const textToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
};

const morseToText = (morse) => {
    const morseCodeMapReversed = Object.entries(morseCodeMap).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});

    return morse.split(' ').map(code => morseCodeMapReversed[code] || '').join('');
};

function convertirTextoAMorse() {
    const texto = document.getElementById('textoInput').value;
    const morse = textToMorse(texto);
    document.getElementById('resultadoMorse').textContent = morse;
}

function convertirMorseATexto() {
    const morse = document.getElementById('morseInput').value;
    const texto = morseToText(morse);
    document.getElementById('resultadoTexto').textContent = texto;
}
function ocultar() {
    var box1 = document.getElementById('traducir');
    var box2 = document.getElementById('escribir');
  
    if (box1.style.display === "none") {
      box1.style.display = "block";
      box2.style.display = "none";
    } else {
      box1.style.display = "none";
      box2.style.display = "block";  // Changed to 'block' to show box2
    }
  
  }
  