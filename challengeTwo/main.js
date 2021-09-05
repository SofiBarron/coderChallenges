let names = prompt ('Ingrese su nombre')
let surname = prompt ('Ingrese su apellido')

let fullName = names + surname;

if (fullName == '' || fullName === ('Nombre'+'Apellido')) {
    console.log ('Complete su nombre para continuar')
}
else {
    console.log ('¡Bienvenido de vuelta!')
}