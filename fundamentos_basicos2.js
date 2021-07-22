/*1.  Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”*/
function reemplaceBig (array) {
    var x = "big"
    for (var i = 0; i < array.length; i++) {
        if (array[i]>0) {
            array[i]=x;
        };    
    }
    return array;
}
var array = [-1,-3,2]
console.log (reemplaceBig(array));

/*2. Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor*/
function mayorMenorArray(array) {
    var mayor = array [0];
    var menor = array [0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]>mayor) {
            mayor=array[i];    
        } 
        if (array[i]<menor){ 
            menor=array[i]; 
        console.log(menor);
        };
    };
    return mayor;
}
var array = [-1,-3,2]
console.log (mayorMenorArray(array));

/*3. Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/
function penultimoEimpar(array){
    var large = array.length;
    console.log(array[large - 2])
    for (var i = 0; i < large; i++){
        if (array[i]%2 == 1);
        {
            return array[i]
        }
    }   
}
array = [1,3,2]
console.log(penultimoEimpar(array));


/*4. Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.*/
function dobleVision(array){
    var newarray = [];  
     for (var i = 0; i< array.length; i++){
         newarray.push(array[i]*2);
     }
     return (newarray); 
 }
 array = [1,2,3]
 console.log(dobleVision(array));


/*5. Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3]*/
function contarPositivos(array){
    var contar = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i]>0) {
            contar++;
           array[array.length-1] = contar
        };    
    }
    return array;
}
array = [-1,1,1,1]
console.log(contarPositivos(array));

/*6. Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/
function paresImpares(array){
    var contar = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 == 1);
            contar++;
            /*if contar = 3;*/
                print('¡que imparcial')
        

        
    }
}

/*7.  Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. */
function incrementaSegundos(arr) {
    newarray = []
    for (var i = 1; i < arr.length; i+2){
        newarray = arr[i]+1;
        console.log(newarray)
    }
    return arr
}
arr = [1,2,3,4,5,6]
console.log(arr)
/*8. Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/
function longitudesPrevias(array){
    for (var i = array.length-1; i>0; i--){
        array[i] = array[i-1].length;
    }
    return array
}
array = ['programar', 'dojo', 'genial']
console.log(longitudesPrevias(array));

/*9.  Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. */
function agregaSiete(array){
    var newarray = [];  
     for (var i = 0; i< array.length; i++){
         newarray.push(array[i]+7);
     }
     return (newarray); 
 }
 array = [1,2,3]
 console.log(agregaSiete(array));

/*10. Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).*/
function arrayInverso(array){
    for (var i = 0; i < array.length/2; i++){
        var temp = array[i]
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array
}
array = [3,1,6,4,2]
console.log(arrayInverso(array));

/*11. Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/
function perspectivaNegativa(array){
    var newarray = []
    for (var i = 0; i< array.length; i++){
        if (array[i]>0){
            newarray.push(array[i]*-1);
        }
        else{
            newarray.push(array[i]);
        }
    }
    return newarray
}
array = [1, -3, 5]
console.log(perspectivaNegativa(array));

/*12. Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */
function siempreHambriento(array){
    var newarray = []
    for (var i = 0; i< array.length; i++){
        if (array[i] == 'comida'){
            newarray.push('yummy');
        }
        if ('comida' == 0){
            /*console.log('tengo hambre');*/
        }
    }
    return newarray
}
array = ['comida', 'comida', 'dojo']
console.log(siempreHambriento(array));

array = ['coding', 'coding', 'dojo']
console.log(siempreHambriento(array));


/*13.  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. */
function cambiaHaciaElCentro(array){
    for (var i = 0; i < array.length/2; i++){
        var temp = array[i]
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
        i++
    }
 
    return array
}
array = ['true', 42, 'Ada', 2, 'pizza']
console.log(cambiaHaciaElCentro(array));
array = [1,2,3,4,5,6]
console.log(cambiaHaciaElCentro(array));

/*14. Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/
function escalaArray(array){
    var num = 0
    for (var i = 0; i < array.length; i++){
       array.push(array[i]*num)
    }
    return array
}
array = ([1,2,3], 3)
console.log(escalaArray(array));