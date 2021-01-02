function age() {
   
      alert("мне 18");
    } 
var car = "Audi";
alert(car.length);

function start() {
   //Создадим переменную с текстом который будет выведен на страницу
   txt='Данный текст будет отображен через 3 секунды после  полной загрузки документа.';
   //Выведем на страницу текст через 3 секунды после загрузки документа
   setTimeout('alert("прошло 3 секунды")',3000);
}
function getViews() {				//определение и использование функций
  
  var numberViews = 37;
  numberViews++;
	 
  return numberViews;
}
for (var i = 0; i < 10; i++) { //оператор цикла
  if (i == 7) {
    break;						//оператор ветвления
  }
}
console.log(i);
var myBoolean = true;
if (myBoolean == true) {alert("булеан верный")}
  var myString = "My string";
alert("myString")
window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Рисуем окружность 
     context.strokeStyle = "#000";
     context.fillStyle = "#fc0";
     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем левый глаз 
     context.fillStyle = "#fff";
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем правый глаз 
     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем рот
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
   }
   (function() {
    var cx = '007922824692736228963:5cr9mkfktyy';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
    })();
