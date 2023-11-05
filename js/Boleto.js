function recarga() {
  window.location.reload()
}
function compra() {
  var nmb = document.getElementById('nombre').value;
  var apl = document.getElementById('apellido').value;
  var cor = document.getElementById('correo').value;
  var pasa=0;
  if(nmb.length == 0 || apl.length == 0 || cor.length == 0) {
    alert('Debe colocar el nombre, apellido y correo');
    pasa=1;
  }
  if (pasa==0) {
    cant = parseInt(document.getElementById('cantidad').value);
    tipo = document.getElementById('categoria').value;
    console.log('cantidad ',cant);
    console.log(tipo);
    if ( isNaN(cant)) {
         cant = 0;
    }
    valor=1;
    console.log('cantidad convertida',cant);
    if (cant <= 0) {
      alert('Por favor, coloque una cantidad mayor a cero(0)');    
    } else {
      descuento='0%';
      switch (tipo) {
        case 'Estudiante':
          valor=.20;
          descuento='20%';
          break;
        case 'Trainee':
          valor=.50;
          descuento='50%';
          break;
        case 'Junior':
          valor=.75;
          descuento='75%';
          break;
          default:
            valor=1;
          break;
      }
      total=(valor*200)*cant;
      document.getElementById('total').innerHTML ='Tickets '+cant+', Descuento: '+descuento+', monto a pagar $: '+total;
      alert('Gracias por su compra, Total a pagar $: '+total);
    }
  }  
}