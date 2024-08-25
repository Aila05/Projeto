// document.querySelector(<seletor>)

function operacao(){
    const n1  = Number(document.querySelector('#num1').value);
    const n2  = Number(document.querySelector('#num2').value);
    const per = document.querySelector('#oper').value;

    let resultado = 0;
    if(per == 'soma'){
        resultado = n1 + n2;
    }else if(per == 'subtracao'){
        resultado = n1 - n2;
    }else if(per == 'divisao'){
        resultado = n1 / n2;
    }else if(per == 'multiplicacao'){
        resultado = n1 * n2;
    }else if(per == 'potencia'){
        resultado = n1 ** n2;
    }else{
        resultado = n1 ** (1/n2);
    }
    
    const p = document.querySelector('p');
    p.innerText = resultado;
}
