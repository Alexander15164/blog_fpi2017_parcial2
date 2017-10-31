<?php
$entradas = [];
/* @var $_POST type */
if($_POST){
 $file = $_FILES['Imagenes'];

	$fileName = $file['name'];
	$fileTmpName = $file['tmp_name'];
	$fileSize = $file['size'];
	$fileError = $file['error'];
	$fileType = $file['type'];

	$fileExt = explode('.', $fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('jpg', 'jpeg', 'png');

	if (in_array($fileActualExt, $allowed)) {
		if ($fileError === 0) {
			if ($fileSize < 1000000) {
				$fileNameNew = uniqid('', true).".".$fileActualExt;
				$fileDestination = '../fotos/'.$fileNameNew;
                                $fileGuardado = 'fotos/'.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
			} else {
				echo "archivo demasiado grande!";
			}
		} else {
			echo "!";
		}
	} else {
		echo "No son archivos de tipo permitidos!";
	}
    if(file_exists('../JSON/publicaciones.json')){
        $todasLasEntradas = file_get_contents('../JSON/publicaciones.json');
        $TodasLasEntradasJSON = json_decode($todasLasEntradas, true);
        $entradas = ['titulo' => $_POST['titulo'],
            'publicacion' => $_POST['publicacion'],
            'categoria' => $_POST['categoria'],
            'autor' => $_POST['autor'],
            'tiempo' => $_POST['tiempo'],
            'identificador' => $_POST['identificador'],
            'imagen' => $fileGuardado,
            ];
        $TodasLasEntradasJSON[] = $entradas;
        $TodasLasEntradasPHP = json_encode($TodasLasEntradasJSON);
        file_put_contents('../JSON/publicaciones.json', $TodasLasEntradasPHP);
    }
}
?>
<script>
    window.location();
</script>
