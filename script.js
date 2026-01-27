function calcular(){
  let total = 0;
  document.querySelectorAll('input[placeholder="$"]').forEach(input=>{
    total += Number(input.value || 0);
  });
  document.getElementById('total').textContent = '$' + total.toFixed(2);
}
