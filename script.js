const data = {
  Carnes: ["Res","Pollo","Cerdo","Pescado"],
  Verduras: ["Tomate","Cebolla","Papa","Lechuga"],
  Abarrotes: ["Arroz","Frijol","Azúcar","Aceite"]
};

const lista = document.getElementById("lista");
const totalDiv = document.getElementById("total");

function render(){
  lista.innerHTML = "";
  let total = 0;

  for(const cat in data){
    const catDiv = document.createElement("div");
    catDiv.className = "categoria";
    catDiv.textContent = cat;
    lista.appendChild(catDiv);

    data[cat].forEach(nombre=>{
      const p = document.createElement("div");
      p.className = "producto";

      const span = document.createElement("span");
      span.textContent = nombre;

      const cant = document.createElement("input");
      cant.type="number"; cant.min=0; cant.value=0;

      const precio = document.createElement("input");
      precio.type="number"; precio.min=0; precio.value=0;

      const subtotal = document.createElement("strong");
      subtotal.textContent = "$0.00";

      function calc(){
        const sub = cant.value * precio.value;
        subtotal.textContent = "$"+sub.toFixed(2);
        updateTotal();
      }

      cant.oninput = calc;
      precio.oninput = calc;

      p.append(span,cant,precio,subtotal);
      lista.appendChild(p);
    });
  }
}

function updateTotal(){
  let t=0;
  document.querySelectorAll(".producto").forEach(p=>{
    const c=p.children[1].value;
    const pr=p.children[2].value;
    t+=c*pr;
  });
  totalDiv.textContent="TOTAL: $"+t.toFixed(2);
}

render();
