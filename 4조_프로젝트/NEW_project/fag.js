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

/**************************************************************/


//객체 안 배열
let boardArr = [
     {
          nickname: "전혜성",
          title: "여기 오토바이도 파나요?",
          content: "아님말고",
          answer: ""
     },
     {
          nickname: "오미란",
          title: "저기~ 차좀 사고싶은데요~",
          content: "율무차요 깔깔",
          answer: ""
     },
     {
          nickname: "장우호",
          title: "사회 초년생 아반떼 좋나요?",
          content: "알려주세요.",
          answer: ""
     },
     {
          nickname: "장원희",
          title: "결제가 안돼요.",
          content: "뭐죠?",
          answer: ""
     },
     {
          nickname: "전경환",
          title: "차량 서비스 관련 질문이요.",
          content: "1234",
          answer: ""
     }
]; //게시글 배열
let person = {};
showList();
//등록 버튼
document.getElementById('addBtn').addEventListener('click', () => {
     person = {};
     let nickname = document.getElementById('nickname').value; //글쓴이
     let title = document.getElementById('title').value;    //글제목
     let content = document.getElementById('content').value;     //내용
     person.nickname = nickname;
     person.title = title;
     person.content = content;

     //info객체 안 배열에 정보 넣기
     boardArr.push(person);
     console.log(person);
     console.log(boardArr);


     //입력 박스 초기화
     document.getElementById('nickname').value = '';
     document.getElementById('title').value = '';
     document.getElementById('content').value = '';

     showList(); //리스트 출력 함수
     // console.log(boardArr[1].nickname); //이름꺼내오기



     document.getElementById('fag_Container').style.display = "none";
     document.getElementById('listContainer').style.display = "block";
     document.getElementById('boardUI').style.display = "block";

})


//리스트 출력 함수
function showList() {

     document.getElementById('boardUI').innerHTML = '';

     for (let i = 0; i < boardArr.length; i++) {
          document.getElementById('boardUI').innerHTML += `
          <div id="boardList${i}">
               <ul>
                    <li><span>${i + 1}</span></li>
                    <li><span>${boardArr[i].nickname}</span></li>
                    <li><span>${boardArr[i].title}</span ></li>
                    <button class="deleteBtn" id="closeBtn${i}" type="button" onclick="deleteBtn(${i})"><i class="bi bi-x-lg"></i></button>
                    <button class="downtoBtn" id="downtoBtn${i}" type="button" onclick="downBtn(${i})"><i class="downBtn bi-chevron-down"></i></button>
                    <button class="uptoBtn" id="uptoBtn${i}" type="button" onclick="upBtn(${i})"><i class="upBtn bi-chevron-up"></i></button>
               </ul>
               <ul class="boardTest" id="boardHide${i}">
                    <li><span>${boardArr[i].content}</span></li>
                    <li><span>관리자 : </span><div class="boardsize"><span id="cmt${i}"> </span></div></li>
                    <li class="lastAdmin">
                         <span class="apTarget">답변 입력 : </span>
                         <span>　　　　　　</span>
                         <textarea class="adminCmt" id="insertCmt${i}" rows="4"></textarea>
                         <button type="button" class="adminResult" onclick="insertComment(${i})"> 입력 </button>
                    </li>
               </ul>
          </div>
     `;
     }




}

function downBtn(i) {
     document.getElementById(`boardHide${i}`).style.display = "block";
     document.getElementById(`downtoBtn${i}`).style.display = "none";
     document.getElementById(`uptoBtn${i}`).style.display = "block";
}
function upBtn(i) {
     document.getElementById(`boardHide${i}`).style.display = "none";
     document.getElementById(`downtoBtn${i}`).style.display = "block";
     document.getElementById(`uptoBtn${i}`).style.display = "none";
}

function deleteBtn(i) {
     // let boardId = document.getElementById(`boardList${i}`);
     boardArr.splice(i, 1);
     showList();
}

function insertComment(i) {
     let str = document.getElementById(`insertCmt${i}`).value;
     boardArr[i].answer = str;
     document.getElementById(`cmt${i}`).innerText = str;
}


document.getElementById('boardCreate').addEventListener('click', () => {
     document.getElementById('listContainer').style.display = "none";
     document.getElementById('boardUI').style.display = "none";
     document.getElementById('fag_Container').style.display = "block";
})

document.getElementById('resetBtn').addEventListener('click', () => {
     document.getElementById('fag_Container').style.display = "none";
     document.getElementById('listContainer').style.display = "block";
     document.getElementById('boardUI').style.display = "block";
})