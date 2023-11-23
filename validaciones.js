const input = document.querySelector('input')
const counter = document.querySelector('span')
const char = document.querySelector('h5')

counter.style.color = 'red'

input.addEventListener('input', e => {
    if(input.value.length < 20){
        counter.innerText = input.value.length;
    }else{
        counter.innerText = '20';
        input.value = input.value.substring(0,20)
    }
})

function Numeros(string){
    var out = '';
    var filtro = '1234567890';
	
    
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             
	     out += string.charAt(i);
	
    
    return out;
} 

function Especiales(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijlmnñopqrstuvwxyz0123456789#%/&";
    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 &&!tecla_especial){
        alert("Ingresar mayuscula, minuscula y caracter especial permitidos")
        return false;
    }

}



function validarPswd(){
    pass1 = document.getElementById('pass1')
    pass2 = document.getElementById('pass2')

    if (pass1.value != pass2.value) {
    alert("Las claves no coinciden")
    
    }else{
    alert("Las claves coinciden")
        
    }
}
   
    var favColor = document.getElementById('favColor');
    document.getElementById('habilitarSi').addEventListener('click', function(e){
        console.log('input text habilitados');
        favColor.disabled = false;
    });

    document.getElementById('habilitarNo').addEventListener('click', function(e){
        console.log('Deshabilitado');
        favColor.disabled = true;
    });
    
    var favMarca = document.getElementById('favMarca');
    document.getElementById('habilitarSi').addEventListener('click', function(e){
        console.log('input text habilitados');
        favMarca.disabled = false;
    });

    document.getElementById('habilitarNo').addEventListener('click', function(e){
        console.log('Deshabilitado');
        favMarca.disabled = true;
    });

    var favEstilo = document.getElementById('favEstilo');
    document.getElementById('habilitarSi').addEventListener('click', function(e){
        console.log('input text habilitados');
        favEstilo.disabled = false;
    });

    document.getElementById('habilitarNo').addEventListener('click', function(e){
        console.log('Deshabilitado');
        favEstilo.disabled = true;
    });

    var favModelo = document.getElementById('favModelo');
    document.getElementById('habilitarSi').addEventListener('click', function(e){
        console.log('input text habilitados');
        favModelo.disabled = false;
    });

    document.getElementById('habilitarNo').addEventListener('click', function(e){
        console.log('Deshabilitado');
        favModelo.disabled = true;
    });
    
    const range1 = document.querySelector("#range1")
    const texto1 = document.querySelector("#r1")
    const range2 = document.querySelector("#range2")
    const texto2 = document.querySelector("#r2")

    range1.oninput = () => {
        texto1.innerHTML = range1.value
    }

    range2.oninput = () => {
        texto2.innerHTML = range2.value
    }
    
    


