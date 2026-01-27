const data = {
  Carnes: ["Res","Pollo","Cerdo"],
  Verduras: ["Tomate","Cebolla","Papa"],
  Abarrotes: ["Arroz","Frijol","Aceite"]
};

const app = document.getElementById("app");
const totalDiv = document.getElementById("total");
const search = document.getElementById("search");
const onlyQty = document.getElementById("onlyQty");
const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.innerHTML = '<option value="Todas">Todas</option>' +
  Object.keys(data).map(c=>`<option>${c}</option>`).join("");

function render(){
  app.innerHTML="";
  let total=0;

  Object.entries(data).forEach(([cat,items])=>{
    if(categoryFilter.value!=="Todas" && categoryFilter.value!==cat) return;

    const box=document.createElement("div");
    box.className="category";
    box.innerHTML=`<h2>${cat}</h2>`;

    items.forEach(name=>{
      if(search.value && !name.toLowerCase().includes(search.value.toLowerCase())) return;

      const row=document.createElement("div");
      row.className="item";
      row.innerHTML=`
        <span>${name}</span>
        <input type="number" min="0" value="0" class="qty">
        <input type="number" min="0" value="0" class="price">
        <strong class="sub">$0</strong>
      `;

      const [qty,price,sub]=row.querySelectorAll("input, strong");

      function calc(){
        const s = qty.value*price.value;
        sub.textContent = "$"+s.toFixed(2);
        updateTotal();
      }
      qty.oninput=price.oninput=calc;

      if(!onlyQty.checked || qty.value>0){
        box.appendChild(row);
      }
    });

    app.appendChild(box);
  });

  updateTotal();
}

function updateTotal(){
  let t=0;
  document.querySelectorAll(".sub").forEach(s=>{
    t+=parseFloat(s.textContent.replace("$",""));
  });
  totalDiv.textContent="TOTAL: $"+t.toFixed(2);
}

search.oninput=render;
onlyQty.onchange=render;
categoryFilter.onchange=render;

render();
