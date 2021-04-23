// jQuery ready function
$(() => {

    var user = {
        id: 0, username: "xx", password: "xx",
        firstname: "xx", lastname: "xx",
        phone: "911", email: "911@help.com",
        isReview: true, isAdmin: true
    };

    $.ajax({
        method: "POST",
        url: "http://localhost:61383/api/users",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done(res => {
            console.log(res);
            getAll();
        })
        .fail(err => {
            console.error(err);
        });

    const getAll = () => {
        $.getJSON("http://localhost:61383/api/users")
            .done(users => {
                console.log(users);
            });
    }

    console.log("After the getJSON call");

})