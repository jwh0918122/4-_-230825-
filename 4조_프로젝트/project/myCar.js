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

// let tmp = 0;
// document.getElementById('carBtn').addEventListener('click', () => {
//      if (tmp == 0) {
//           document.getElementById('carBtn').innerText = 'V';
//           document.getElementById('carBtn').style.color = 'white';
//           document.getElementById('carBtn').style.backgroundColor = 'rgb(0,127,168)';
//           document.getElementById('carBtn').style.border = 'none';
//           tmp = -1;
//      } else {
//           document.getElementById('carBtn').innerText = '';
//           document.getElementById('carBtn').style.color = '';
//           document.getElementById('carBtn').style.backgroundColor = '';
//           document.getElementById('carBtn').style.border = '';
//           tmp = 0;
//      }

// })


//데이터 보내기
const data = 'data';
const aTag = document.querySelector('a');
aTag.addEventListener('click', () => {
     location.href = `createCar.html?${data}`;
});