// Bài 1 
function tinhluong() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var songay = document.getElementById("songay").value;

    console.log(songay);
    console.log(typeof (songay));

    var luong = Number(songay) * Number(100000);
    console.log("Lương của nhân vien", luong + "VND");
    document.getElementById("txtResult").innerHTML = luong + "VND";
}

document.getElementById("btnTinh").onclick = tinhluong;


// Bài 2
function tinhTB() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var sothuc1 = document.getElementById("sothuc1").value;
    var sothuc2 = document.getElementById("sothuc2").value;
    var sothuc3 = document.getElementById("sothuc3").value;
    var sothuc4 = document.getElementById("sothuc4").value;
    var sothuc5 = document.getElementById("sothuc5").value;
    console.log(sothuc1, sothuc2, sothuc3, sothuc4, sothuc5);


    var tb = (Number(sothuc1) + Number(sothuc2) + Number(sothuc3) + Number(sothuc4) + Number(sothuc5)) / 5;
    console.log(tb);
    document.getElementById("txtResultTB").innerHTML = tb;
}

document.getElementById("btnTinhTB").onclick = tinhTB;


// Bài 3

function doitien() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var sotien = document.getElementById("sotien").value;

    console.log(sotien);
    console.log(typeof (sotien));

    var tien = Number(sotien) * Number(23500);
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(tien));

    document.getElementById("txtResultDoitien").innerHTML = tien + "VND";
}

document.getElementById("btnDoitien").onclick = doitien;


// Bài 4
function tinhSvaP() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    console.log(chieudai, chieurong);


    var S = Number(chieudai) * Number(chieurong);
    var P = (Number(chieudai) + Number(chieurong)) * 2;
    console.log("dien tich là", S
        + "\n chu vi là" ,P);
    document.getElementById("txtResultSvaP").innerHTML =  "diện tích là " + S +"\n chu vi là "+P;
}

document.getElementById("btnSvaP").onclick = tinhSvaP;



function tinhtong() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var so2chuso = document.getElementById("so2chuso").value;

    console.log(so2chuso);
   

    

    // b2
    soHangChuc = Math.floor(so2chuso % 100/10);
    soDonVi = so2chuso % 100 % 10;
    
    kq = soHangChuc + soDonVi;
    
    // b3
    console.log("tong cua 2 ky so",kq);

    document.getElementById("txtResultso2chuso").innerHTML = "Tổng 2 ký số " + kq ;
}

document.getElementById("btnso2chuso").onclick = tinhtong;