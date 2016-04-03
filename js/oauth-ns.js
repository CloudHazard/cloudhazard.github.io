var oauthProvider = 'instagram'

OAuth.callback(function (error, success) {
    if (error) {
        oauthProvider = "the provider"
        $('#error-text').show().find('span').html(oauthProvider);
    }
    else {
        oauthProvider = success.provider
        $('#success-text').show().find('span').html(oauthProvder)
    }
    $('#result').html("success = " + )
})

OAuth.initialize('7Q4loMj-xdztbe8cVanc_uGeFvo');

$('#oauth-connect button').click(function(e) {
    e.preventDefault();

    var oauthMethod = $('#provider_action .btn-group .active').text();

    update_code(oauthMethod, oauthProvder);
})