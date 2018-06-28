$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyDk85K5Vio2tYvsY_hsZVF5O93mEAT_0bY",
        authDomain: "racing7-d98a2.firebaseapp.com",
        databaseURL: "https://racing7-d98a2.firebaseio.com",
        projectId: "racing7-d98a2",
        storageBucket: "racing7-d98a2.appspot.com",
        messagingSenderId: "299717077866"
    };
    firebase.initializeApp(config);
    var dbref = firebase.database().ref().child('connection');

    $('#botton').click(function(){
        console.log($('#email').val());
        console.log($('#text').val());
        dbref.push({
            email:$('#email').val(),
            content:$('#text').val()
        });
        $('#text').val('');
    })

    dbref.limitToLast(1).on('child_added', function(snapshot){
        var data = snapshot.val();
        var useremail = data.email;
        var content = data.content;
        $('<h2/>').text('email：' + useremail).appendTo($('.massage'));
        $('<p/>').text('內容：' + content).appendTo($('.massage'));
    })
})