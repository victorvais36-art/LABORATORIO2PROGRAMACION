// 1. Click
document.getElementById('event-click').addEventListener('click', () => {
    alert('¡Evento Click ejecutado!');
});

// 2. Mouseover (Hover)
const hoverCard = document.getElementById('event-hover');
hoverCard.addEventListener('mouseover', () => {
    hoverCard.style.filter = 'brightness(90%)';
});
hoverCard.addEventListener('mouseout', () => {
    hoverCard.style.filter = 'brightness(100%)';
});

// 3. Double Click
document.getElementById('event-double').addEventListener('dblclick', () => {
    alert('¡Doble click detectado!');
});

// 4. Keydown
document.getElementById('event-key').addEventListener('keydown', (e) => {
    console.log('Tecla presionada: ' + e.key);
});

// 5. Focus
document.getElementById('event-focus').addEventListener('focus', (e) => {
    e.target.style.background = '#fff';
});

// 6. Blur
document.getElementById('event-blur').addEventListener('blur', (e) => {
    e.target.style.background = 'transparent';
    console.log('El usuario salió del input');
});

// 7. Submit
document.getElementById('event-submit').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado');
});

// 8. Change
document.getElementById('event-change').addEventListener('change', (e) => {
    alert('El valor cambió a: ' + e.target.value);
});