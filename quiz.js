var results = [false,false];
var finalscore = 0;

function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง P-I-M ย่อมาจาก PIM";
        result.style.color = 'green';
        results[0]=true;
    } else {
        result.textContent = "ยังไม่ถูก ลองใหม่อีกครั้ง";
        result.style.color = 'red';
        results[0]=false;
    }
    checkScore();
 }
 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง มหาวิทยาลัยศิลปากร ย่อว่า มศก.";
        result.style.color = 'green';
        results[1]=true;
    } else {
        result.textContent = "ยังไม่ถูก ลองใหม่อีกครั้ง";
        result.style.color = 'red';
        results[1]=false;
    }
    checkScore();
 }


 function checkScore(){
    finalscore = ((results[0]==true)?1:0)+((results[1]==true)?1:0);
    document.getElementsByClassName("score")[0].innerHTML = "Correct Answer is "+finalscore+ " of 2"; 
}
 