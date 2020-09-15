
var prince=confirm("are you Prince ?");

if(prince){
    alert("yes");
}
else{
    alert('No, i am Pranto');
}




var count= 0;
$("h2").text("Play Game");



$(".bag-ghor").click(function(){
	count = count+1;
	$(this).text(count);
});