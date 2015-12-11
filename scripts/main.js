function initializeWidget(widget) {
    var list = widget.body.querySelector('.items-list');
    var listContent = '';


    var template = '';
    template += '<li class="list-group-item transaction-category-border {{color}}">';
    template += '   <div class="date">';
    template += '       <div class="month">{{month}}</div>';
    template += '       <div class="day">{{day}}</div>';
    template += '   </div>';
    template += '   <div class="icon">';
    template += '       <img src="' +  widget.getOriginURI().replace('index.html', '') + '{{icon}}" width="40" height="40"/>';
    template += '   </div>';
    template += '   <div class="description">';
    template += '       <div class="beneficiary">{{beneficiary}}</div>';
    template += '       <small class="category">{{category}}</small>';
    template += '   </div>';
    template += '   <div class="amount">{{amount}}</div>';
    template += '   <div class="caret"></div>';
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
}
