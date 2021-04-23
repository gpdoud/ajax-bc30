const baseurl = "http://localhost:61383/api";

$(() => {
    $("#pkbutton").on("click", () => {
        getPk();
    });
})

const getAll = () => {
    $.getJSON(`${baseurl}/users`)
        .done(res => {
            console.log(res);
            displayAll(res);
        });
}
const getPk = () => {
    let id = $("#ppk").val();
    $.getJSON(`${baseurl}/users/${id}`)
        .done(res => {
            console.log(res);
            displaySingle(res);
        });
}

const displaySingle = (user) => {
    $("#pid").val(user.id);
    $("#pusername").val(user.username);
    $("#pfirstname").val(user.firstname);
    $("#plastname").val(user.lastname);
    $("#pphone").val(user.phone);
    $("#pemail").val(user.email);
    $("#previewer").val(user.isReviewer);
    $("#padmin").val(user.isAdmin);
}

const displayAll = (users) => {
    let tbody = $("#tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        let tdusername = $(`<td>${user.username}</td>`);
        let tdname = $(`<td>${user.firstname} ${user.lastname}</td>`);
        let tdphone = $(`<td>${user.phone}</td>`);
        let tdemail = $(`<td>${user.email}</td>`);
        let tdreviewer = $(`<td>${user.isReviewer}</td>`);
        let tdadmin = $(`<td>${user.isAdmin}</td>`);
        tr.append(tdId)
        .append(tdusername).append(tdname)
        .append(tdphone).append(tdemail)
        .append(tdreviewer).append(tdadmin);
        tbody.append(tr);
    }
}


{
    
    const getByPk = (id) => {
        $.getJSON("http://localhost:61383/api/users")
        .done(user => {
            return user;
        });
    }
    
    const insert = () => {
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
    }
}