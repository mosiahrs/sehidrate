function calcular(){
  let bebeu = window.document.getElementById('quantidade')
  let res = window.document.getElementById('resultado')
  let qtd = Number(bebeu.value)

  res.innerHTML = `<p> Você bebeu ${qtd} litros de água, Parabéns está se hidratando direitinho</p><br><p>Gabriel se orgulha de você</p>`

  if(qtd < 3){
    res.innerHTML = `<br><p>Você não está se hidratando direitinho! É preciso pelo menos <strong> 3 lts</strong> de água por dia <br><br>Gabriel não vai ficar orgulhoso de você</p>`
  }
}