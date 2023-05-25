<?php 
function GetItems($dir, $extension){
    $files = array();

    foreach(scandir($dir) as $file){
        if (str_ends_with($file, $extension)){
            $files[] = $file;
        }
    }

    return $files;
}
?>