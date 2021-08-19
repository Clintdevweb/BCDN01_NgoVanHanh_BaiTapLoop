// Bài tập 3

/**
 * Khởi tạo vòng lặp kết hợp điều kiện vòng lặp ở dưới. sum là tổng giá trị vòng lặp của i đến khi sum > 10000 sữ kết thức vòng lặp xuất ra giá trị i cuối  ra ta được kết quả mong muốn. Trường hợp i ở hai vòng lặp while và for có giải thích ở dưới
 */

/**
 * Vòng lặp while
 function numberMin(){
     var sum = 0;
     var i = 0;
     while (sum < 10000){
         i++
         sum += i;
     }
     document.getElementById('txtResult_Bt3').innerHTML = "Số nguyên dương nhỏ nhất: " + i
 }
 * Ở vòng lặp while vì biến i++ (i+1) được thực hiện trước lệnh sum so sánh nên ta có giá trị i chính bằng giá trị của số lớn nhất thõa mãn điều kiện của đề bài. Nếu đặt i++ ở dưới sum thì lúc xuất lệnh thì sẽ -1 (giải thích ở bên dưới)
 */

//  Vòng lặp for
function numberMin(){
    var sum = 0;
    
    for (var i = 0; sum < 10000; i++){
        sum += i;
    }
    // Ở vòng lặp for thì biến i++ được hiện sau lệnh sum. Nên giá trị sum được so sánh với điều kiện là giá tri sum của biến i cũ. Cho nên khi out vòng lặp for để xuất giá trị i thì i hiện tại là i++(mới). Chứ không phải biến i cũ của giá trị sum đem so sánh. Vậy nên khi in ra giá trị thì ta trừ đi 1 để giả về giá trị i của sum(so sánh) > 10000 có i thõa mãn điều kiện đề bài
    document.getElementById('txtResult_Bt3').innerHTML = "Số nguyên dương nhỏ nhất: " + (i - 1);
}


