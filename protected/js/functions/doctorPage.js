function hideDoctorDetails()
{
    $('#doctor_details_card').hide('slow');

    $('#docName').html('');
    $('#DocInfo').html('');
}

function addFormShow()
{
    $(window).scrollTop(0);
    $('#addNewDoctorForm').show('slow');
    $('#doctor_details_card').hide('slow');
    $('#editDoctorDetailsForm').hide('slow');
}

function addFormHide()
{
    $('#addNewDoctorForm').hide('slow');
}

function editSpecialization()
{
    $('#editSpecializationDropdown').show('medium');
    $('#specializationView').hide();
}

function editSpecializationCancel()
{
    $('#editSpecializationDropdown').hide();
    $('#specializationView').show();
}

function addMoreQualifications()
{
    $('#addQualificationField').show();
    $('#addIconQual').hide();
    $('#cancelIconQual').show();
}

function addMoreQualificationsCancel()
{
    $('#addQualificationField').hide();
    $('#addIconQual').show();
    $('#cancelIconQual').hide();
    $('#addQualBtn').hide();
}

function showQualAddBtn()
{
    $('#addQualBtn').show();
}

$.ajax({
    //local
    url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/get-all-doctor-details",

    dataType: 'json',
    type: "GET",
    success: function (data) {

        var x = [];
        var count = data.total;
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj.column1 = data.data[i].userid;
            obj.column2 = data.data[i].firstname + data.data[i].lastname;
            obj.column3 = data.data[i].email;
            obj.column4 = data.data[i].contact;
            obj.column5 = data.data[i].specialization;
            obj.column6 =
            x.push(obj);
        }

        $("#doctor_table").find('tbody').empty(); // Added to remove "No data available in table" message in first row after loading data
        $.each(x, function(idx, obj) {

            var body = "<tr>";
            body    += "<td>" + obj.column1 + "</td>";
            body    += "<td>" + obj.column2 + "</td>";
            body    += "<td>" + obj.column3 + "</td>";
            body    += "<td>" + obj.column4 + "</td>";
            body    += "<td>" + obj.column5 + "</td>";
            body    += "<td> <a onclick='view(" + obj.column1 + ")' style='cursor: pointer; margin-right: 20px;'><i class='material-icons'>remove_red_eye</i></a>" +
                       "<a onclick='editUsers(" + obj.column1 + ")' style='cursor: pointer; margin-right: 20px;'><i class='material-icons'>edit</i></a> " +
                       "<a onclick='deleteDoc(" + obj.column1 + ")' style='cursor: pointer;'><i class='material-icons'>delete</i></a>  </td>";
            body    += "</tr>";
            $( "#doctor_table tbody" ).append(body);
        });

        $('#doctor_table').DataTable();

    }

});


function editUsers(uid)
{
    $(window).scrollTop(0);
    $('#doctor_details_card').hide('slow');
    $('#addNewDoctorForm').hide('slow');

    $('#editDoctorDetailsForm').show('slow');

    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/get-doctor-details-individual",
        dataType: 'json',
        type: "POST",
        data: {
            doctorID: uid
        },
        success: function (data) {

            // $('#qualificationsView').html('');

            $('#editForm_ID').val(data.data[0].userid);
            $('#editForm_firstname').val(data.data[0].firstname);
            $('#editForm_lastname').val(data.data[0].lastname);
            $('#editForm_address').val(data.data[0].homeAddress);
            $('#editForm_contactNo').val(data.data[0].contact);
            $('#qualificationsView').html('').append('<p>'+data.data[0].qualifications+'</p>');
            $('#editForm_qualifications').val(data.data[0].qualifications);
            $('#specializationViewText').html('').append('<font>'+data.data[0].specialization+'</font>');

            console.log(data.data);

        }

    });
}

function closeDoctorEditForm()
{
    $('#editDoctorDetailsForm').hide('slow');
}


function view(uid)
{
    $(window).scrollTop(0);
    $('#editDoctorDetailsForm').hide('slow');
    $('#addNewDoctorForm').hide('slow');

    $('#doctor_details_card').show('slow');

    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/get-doctor-details-individual",
        dataType: 'json',
        type: "POST",
        data: {
            doctorID: uid
        },
        success: function (data) {


            $('#docName').html('').append("<h2> Dr. " + data.data[0].firstname + " " + data.data[0].lastname + "</h2>");

            $('#DocInfo').html('').append(
                "<div style='margin-top: 10px;'>" +
                    "<label>E-mail address:</label><small> </small><small>"+ data.data[0].email +"</small>"+
                "</div>"+
                "<div style='margin-top: 10px;'>"+
                    "<label>Contact number:</label><small> </small><small>" + data.data[0].contact + "</small>"+
                "</div>"+
                "<div style='margin-top: 10px;'>"+
                   " <label>Address:</label><small> </small><small> " + data.data[0].homeAddress + " </small>"+
                "</div> ");

            $('#viewDocDetailsQualifications').html('').append('<p>'+data.data[0].qualifications+'</p>');



        }

    });

}

function editDoctorSaveChanges()
{

    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/update-doctor-details",
        dataType: 'json',
        type: "POST",
        data: {
            doctorID: $('#editForm_ID').val(),
            firstname: $('#editForm_firstname').val(),
            lastname: $('#editForm_lastname').val(),
            address: $('#editForm_address').val(),
            contact: $('#editForm_contactNo').val(),
            specialization: $('#editForm_Specialization').val(),
            qualification: $('#editForm_qualifications').val()
        },
        success: function (data) {

            if(true == data.success)
            {
                $('#editForm_success').show();
                $('#editForm_error').hide();


                setInterval(function(){
                    $('#editForm_success').hide();
                    location.reload();
                }, 1000);

            }else{
                $('#editForm_error').show();
                $('#editForm_success').hide();

                setInterval(function(){
                    $('#editForm_error').hide();
                }, 3000);

            }

        }

    });
}


function addNewDoctorSave()
{
    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/add-new-doctor",
        dataType: 'json',
        type: "POST",
        data: {
            firstname: $('#addForm_firstname').val(),
            lastname: $('#addForm_lastname').val(),
            address: $('#addForm_address').val(),
            contact: $('#addForm_contactNo').val(),
            email: $('#addForm_email').val(),
            specialization: $('#addForm_Specialization').val(),
            qualification: $('#addForm_qualifications').val()
        },
        success: function (data) {

           console.log('added');
           location.reload();

        }

    });
}


function deleteDoc(uid)
{
    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/delete-doctor",
        dataType: 'json',
        type: "POST",
        data: {
            userid: uid
        },
        success: function (data) {

            location.reload();

        }

    });
}