class TextReplacer {
  constructor(selector) {
      // Wybieranie elementów na podstawie selektora
      this.elements = document.querySelectorAll(selector);
      this.myArray = ["a", "A", "i", "I", "o", "O", "u", "U", "w", "W", "z", "Z", "e", "E"];
      this.replaceText();
  }

  replaceText() {
      this.elements.forEach(element => {
          let text = element.innerHTML;

          this.myArray.forEach(item => {
              // Zastępowanie elementów w tekstach
              const regex = new RegExp(` ${item} `, 'g'); 
              text = text.replace(regex, ` ${item}&nbsp;`);
          });

          // Ustawianie przetworzonego tekstu z powrotem do HTML
          element.innerHTML = text;
      });
  }
}

// Użycie komponentu dla wszystkich elementów 'main'
document.addEventListener('DOMContentLoaded', () => {
  new TextReplacer('main');
});