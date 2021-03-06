renderInfo = data => {
  const container = document.getElementById("cardAsociado");

    let result = "";
    for (const prop in data) {
      let message = `${data[prop].text}`;
      const re = /.{3}-.{7}-.{7}/g;
      const searchT = message.match(re);
      //console.log(searchT);
      // console.log(message);
      const getDate = `${data[prop].createdAt}`;
      const date = getDate.slice(0, 10);
      const hour = getDate.slice(11, 16);
      console.log('date ', date)
      if (searchT != null) {
        result += `
        <ul class="collection">
    <li class="collection-item avatar">
      <img src="${
        data[prop].user.originalProfileImageURL
      }" alt="" class="circle">
      <span class="title">@${data[prop].user.screenName}</span>
      <p>  ${data[prop].text} <br>
         ${hour}  ${date}
      </p></b></br>
      <input type="text" id="" value= '@${data[prop].user.screenName} ' placeholder="Escribe tu respuesta" class="inp"><a class='btn-send' data-message="${data[prop].user.screenName}"><i class="fab fa-telegram-plane"></i></a>
</ul>`;
      };
      container.innerHTML = result;

      if (container != '') {
        let elementsTweets = document.getElementsByClassName("btn-send");

        for (let i = 0; i < elementsTweets.length; i++) {
          let message = document.getElementsByClassName("inp")[0].value;
          //console.log(elementsDelete[i]);
          elementsTweets[i].addEventListener("click", e => {
            let key = e.target;
            let keyData = key.getAttribute("data-message");
            console.log(keyData,data[prop].user.screenName, )
            tweetResponse(keyData,message);
          });
        }
      }
    }
};

tweetResponse = (keyData, message) => {
  console.log("funcion tweetResponse")
  console.log(keyData)

  var url = 'https://wmt-laboratoria.herokuapp.com/tweets';
  var data = `${message} Tu pedido está siendo atendido`;


  fetch(url, {
          method: 'POST',
          body: data, // data can be `string` or {object}!
          headers: {
              'Content-Type': 'text/plain'
          }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
};

renderInfo()


/*
document.getElementsByClass('btn-delete').addEventListener('click', (event) => {


    //container.innerHTML = '';
    console.log("prueba");

})*/

/*
`<div class="col s12 m6">
                             <div class="card blue-grey darken-1">
                             <p>Id: ${data[prop].id}</p>
                                <img src="${data[prop].user.biggerProfileImageURL}" alt="Smiley face" height="42" width="42">
                                <p>Name: ${data[prop].user.name}</p>
                                <p>Twitte: ${data[prop].text}</p>
                                <p>Fecha: ${data[prop].createdAd}</p>
                                <input type="text" id="myTextResponse" value="Some text...">
                                <a class='btn-delete' data-message="${data[prop].id}">Try it</a>
                             </div>
                         </div>`
*/


/*
renderInfo = data => {
  const container = document.getElementById("cardAsociado");
  document.getElementById("btnTwitter").addEventListener("click", event => {
    let result = "";
    for (const prop in data) {
      let message = `${data[prop].text}`;
      const re = /.{3}-.{7}-.{7}/g;
      const searchT = message.match(re);
      //console.log(searchT);
      // console.log(message);
      const getDate = `${data[prop].createdAt}`;
      const date = getDate.slice(0, 10);
      const hour = getDate.slice(11, 16);
      console.log('date ', date)

      if (searchT != null) {
        result += `<div class="col s12">
                             <div class="col s12">
                             <div class="card horizontal">
                               <div class="card-image">
                                 <img src="${
                                   data[prop].user.biggerProfileImageURL
                                 }">
                               </div>
                               <div class="card-stacked">
                                 <div class="card-content">
                                   <h5>${data[prop].user.name}</h5>
                                   <p>${date} ${hour}</p>
                                   <p>${data[prop].text}</p>
                                   <input type="text" id="myTextResponse" value="" placeholder="Responde">
                                    <a class='btn-delete' data-message="${data[prop].id}">Try it</a>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>`;
      }
      container.innerHTML = result;
      if (container != "") {
        let elementsDelete = document.getElementsByClassName("btn-delete");
        for (let i = 0; i < elementsDelete.length; i++) {
          //console.log(elementsDelete[i]);
          elementsDelete[i].addEventListener("click", e => {
            let key = e.target;
            let keyDataDelete = key.getAttribute("data-message");
            console.log(keyDataDelete);
          });
        }
      }
    }
  });
};

tweetResponse = () => {
  console.log("funcion tweetResponse");
};


*/
