function addHospitalFormShow()
{
    $('#addHospitalForm').show('slow');
    $('#addBtn').hide();
}

function hideDoctorDetails()
{
    $('#addHospitalForm').hide('slow');
    $('#addBtn').show();
}


$.ajax({
    //local
    url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/get-hospital-details",
    dataType: 'json',
    type: "GET",
    success: function (data) {

        for(var i = 0; i <= data.total; i++)
        {
            $('#hospital_info_cards').append('' +
                '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n' +
                '                <div class="card" style="padding: 10px;">\n' +
                '                    <div style="width: 100px; height: 100px; float: right; margin: 10px 10px 0 0;" >\n' +
                '                        <img src="'+data.data[i].logoUrl+'" style="width: 100%; height: 100%; object-fit: contain;"/>\n' +
                '                    </div>\n' +
                '\n' +
                '                    <h2>'+data.data[i].name+'</h2>\n' +
                '                    <div style="margin-top: 10px;">\n' +
                '                        <label>Address:</label><small> </small><small>'+data.data[i].address+'</small>\n' +
                '                    </div>\n' +
                '                    <div style="margin-top: 10px;">\n' +
                '                        <label>Emergency contact:</label><font>'+data.data[i].emergencyContact+'</font>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>');
        }



    }

});


function hospitalAddSaveChanges()
{
    $.ajax({
        //local
        url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=admin/add-new-hospital",
        dataType: 'json',
        type: "POST",
        data: {
            name: $('#hospitalName').val(),
            address: $('#hospitalAddress').val(),
            city: $('#hospitalCity').val(),
            emergencyContact: $('#hospitalEmerg').val(),
            hotline: $('#hospitalHotline').val(),
            latitudes: $('#hospitalLat').val(),
            longitudes: $('#hospitalLong').val()
        },
        success: function (data) {
            if(data.success === true)
            {
                console.log('added');
            }
        }

    });
}