$(function(){
    $('#test-get').click(function(e){
        $.post('getIp.php', function(data){
            data = $.parseJSON(data);
            $('#get .ip').html(data['ip']);
            $('#get .spoof').html(data['spoof']);
        });
    });
    
    $('#test-post').click(function(e){
        $.get('getIp.php', function(data){
            data = $.parseJSON(data);
            $('#post .ip').html(data['ip']);
            $('#post .spoof').html(data['spoof']);
        });
    });
    
});