var scripts = document.querySelectorAll('script');
var me = scripts[scripts.length - 1];
var widgetBody = me.parentNode;
var list = widgetBody.querySelector('.items-list');
var listContent = '';

var template = '';
template += '<li>';
template += '   <span class="month">{{month}}</span>';
template += '   <span class="day">{{day}}</span>';
template += '   <span class="description">{{description}}</span>';
template += '   <span class="amount">{{amount}}</span>';
template += '</li>';

var request = function (url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        // all is well
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
};

request('http://localhost:7777/portalserver/static/widgets/[BBHOST]/widget-agnostic-transactions-list/data/transactions.json', function (response) {
    var fakeData = JSON.parse(response.response);

    fakeData.forEach(function (transaction) {
        var tpl = template;
        for (var key in transaction) {
            if (transaction.hasOwnProperty(key)) {
                tpl = tpl.replace('{{' + key + '}}', transaction[key]);
            }
        }
        listContent += tpl;
    });

    list.innerHTML = listContent;
});