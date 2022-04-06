'use strict'
let comCount = 0;
let meCount = 0;
function srb(i){
 
    let comChangeArr = Math.floor(Math.random() * 3);
    let img, img2, str


    if(i == 0){
        img = 'images/sc.png';
    }else if(i == 1){
        img = 'images/ro.png';
    }else{
        img = 'images/bo.png';
    }

    if(comChangeArr == 0){
        img2 = 'images/sc.png';
    }else if(comChangeArr == 1){
        img2 = 'images/ro.png';
    }else{
        img2 = 'images/bo.png';
    }

    if(i == comChangeArr){
        str = "비겼습니당"
    }else if((i==0&&comChangeArr==1||i==1&&comChangeArr==2||i==2&&comChangeArr==0)){
        str = "졌습니당 ㅠㅠ"
        comCount++;
    }else{
        str = "이겼습니당!!"
        meCount++;
    }
    if(meCount+comCount == 0){
        document.getElementById('game').innerHTML = "승률 = 0%";
    }else{
        document.getElementById('game').innerHTML = "승률 = "+(meCount/(meCount+comCount)*100).toFixed(0)+"%";
    }

    if(meCount+comCount == 5){
        if(meCount > comCount){
            str ="최종결과 승리!! "+meCount+"vs"+comCount;

        }else{
            str ="최종결과 패배 ㅠㅠ "+meCount+"vs"+comCount;

        }
        document.getElementById("sc").disabled = true;  
        document.getElementById("ro").disabled = true; 
        document.getElementById("bo").disabled = true; 
        document.getElementById("reload").innerHTML = "<button class='reload' onclick='reload()'>다시도전</button>";
    }
    document.getElementById('result').innerHTML = str;
    document.getElementById('me').style.backgroundImage= "url("+img+")";
    document.getElementById('com').style.backgroundImage="url("+img2+")";
    document.getElementById('meCount').innerHTML = meCount;
    document.getElementById('comCount').innerHTML = comCount;
    


}


function reload(){
    document.getElementById("sc").disabled = false;  
    document.getElementById("ro").disabled = false; 
    document.getElementById("bo").disabled = false;
    document.getElementById('meCount').innerHTML = "0";
    document.getElementById('comCount').innerHTML = "0";
    document.getElementById('game').innerHTML = "승률 0%";
    document.getElementById('result').innerHTML = "가위, 바위, 보를 선택하세요"
    document.getElementById("reload").innerHTML = "";
    comCount = 0;
    meCount = 0;

}