var scripts = document.querySelectorAll('script');
var me = scripts[scripts.length -1];
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

var fakeData = [
    {
        "month": "Dec",
        "day": "07",
        "description": "The Tea Lounge",
        "amount": "-$40.24"
    },
    {
        "month": "Dec",
        "day": "06",
        "description": "Francine",
        "amount": "-$40.55"
    },
    {
        "month": "Dec",
        "day": "06",
        "description": "T-Mobile",
        "amount": "$15.63"
    },
    {
        "month": "Dec",
        "day": "04",
        "description": "CH Energy Group",
        "amount": "$9.23"
    },
    {
        "month": "Dec",
        "day": "04",
        "description": "CH Energy Group",
        "amount": "-$44.24"
    },
    {
        "month": "Dec",
        "day": "03",
        "description": "Emily Vreeland",
        "amount": "-$21.22"
    },
    {
        "month": "Dec",
        "day": "03",
        "description": "Atlantic City Electric",
        "amount": "-$7.94"
    },
    {
        "month": "Dec",
        "day": "03",
        "description": "Texaco",
        "amount": "-$47.74"
    },
    {
        "month": "Dec",
        "day": "02",
        "description": "Safeway Inc.",
        "amount": "-$11,22"
    },
    {
        "month": "Dec",
        "day": "02",
        "description": "Francine",
        "amount": "-$62.30"
    },
    {
        "month": "Dec",
        "day": "02",
        "description": "Atlantic City Electric",
        "amount": "-$13.78"
    },
    {
        "month": "Dec",
        "day": "01",
        "description": "Gerald Harris",
        "amount": "-$65.56"
    }
];

fakeData.forEach(function (transaction) {
    var tpl = template;
    for(var key in transaction) {
        if(transaction.hasOwnProperty(key)) {
            tpl = tpl.replace('{{' + key +  '}}', transaction[key]);
        }
    }
    listContent += tpl;
});

list.innerHTML = listContent;