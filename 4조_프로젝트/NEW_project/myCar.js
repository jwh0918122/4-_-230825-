




/*********************************************************/

let searchSwitch = 0;
function mainSearch() {
     if (searchSwitch == 0) {

          document.getElementById('dynamicSearch').innerHTML = `
                
                    <div class="headerContainer2">
                    <input type="text" id="inputSearch" autofocus placeholder="검색어를 입력해 주세요.">
                    <i class="bi1 bi-search"></i>
                    <i class="bi2 bi-x-circle-fill"></i>
                    </div>`;
          document.getElementById('headerContainer').style.backgroundColor = "white";
          document.getElementById('bgcOverray').style.height = "1400px";
          document.getElementById('bgcOverray').style.backgroundColor = "rgb(0, 0, 0, 0.7)";
          searchSwitch = -1;
     } else if (searchSwitch == -1) {
          document.getElementById('headerContainer').style.backgroundColor = "";
          document.getElementById('bgcOverray').style.backgroundColor = "";
          document.getElementById('bgcOverray').style.height = "0";
          document.getElementById('dynamicSearch').innerHTML = ``;
          searchSwitch = 0;
     }
}



let loginList = document.getElementById('loginPage');
loginList.addEventListener('mouseover', () => {
     document.getElementById('loginPageList').style.display = 'block'
     document.getElementById('headerContainer').style.backgroundColor = "white";
     document.getElementById('bgcOverray').style.backgroundColor = "";
     document.getElementById('bgcOverray').style.height = "0";
     document.getElementById('dynamic').innerHTML = ``;
     document.getElementById('dynamicSearch').innerHTML = ``;
     searchSwitch = 0;
})

loginList.addEventListener('mouseout', () => {
     document.getElementById('headerContainer').style.backgroundColor = "";
})


document.getElementById('loginPageList').addEventListener('mouseover', () => {
     document.getElementById('headerContainer').style.backgroundColor = "white";
     document.getElementById('dynamicSearch').innerHTML = ``;
     searchSwitch = 0;

})
document.getElementById('loginPageList').addEventListener('mouseleave', () => {
     document.getElementById('headerContainer').style.backgroundColor = "";
     document.getElementById('loginPageList').style.display = 'none'
     document.getElementById('dynamicSearch').innerHTML = ``;
     searchSwitch = 0;

})

/**********************************************************/

let carList1 = document.getElementById('carList1');
let carList2 = document.getElementById('carList2');
let carList3 = document.getElementById('carList3');

carList1.addEventListener('click', () => {
     document.getElementById('hyd').style.display = "flex";
     document.getElementById('sedan').style.display = "none";
     document.getElementById('suv').style.display = "none";
})

carList2.addEventListener('click', () => {
     document.getElementById('hyd').style.display = "none";
     document.getElementById('sedan').style.display = "flex";
     document.getElementById('suv').style.display = "none";
})

carList3.addEventListener('click', () => {
     document.getElementById('hyd').style.display = "none";
     document.getElementById('sedan').style.display = "none";
     document.getElementById('suv').style.display = "flex";

})


// 로딩창
function loadingBox() {
     document.getElementById('loadingBox1').style.display = "block";
     document.getElementById('bgcOverray').style.height = "1400px";
     document.getElementById('bgcOverray').style.backgroundColor = "rgb(0, 0, 0, 0.7)";
     setTimeout(function () {
          document.getElementById('bgcOverray').style.height = "0";
          document.getElementById('loadingBox1').style.display = "none";
          location.href = 'createCar.html';
     }, 2000);

}


document.getElementById('car3').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '아이오닉6');
})

document.getElementById('car4').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '아이오닉5');
})


document.getElementById('car9').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '아반떼');
})

document.getElementById('car11').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '소나타');
})

document.getElementById('car16').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '팰리세이드');
})

document.getElementById('car17').addEventListener('click', () => {
     loadingBox();
     localStorage.setItem('key', '싼타페');
})






