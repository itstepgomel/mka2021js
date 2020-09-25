// https://docs.google.com/spreadsheets/d/1SSrh-XwjZDJ0I1LJhXmwSR5jXvoyQWqDCmuXdfbJnFg/edit?usp=sharing

// https://docs.google.com/spreadsheets/d/e/2PACX-1vSDcd_tMZK-f3A27ZFODAGxsVu7MTUNj1tm64utoci58_q4TbW3hslDy8XeBAFpfcxUdXFykYrtlxIC/pubhtml

window.onload = function () {
  //послать запрос
  let getJSON = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      let status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      }
      else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  }

  getJSON('https://spreadsheets.google.com/feeds/list/1SSrh-XwjZDJ0I1LJhXmwSR5jXvoyQWqDCmuXdfbJnFg/od6/public/values?alt=json', function (err, data) {
    console.log(data);
    if (err !== null) {
      console.log('Error: ' + err);
    }
    else {
      data = data['feed']['entry'];
      console.log(data);
      document.querySelector('.shop-field').innerHTML = showGoods(data);
    }
  });

  function showGoods(data) {
    let out = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i]['gsx$show']['$t'] != 0) {
        out += `<div class="col-lg-3 col-md-3 col-sm-6 text-center">`;
        out += `<div class="goods">`;
        out += `<h3>${data[i]['gsx$name']['$t']}</h3>`;
        out += `<div class="imgFoto" style="background-image: url(${data[i]['gsx$foto']['$t']});"></div>`;
        out += `<p class="cost">Группа: ${data[i]['gsx$group']['$t']}</p>`;
        out += `<p>Фамилия: ${data[i]['gsx$surname']['$t']}</p>`;
        out += `<p><button type="button" class="btn btn-outline-success" data="${data[i]['gsx$id']['$t']}">Сайт</button></p>`;
        out += `</div>`;
        out += `</div>`;
      }
    }
    return out;
  }
}