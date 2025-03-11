import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="board-container">
    <div id="date-display"></div>
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
      ¡Hola mundo!
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
const dateDisplay = document.getElementById('date-display') as HTMLDivElement;

function updateDate() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dateString = now.toLocaleDateString('es-ES', options);
  
  // Capitalizar la primera letra del día de la semana
  const formattedDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);
  dateDisplay.textContent = formattedDate;
}

// Actualizar la fecha al cargar la página
updateDate();

// Comprobar y actualizar la fecha cada día a las 00:01
setInterval(() => {
  const now = new Date();
  if (now.getHours() === 0 && now.getMinutes() === 1) {
    updateDate();
  }
}, 60000); // Comprobar cada minuto

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