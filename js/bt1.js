// Vòng lặp bài tập 1
// Vòng lặp while

/**
 * Giải thích 
 * Khởi tạo các biến countChan và countLe rỗng để chứa dãy sô chẵn lẻ từ 0 đến 100
 * Tạo vòng lặp cho i chạy từ 0-100 và áp dụng cách chia 2 lấy phần dư để phân biệt số chẵn lẻ
 * Th1: i % 2 === 0 thì đó là số chẵn ==> countChan = countChan + " " +i 
 * Th2: ngược lại thì đó là số lẻ ==> countLe = countLe + " " +i
 * i chính là giá trị được chạy từ 0 đến 100
 * " " để hiện thị khoảng trắng cho đẹp hơn thôi
 * Hiển thị UI - Xuất giá trị counChan và CountLe
 */

/**
 function ChanLe (){
     var countChan = "";
     var countLe = "";
     var i = 0;
 
     while (i <= 100){
         if( i % 2 === 0){
             countChan = countChan + " " +i; 
         }else{
             countLe = countLe + " " +i;
         }
         i++
     }
     
 
     document.getElementById('txtResult1').innerHTML = "Số Chẵn: " + countChan + "<br>" + "Số lẻ: " + countLe;
 
 }
 * 
 */

// Vòng lặp for

function ChanLe (){
    var countChan = "";
    var countLe = "";
    
    for (var i = 0; i <= 100; i++){
        if( i % 2 === 0){
            countChan = countChan + " " +i; 
        }else{
            countLe = countLe + " " +i;
        }
        
    }
    
    document.getElementById('txtResult1').innerHTML = "Số Chẵn: " + countChan + "<br>" + "<br>" + "Số lẻ: " + countLe;

}
