<?php

if(isset($_FILES['image'])){

    $img_name = addslashes(file_get_contents($_FILES['image']['name']));
    $img_tmp_name = addslashes(file_get_contents($_FILES['image']['tmp_name']));

    $path = 'http://www.quickpick-lk.com/resources/AppImages/HospitalIcons';

    move_uploaded_file($img_tmp_name, $path."/".$img_name);
    echo "sent";

}else{
    echo "error";
}