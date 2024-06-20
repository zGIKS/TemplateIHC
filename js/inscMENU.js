document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
  
    console.log('Nombre:', firstName, 'Apellidos:', lastName, 'Sexo:', gender);
  
  });