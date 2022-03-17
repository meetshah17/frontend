// var m=new Array()
// var fname = ['meet','aryan','jay'];
// var id = [12,45,36];
//var dictionart_project=document.getElementById('project')
var dictionart_project = {"Roadhow": 23, "AV devs": 2 , "Street AI": 20 , "Object detection":15 , "Face recognization":52}

var number=window.prompt("Enter project name");


// function list()
// {
//     Roadhow.textcontent=23;
// }


var dynamic=document.querySelector('.container');
for(var i=0;i<dictionart_project[number];i++)
{   
    var fetch=document.querySelector('.container').innerHTML;
    dynamic.innerHTML=`
    <div class="cards">
            <div class="image">
                <img src="img_avatar.jpg" alt="">
            </div>
            <div class="title">
                <p>Emolpyee name:</p>
            </div>
            <div class="des">
                <p>Emolpyee ID:</p>
                <a href="#"><button>Read More...</button></a>
            </div>
        
    </div>` + fetch ;
}
;


