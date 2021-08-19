// Bài tập 5
/**
 * Khối 1: Input 
 * N
 * Khối 2: Các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: Khởi tạo vòng lặp và xây dựng công thức
 * Vòng lặp được khởi tạo chạy từ 1 đến n 
 * Dựa vào công thức giai thưa thì ta có giai thừa của 1 số bằng tích của số đó nhân với các số giảm dần về 1
 * giaiThuaNum *= i
 * Với trường hợp 0 ta khai báo biến giai thừa bằng 1 kết hợp  điêu kiện vòng lặp nó trả về thằng giá trị khái báo nên khi nhập 0 ta sẽ có kết quả 1
 * B3 Hiển thị UI
 * Khối 3 Out put
 * Xuất giá trị giaiThuaNum
 */


function giaiThua(){
    var n = parseInt(document.getElementById('inputNum5').value);
    var giaiThuaNum = 1;
        for (var i =1; i <= n; i++){
            giaiThuaNum *= i
        }
    document.getElementById('txtResult_Bt5').innerHTML = "Giai thừa: " + giaiThuaNum;
}