import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="controls">
<label for="fontSize">Tamaño:</label>
<select id="fontSize">
  <option value="1.5rem">Pequeño</option>
  <option value="2rem">Mediano</option>
  <option value="3rem" selected>Muy Grande</option>
</select>

<label for="fontWeight">Grosor:</label>
<select id="fontWeight">
  <option value="400">Normal</option>
  <option value="700" selected>Negrita</option>
</select>
</div>
<div id="board" contenteditable="true">
¡Escribe en la pizarra!
</div>

`;

const fontSizeSelect = document.getElementById('fontSize') as HTMLSelectElement;
const fontWeightSelect = document.getElementById('fontWeight') as HTMLSelectElement;
const board = document.getElementById('board') as HTMLDivElement;

fontSizeSelect.addEventListener('change', () => {
  board.style.fontSize = fontSizeSelect.value;
});

fontWeightSelect.addEventListener('change', () => {
  board.style.fontWeight = fontWeightSelect.value;
});
