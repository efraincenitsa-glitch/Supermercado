const categorias = {
  CARNES:['Res','Pollo','Cerdo','Pescado','Jamón','Chorizo','Tocino','Salchicha'],
  FRUTAS:['Manzana','Plátano','Naranja','Uva','Pera','Mango','Fresa','Sandía'],
  VERDURAS:['Tomate','Cebolla','Lechuga','Papa','Zanahoria','Pepino','Chile','Brócoli'],
  LACTEOS:['Leche','Queso','Yogurt','Crema','Mantequilla','Requesón'],
  PANADERIA:['Pan Blanco','Bolillo','Baguette','Concha','Cuernito','Donas']
};

const cont = document.getElementById('catalogo');

function render(){
  cont.innerHTML='';
  for(let cat in categorias){
    cont.innerHTML+=`<div class="categoria">${cat}</div>`;
    categorias[cat].forEach(p=>{
      cont.innerHTML+=`
      <div class="fila">
        <input value="${p}">
        <input type="number" placeholder="Cant" oninput="calcular()">
        <input type="number" placeholder="$" oninput="calcular()">
        <input type="checkbox">
      </div>`;
    });
  }
}

function calcular(){
  let total=0;
  document.querySelectorAll('.fila').forEach(f=>{
    let c=f.children[1].value;
    let p=f.children[2].value;
    if(c && p) total+=c*p;
  });
  document.getElementById('totalGeneral').innerText='TOTAL GENERAL: $'+total.toFixed(2);
}

function agregarProducto(){
  categorias['OTROS'] = categorias['OTROS'] || [];
  categorias['OTROS'].push('Nuevo Producto');
  render();
}

render();
