const data = {
  Carnes:["Res","Pollo","Cerdo","Pescado","Jamón","Chorizo","Tocino","Salchicha","Arrachera","Bistec","Costilla","Chuleta","Molida","Pechuga","Alitas"],
  Verduras:["Tomate","Cebolla","Papa","Lechuga","Zanahoria","Pepino","Chile","Calabaza","Espinaca","Ajo","Cilantro","Apio","Brócoli","Coliflor","Elote"],
  Abarrotes:["Arroz","Frijol","Azúcar","Aceite","Sal","Harina","Pasta","Cereal","Galletas","Café","Té","Atún","Sopa","Mayonesa","Catsup"]
};

const app=document.getElementById("app");
const totalDiv=document.getElementById("total");
const catFilter=document.getElementById("categoryFilter");

catFilter.innerHTML='<option value="Todas">Todas</option>'+
Object.keys(data).map(c=>`<option>${c}</option>`).join("");

function render(){
 app.innerHTML="";
 let total=0;
 Object.keys(data).forEach(cat=>{
  if(catFilter.value!=="Todas" && catFilter.value!==cat) return;
  const cDiv=document.createElement("div");
  cDiv.className="category";
  cDiv.innerHTML=`<h3>${cat}</h3>`;
  data[cat].forEach(p=>{
    const row=document.createElement("div");
    row.className="item";
    row.innerHTML=`
      <span>${p}</span>
      <input type="number" min="0" value="0" class="qty">
      <input type="number" min="0" value="0" class="price">
      <strong>$0.00</strong>`;
    const q=row.querySelector(".qty");
    const pr=row.querySelector(".price");
    const s=row.querySelector("strong");
    function calc(){
      const sub=q.value*pr.value;
      s.textContent="$"+sub.toFixed(2);
      calcTotal();
    }
    q.oninput=pr.oninput=calc;
    cDiv.appendChild(row);
  });
  app.appendChild(cDiv);
 });
 calcTotal();
}

function calcTotal(){
 let t=0;
 document.querySelectorAll(".item strong").forEach(s=>{
  t+=Number(s.textContent.replace("$",""));
 });
 totalDiv.textContent="TOTAL: $"+t.toFixed(2);
}

catFilter.onchange=render;
render();
