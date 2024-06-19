document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("try-ysf");
    const div = document.getElementById("output");
  
    button.addEventListener("click", function() {
      div.innerHTML = `
      <h3>Escreva a frase que quiser</h3>
                    <input type="text" name="" id="asw-try-ysf" class="input-exercise">
                    <button class="btn-exercise" id="btn-pt2">Continuar</button>`;

      let buttonPt2 = document.getElementById("btn-pt2");
      let inputPt2 = document.getElementById('asw-try-ysf');
        
      buttonPt2.addEventListener('click', ()=>{
        let frase = inputPt2.value;
        div.innerHTML = `
            <strong>resultado</strong>
                <h1> ${frase} </h1>
                <pre ><code >print("${frase}")</code></pre>
        `
      })

    });
  });