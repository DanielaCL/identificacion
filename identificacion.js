function identificacion (user, password){
switch (true){
    case user=='admin' && password==1234:
        console.log ('bienvenido a nuestro sitio!');
        break;
    case user == 'admin'&& password!==1234:
        console.log ('contraseña incorrecta');
        break;
    case user !== 'admin'  && password ==1234: 
        console.log('usuario incorrecto') ;
        break;
    case user !== 'admin' && password !== 1234:
        console.log('usurio y contraseña incorrectos');
        break
    default :;
        console.log ('debe ingresar datos reuqeridos');
        break;
}
}
