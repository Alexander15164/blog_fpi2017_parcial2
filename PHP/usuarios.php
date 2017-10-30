
<?php
$usuarios = [];
/* @var $_POST type */
if($_POST){
    if(file_exists('../JSON/Usuarios.json')){
        $todasLosUsuarios = file_get_contents('../JSON/Usuarios.json');
        $todasLosUsuariosJSON = json_decode($todasLosUsuarios, true);
        $usuarios = ['nombre' => $_POST['titulo'],
            'usuario' => $_POST['publicacion'],
            'password' => $_POST['categoria'],
            'fecha' => $_POST['autor'],
            'sexo' => $_POST['tiempo'],
            ];
        $todasLosUsuariosJSON[] = $usuarios;
        $todasLosUsuariosPHP = json_encode($todasLosUsuariosJSON);
        file_put_contents('../JSON/Usuarios.json', $todasLosUsuariosPHP);
    }
}
?>
<script>
    alert("creado con exito");
    window.location.reload();
</script>