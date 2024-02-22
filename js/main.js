// function f1 (){
//   const xhr = new XMLHttpRequest();

//   xhr.open ('GET', 'https://api.green-api.com/waInstance7103907633/getSettings/f0e0d4c740be4b63a636b767a50f7b2d409bdf53dcb0411c8b');
  

//   xhr.onload = function () {
//     console.log (xhr.status);
//     console.log (xhr.response);
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   }

//   xhr.send ();
// }

// f1();






async function getResponce(){
    let responce = await fetch ('https://api.green-api.com/waInstance7103907633/getSettings/f0e0d4c740be4b63a636b767a50f7b2d409bdf53dcb0411c8b');
    let content = await responce.json();
    console.log (content);
}
getResponce ();



  // let key;

  // for (key in content) {
  //   document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  //     /</g,
  //     "&lt;",
  //   )}</pre>`;

//     `<li class="style">
//   <p id="p"></p>
//   <button onclick = "f ()"class="services-button" data-modal-open type="button" >getSettings</button>
//     <button class="services-button" data-modal-open type="button" >getStateInstance</button>
// </li>`
    
//   //   list.innerHTML = `
//   //   <li class="style">
//   //   <h1 class="text"> Ответ:</h1>
//   //   <p> <input type= ”text” class="post_out_message" > </p>
//   // </li>`
//     content [key];

// }
// function f(){
//   let a=document.getElementById("p").value= content;
//   document.getElementById("p").innerHTML=a;
//   `<li class="style">
//   <p id="p"></p>
//   <button onclick = "f ()"class="services-button" data-modal-open type="button" >getSettings</button>
//     <button class="services-button" data-modal-open type="button" >getStateInstance</button>
// </li>
//   `
// }

function f2 (){
    const auto = new XMLHttpRequest();
  
    
    auto.open ('GET','https://api.green-api.com/waInstance7103907633/getStateInstance/f0e0d4c740be4b63a636b767a50f7b2d409bdf53dcb0411c8b');
  
    auto.onload = function () {
      console.log (auto.status);
      console.log (auto.response);
      const data = JSON.parse(auto.response);
      console.log(data);
    }
  
    auto.send ();
  }
  
  f2();



// function f3 (){
//   const auto = new XMLHttpRequest();

  
//   auto.open ('GET','https://api.green-api.com/waInstance7103907633/getStateInstance/f0e0d4c740be4b63a636b767a50f7b2d409bdf53dcb0411c8b');

//   auto.onload = function () {
//     console.log (auto.status);
//     console.log (auto.response);
//     const data = JSON.parse(auto.response);
//     console.log(data); 
//   }

//   auto.send ();
// }

// f3();





// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();


// var restTemplate = new RestTemplate();
// var requestUrl = new StringBuilder();
// requestUrl
//     .append("https://api.greenapi.com")
//     .append("/waInstance").append(7103907633)
//     .append("/getSettings/")
//     .append(f0e0d4c740be4b63a636b767a50f7b2d409bdf53dcb0411c8b);

// var response = restTemplate.exchange(requestUrl.toString(), HttpMethod.GET, null, String.class);
// System.out.println(response);

// function Element (){
//   var elements = document.querySelector('.container')
//   var content = elements.innerHTML.trim()
//   console.log (content) 

// }