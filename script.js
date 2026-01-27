const catalog = {
  "Carnes":["Res","Pollo","Cerdo","Pescado","Jamón","Chorizo","Tocino","Salchicha","Arrachera","Bistec","Costilla","Molida","Chuleta","Pechuga","Alitas"],
  "Frutas y Verduras":["Manzana","Plátano","Naranja","Limón","Tomate","Cebolla","Papa","Zanahoria","Lechuga","Aguacate","Fresa","Uva","Piña","Mango","Pepino"],
  "Lácteos y Cremería":["Leche","Queso","Yogur","Crema","Mantequilla","Queso Oaxaca","Queso Panela","Queso Manchego","Leche Deslactosada","Leche Light","Requesón","Media Crema","Nata","Queso Amarillo","Queso Cotija"],
  "Panadería":["Pan Blanco","Pan Integral","Bolillo","Birote","Conchas","Cuernitos","Donas","Pan Dulce","Pan Molido","Pan de Caja","Pan para Hot Dog","Pan para Hamburguesa","Roles","Bisquets","Pan de Ajo"],
  "Limpieza del Hogar":["Cloro","Detergente","Suavizante","Jabón Trastes","Limpiador Piso","Esponjas","Fabuloso","Escoba","Trapeador","Aromatizante","Desinfectante","Limpiavidrios","Cubeta","Guantes","Jalador"],
  "Higiene Personal":["Shampoo","Acondicionador","Jabón","Pasta Dental","Cepillo Dental","Desodorante","Rastrillos","Crema Corporal","Algodón","Enjuague Bucal","Toallas Sanitarias","Papel Higiénico","Gel","Crema Facial","Talco"],
  "Congelados":["Helado","Verduras Congeladas","Pizza","Papas","Nuggets","Hamburguesas","Paletas","Pescado Congelado","Camarón","Pollo Congelado","Carne Congelada","Waffles","Empanadas","Lasaña","Papas Gajo"]
};

const app=document.getElementById("app");
const totalDiv=document.getElementById("total");
const filter=document.getElementById("categoryFilter");

filter.innerHTML='<option value="Todas">Todas</option>'+Object.keys(catalog).map(c=>`<option>${c}</option>`).join("");

function render(){
  app.innerHTML="";
  let total=0;
  Object.keys(catalog).forEach(cat=>{
    if(filter.value!=="Todas" && filter.value!==cat) return;
    const box=document.createElement("div");
    box.className="category";
    box.innerHTML=`<h2>${cat}</h2>`;
    catalog[cat].forEach(p=>{
      const row=document.createElement("div");
      row.className="item";
      row.innerHTML=`<span>${p}</span>
      <label>Cant <input type="number" min="0" value="0"></label>
      <label>Precio <input type="number" min="0" value="0"></label>
      <strong>$0.00</strong>`;
      const [q,pr]=row.querySelectorAll("input");
      const sub=row.querySelector("strong");
      q.oninput=pr.oninput=()=>{
        const s=(q.value*pr.value)||0;
        sub.textContent="$"+s.toFixed(2);
        calc();
      };
      box.appendChild(row);
    });
    app.appendChild(box);
  });
}

function calc(){
  let t=0;
  document.querySelectorAll(".item strong").forEach(s=>t+=parseFloat(s.textContent.replace("$","")));
  totalDiv.textContent="TOTAL GENERAL: $"+t.toFixed(2);
}

filter.onchange=render;
render();
