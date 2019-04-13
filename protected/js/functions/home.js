
function menuHome()
{
    document.getElementById("iframe").src = "pages/home.html";
    $('#menu_home').addClass("active");
    $('#menu_doctor').removeClass("active");
    $('#menu_patient').removeClass("active");
    $('#menu_hospital').removeClass("active");
}

function menuDoctor()
{
    document.getElementById("iframe").src = "pages/doctorDetails.html";
    $('#menu_doctor').addClass("active");
    $('#menu_home').removeClass("active");
    $('#menu_patient').removeClass("active");
    $('#menu_hospital').removeClass("active");
}

function menuPatient()
{
    document.getElementById("iframe").src = "pages/patientDetails.html";
    $('#menu_patient').addClass("active");
    $('#menu_home').removeClass("active");
    $('#menu_doctor').removeClass("active");
    $('#menu_hospital').removeClass("active");
}

function menuHospital()
{
    document.getElementById("iframe").src = "pages/hospitalDetails.html";
    $('#menu_hospital').addClass("active");
    $('#menu_home').removeClass("active");
    $('#menu_doctor').removeClass("active");
    $('#menu_patient').removeClass("active");
}



function showPatients()
{
    menuPatient();
}

function showDoctors()
{
    menuDoctor();
}

function showHospitals()
{
    menuHospital();
}


