const terminal = document.getElementById('terminal');
const inputBox = document.getElementById('input');
const output = document.getElementById('output');

   const storedName = localStorage.getItem('name');
   if (storedName) {
   output.textContent = `Hello, ${storedName}! Nice to see you again.`;
   inputBox.style.display = 'none'; 
 }

inputBox.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const command = inputBox.value.trim().toLowerCase();
    if (command === 'clear') {
      localStorage.clear(); 
      window.location.reload(); 
    } else {
      output.textContent = `Unknown command: ${command}`;
    }
    inputBox.value = '';
    inputBox.style.display = 'none'; 
}});