import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="board-container">
    <div id="date-display"></div>
    <div id="controls">
      <div class="control-group">
        <label for="fontSize">Tamaño:</label>
        <select id="fontSize">
          <option value="2.5rem">Muy Pequeño</option>
          <option value="3.5rem">Pequeño</option>
          <option value="6rem" selected>Mediano</option>
          <option value="8rem">Grande</option>
          <option value="12rem">Muy Grande</option>
        </select>
      </div>

      <div class="control-group">
        <label for="fontWeight">Grosor:</label>
        <select id="fontWeight">
          <option value="300">Fino</option>
          <option value="400">Normal</option>
          <option value="700" selected>Negrita</option>
          <option value="900">Extra Negrita</option>
        </select>
      </div>
      
      <div class="control-group">
        <label for="chalkColor">Color:</label>
        <select id="chalkColor">
          <option value="rgba(255, 255, 255, 0.9)" selected>Blanco</option>
          <option value="rgba(255, 235, 59, 0.9)">Amarillo</option>
          <option value="rgba(255, 171, 145, 0.9)">Rosa</option>
          <option value="rgba(129, 212, 250, 0.9)">Azul Claro</option>
          <option value="rgba(76, 175, 80, 0.9)">Verde</option>
          <option value="rgba(255, 152, 0, 0.9)">Naranja</option>
          <option value="rgba(156, 39, 176, 0.9)">Morado</option>
          <option value="rgba(244, 67, 54, 0.9)">Rojo</option>
        </select>
      </div>

      <div class="action-buttons">
        <button class="btn btn-erase" id="eraseBtn">✏️ Borrador</button>
        <button class="btn btn-clear" id="clearBtn">🗑️ Limpiar</button>
      </div>
    </div>
    <div id="board" contenteditable="true">
      ¡Bienvenido al tablero digital! Haz clic aquí para escribir...
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
const clearBtn = document.getElementById('clearBtn') as HTMLButtonElement;
const eraseBtn = document.getElementById('eraseBtn') as HTMLButtonElement;

let isEraseMode = false;

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

// Clear board functionality
clearBtn.addEventListener('click', () => {
  if (confirm('¿Estás seguro de que quieres limpiar todo el tablero?')) {
    board.innerHTML = '¡Bienvenido al tablero digital! Haz clic aquí para escribir...';
    board.focus();
  }
});

// Erase mode functionality
eraseBtn.addEventListener('click', () => {
  isEraseMode = !isEraseMode;
  eraseBtn.classList.toggle('active', isEraseMode);
  eraseBtn.textContent = isEraseMode ? '✏️ Escribir' : '✏️ Borrador';
  board.style.cursor = isEraseMode ? 'crosshair' : 'text';
});

// Enhanced board interaction
board.addEventListener('click', (e) => {
  if (isEraseMode) {
    // In erase mode, select text for deletion
    const selection = window.getSelection();
    const range = document.createRange();
    
    if (e.target && e.target instanceof Element) {
      range.selectNodeContents(e.target);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'l') {
    e.preventDefault();
    clearBtn.click();
  }
  if (e.ctrlKey && e.key === 'e') {
    e.preventDefault();
    eraseBtn.click();
  }
});

// Focus management
board.addEventListener('focus', () => {
  if (board.textContent === '¡Bienvenido al tablero digital! Haz clic aquí para escribir...') {
    board.textContent = '';
  }
});

board.addEventListener('blur', () => {
  if (!board.textContent || board.textContent.trim() === '') {
    board.textContent = '¡Bienvenido al tablero digital! Haz clic aquí para escribir...';
  }
});