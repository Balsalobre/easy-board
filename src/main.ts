import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="board-container">
    <div id="controls">
      <label for="fontSize">Tamaño:</label>
      <select id="fontSize">
        <option value="3rem">Pequeño</option>
        <option value="6rem" selected>Mediano</option>
        <option value="9rem">Grande</option>
      </select>

      <label for="fontWeight">Grosor:</label>
      <select id="fontWeight">
        <option value="400">Normal</option>
        <option value="700" selected>Negrita</option>
      </select>
      
      <label for="chalkColor">Color:</label>
      <select id="chalkColor">
        <option value="rgba(255, 255, 255, 0.9)" selected>Blanco</option>
        <option value="rgba(255, 235, 59, 0.9)">Amarillo</option>
        <option value="rgba(255, 171, 145, 0.9)">Rosa</option>
        <option value="rgba(129, 212, 250, 0.9)">Azul</option>
      </select>
    </div>
    <div id="board" contenteditable="true">
      ¡Escribe en la pizarra!
    </div>
  </div>
`;

const fontSizeSelect = document.getElementById('fontSize') as HTMLSelectElement;
const fontWeightSelect = document.getElementById(
  'fontWeight'
) as HTMLSelectElement;
const chalkColorSelect = document.getElementById(
  'chalkColor'
) as HTMLSelectElement;
const board = document.getElementById('board') as HTMLDivElement;

fontSizeSelect.addEventListener('change', () => {
  board.style.fontSize = fontSizeSelect.value;
});

fontWeightSelect.addEventListener('change', () => {
  board.style.fontWeight = fontWeightSelect.value;
});

chalkColorSelect.addEventListener('change', () => {
  board.style.color = chalkColorSelect.value;

  const color = chalkColorSelect.value.replace('0.9', '0.6');
  const color2 = chalkColorSelect.value.replace('0.9', '0.3');
  board.style.textShadow = `0 0 2px ${color}, 0 0 4px ${color2}`;
});
