
<?php
$usuarios = [];
/* @var $_POST type */
if($_POST){
    if(file_exists('../JSON/Usuarios.json')){
        $todasLosUsuarios = file_get_contents('../JSON/Usuarios.json');
        $todasLosUsuariosJSON = json_decode($todasLosUsuarios, true);
        $usuarios = ['nombre' => $_POST['nombre'],
            'apellido' => $_POST['apellido'],
            'usuario' => $_POST['usuario'],
            'ao' => $_POST['ao'],
            'mes' => $_POST['mes'],
            'dia' => $_POST['dia'],
            'email' => $_POST['email'],
            'password' => $_POST['pass'],
            'identificador' => $_POST['iusuario'],
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