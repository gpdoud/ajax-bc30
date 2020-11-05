// jQuery ready function
$(() => {

    $.getJSON("http://localhost:61383/api/users/1")
        .done(users => {
            console.log(users);
        });

    console.log("After the getJSON call");

})