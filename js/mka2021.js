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
		//  console.log(data);
		if (err !== null) {
			console.log('Error: ' + err);
		}
		else {
			data = data['feed']['entry'];
			// console.log(data);
			let selGr = document.querySelector('.selectGroup').value;
			document.querySelector('.shop-field').innerHTML = showGoods(data,selGr);
			document.querySelector('.goSelectGroup').onclick = function(e){
				document.querySelector('.shop-field').innerHTML = '';
				// console.log('Yes');
				document.querySelector('.shop-field').innerHTML = showGoods(data,document.querySelector('.selectGroup').value);
			}
		}
  });

  function showGoods(data, outSel) {
    let out = '';
    for (var i = 0; i < data.length; i++) {
      if ((data[i]['gsx$show']['$t'] != 0) && (outSel == 'all')) {
        out += `<div class="col-lg-2 col-md-3 col-sm-4 text-center card m-2 pb-3 shadow">`;
        out += `<div class="goods">`;
        out += `<h5 class="mt-3">${data[i]['gsx$name']['$t']}</h5>`;
				out += `<p>${data[i]['gsx$surname']['$t']}</p>`;
        out += `<div class="imgFoto img-thumbnail img-fluid" style="background-image: url(${data[i]['gsx$foto']['$t']});"></div>`;
        out += `<p class="cost">Группа: ${data[i]['gsx$group']['$t']}</p>`;
        out += `<h6 class="text-danger" data="${data[i]['gsx$id']['$t']}">Работы ученика</h6>`;
		  if (data[i]['gsx$dz1']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz1']['$t']}" target="_blank">🌠</a>`;
		  }
		  else {
			out += `<p class="lol">🙈🙉🙊</p>`;
		  }
		  if (data[i]['gsx$dz2']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz2']['$t']}" target="_blank">🌠</a>`;
		  }
		  if (data[i]['gsx$dz3']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz3']['$t']}" target="_blank">🌠</a>`;
		  }
		  if (data[i]['gsx$dz4']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz4']['$t']}" target="_blank">🌠</a>`;
		  }
		  if (data[i]['gsx$dz5']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz5']['$t']}" target="_blank">🌠</a>`;
		  }
		  if (data[i]['gsx$dz6']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz6']['$t']}" target="_blank">🌠</a>`;
		  }
		  if (data[i]['gsx$dz7']['$t'] != 0){
			out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz7']['$t']}" target="_blank">🌠</a>`;
		  }
        out += `</div>`;
        out += `</div>`;
      }
			else if ((outSel == data[i]['gsx$group']['$t']) && (data[i]['gsx$show']['$t'] != 0)) {
				out += `<div class="col-lg-2 col-md-3 col-sm-4 text-center card m-2 pb-3 shadow">`;
				out += `<div class="goods">`;
				out += `<h5 class="mt-3">${data[i]['gsx$name']['$t']}</h5>`;
					 out += `<p>${data[i]['gsx$surname']['$t']}</p>`;
				out += `<div class="imgFoto img-thumbnail img-fluid" style="background-image: url(${data[i]['gsx$foto']['$t']});"></div>`;
				out += `<p class="cost">Группа: ${data[i]['gsx$group']['$t']}</p>`;
				out += `<h6 class="text-danger" data="${data[i]['gsx$id']['$t']}">Работы ученика</h6>`;
				if (data[i]['gsx$dz1']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz1']['$t']}" target="_blank">🌠</a>`;
				}
				else {
				 out += `<p class="lol">🙈🙉🙊</p>`;
				}
				if (data[i]['gsx$dz2']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz2']['$t']}" target="_blank">🌠</a>`;
				}
				if (data[i]['gsx$dz3']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz3']['$t']}" target="_blank">🌠</a>`;
				}
				if (data[i]['gsx$dz4']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz4']['$t']}" target="_blank">🌠</a>`;
				}
				if (data[i]['gsx$dz5']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz5']['$t']}" target="_blank">🌠</a>`;
				}
				if (data[i]['gsx$dz6']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz6']['$t']}" target="_blank">🌠</a>`;
				}
				if (data[i]['gsx$dz7']['$t'] != 0){
				 out += `<a class="dz btn btn-outline-success m-1" href="${data[i]['gsx$dz7']['$t']}" target="_blank">🌠</a>`;
				}
				out += `</div>`;
				out += `</div>`;
			 }
    }
    return out;
  }

}