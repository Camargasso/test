var d = new Date ( 2018, 08, 12, 22, 45)
              /*ano, mês, dia, hora, minuto... e assim vai*/
console.log(d)
// quando passamos o mês em formato de número, o mesmo vai corresponder 
// ao index de um Array de [12] meses onde o 0 = janeiro e 11= dezembro 


var m = new Date (1000) /* quando se passa apenas um número indentifica-se como milisegundos*/
console.log(m)

var c = new Date (1000 * 60 * 5) /*é possível calcular uma data através de contas*/
console.log(c)  /*nesse ex inserimos 5 min*/

var s = new Date ('sep 05 2017 14:14') /*é possível criar uma data através de uma string mas a mesma deve estar em inglês*/
console.log(s)

var f = new Date ('05-15-2021') /*outra variação para criação de uma data*/
console.log(f.getDate()) /*Para selecionar apenas uma prop da data se executa essa função*/
console.log(f.getFullYear()) 

var g = new Date (1234578487) 
console.log(g) /*Para modificar uma prop da data se executa essa função*/
console.log(g.setDate(11)) 