$.ajax({
    //local
    url: "http://localhost/FinalProject/backend_Yii/web/index.php?r=api/get-all-users",

    dataType: 'json',
    type: "GET",
    success: function (data) {

        var x = [];
        var count = data.total;
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj.column1 = data.data[i].firstname + data.data[i].lastname;
            obj.column2 = data.data[i].contact;
            obj.column3 = data.data[i].email;
            obj.column4 = data.data[i].deviceStat;
                x.push(obj);
        }

        $("#patientDetails").find('tbody').empty(); // Added to remove "No data available in table" message in first row after loading data
        $.each(x, function(idx, obj) {

            var body = "<tr>";
            body    += "<td>" + obj.column1 + "</td>";
            body    += "<td>" + obj.column2 + "</td>";
            body    += "<td>" + obj.column3 + "</td>";
            body    += "<td>" + obj.column4 + "</td>";
            body    += "<td> <a onclick='view(" + obj.column1 + ")' style='cursor: pointer; margin-right: 20px;'><i class='material-icons'>remove_red_eye</i></a>" +
                "<a onclick='editUsers(" + obj.column1 + ")' style='cursor: pointer; margin-right: 20px;'><i class='material-icons'>edit</i></a> " +
                "<a onclick='deleteDoc(" + obj.column1 + ")' style='cursor: pointer;'><i class='material-icons'>delete</i></a>  </td>";
            body    += "</tr>";
            $( "#patientDetails tbody" ).append(body);
        });

        $('#patientDetails').DataTable();

    }

});

function linkFormShow()
{
   $('#linkDeviceUserForm').show('slow');
   $('#addBtn').hide();
}

function linkFormHide()
{
    $('#addBtn').show();
    $('#linkDeviceUserForm').hide('slow');
}