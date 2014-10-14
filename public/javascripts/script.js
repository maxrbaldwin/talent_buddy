$(document).ready(function() {
    $('#view').load('templates/login.html');
    console.log('home view');
});

var login = function() {
    $('#view').load('templates/login.html');
    console.log('login view');
};
var register = function() {
    $('#view').load('templates/register.html');
    console.log('register view');
};

var routes = {
    '/': login,
    '/login': login,
    '/register': register
};

var router = Router(routes);

router.init();
