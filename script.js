
const catalogo = {
  "Carnes":["Res","Pollo","Cerdo","Pescado","Jamón","Chorizo","Tocino","Salchicha","Arrachera","Costilla","Milanesa","Carne Molida","Chuleta","Longaniza","Bistec"],
  "Frutas y Verduras":["Manzana","Plátano","Naranja","Limón","Jitomate","Cebolla","Papa","Zanahoria","Lechuga","Aguacate","Pepino","Fresa","Uva","Piña","Mango"],
  "Lácteos y Cremería":["Leche","Queso","Yogurt","Mantequilla","Crema","Queso Oaxaca","Queso Panela","Queso Manchego","Leche Deslactosada","Leche Entera","Requesón","Nata","Media Crema","Queso Crema","Leche Light"],
  "Panadería":["Bolillo","Pan de Caja","Concha","Cuerno","Donas","Pan Integral","Baguette","Pan Dulce","Roles","Pan Molido","Tortillas Harina","Tortillas Maíz","Pan Blanco","Pan Multigrano","Pan Tostado"],
  "Limpieza del Hogar":["Cloro","Detergente","Suavizante","Jabón Trastes","Esponjas","Escoba","Trapeador","Fabuloso","Pinol","Desinfectante","Limpiavidrios","Aromatizante","Bolsas Basura","Guantes","Fibra"],
  "Higiene Personal":["Papel Higiénico","Jabón","Shampoo","Acondicionador","Pasta Dental","Cepillo Dental","Desodorante","Crema Corporal","Rastrillos","Gel","Enjuague Bucal","Algodón","Toallas Húmedas","Protector Solar","Talco"],
  "Congelados":["Helado","Papas Congeladas","Nuggets","Verduras Congeladas","Pizza","Hamburguesas","Hielo","Pescado Congelado","Pollo Congelado","Waffles","Panqueques","Paletas","Lasaña","Empanadas","Croquetas"]
};

const app=document.getElementById("app");
let total=0;

for(const cat in catalogo){
  const c=document.createElement("div");
  c.className="category";
  c.textContent=cat;
  app.appendChild(c);

  catalogo[cat].forEach(p=>{
    const d=document.createElement("div");
    d.className="item";
    d.innerHTML=`
      <span>${p}</span>
      <label>Cant</label><input type="number" min="0" value="0">
      <label>Precio</label><input type="number" min="0" value="0">
      <strong>$0.00</strong>
    `;

    const inputs=d.querySelectorAll("input");
    const price=d.querySelector("strong");

    inputs.forEach(i=>i.oninput=()=>{
      const sub=inputs[0].value*inputs[1].value;
      price.textContent="$"+sub.toFixed(2);
      calc();
    });

    app.appendChild(d);
  });
}

function calc(){
  total=0;
  document.querySelectorAll(".item").forEach(i=>{
    total+=parseFloat(i.querySelector("strong").textContent.replace("$",""));
  });
  document.getElementById("total").textContent="TOTAL: $"+total.toFixed(2);
}
