var urlPath = "http://localhost/FinalProject/backend_Yii/web/index.php?r=api";

function login() {

    $.ajax({
        type: 'POST',
        url: urlPath+"/adminAuthnz",
        data: {
            username: $("#username").val(),
            password: $("#password").val()
        },
        success: function (data) {
            console.log(data);

            if (data.success === true) {
                location.href = '../protected';
                sessionStorage.setItem("username", $("#username").val());
            } else {
                $('#errorDiv').fadeIn();
            }

        }
    });

}