//var-> scope nivel función
//let-> scope nivel bloque
//const-> constante

//Esqueleto defensivo

const forms = document.querySelector("form");

if(!forms) {  /* ReqJ1 */
    console.log("Sin formularios")
    exit(-1)
}

function updatePreview() {  /* ReqJ2 */
    const nombre = document.querySelector('#nombre').value; 
    const correo = document.querySelector('#correo').value;
    const contrasenia = document.querySelector('#contrasenia').value;
    const telefono = document.querySelector('#telefono').value;
    const ocupacion = document.querySelector('#ocupacion').value;
    const mensaje = document.querySelector('#mensaje').value;
    const preview = document.querySelector('#prev');
    preview.innerHTML = `
        <h3>Vista previa de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo electrónico:</strong> ${correo}</p>
        <p><strong>Contraseña:</strong> ${contrasenia}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Ocupación:</strong> ${ocupacion}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
    `
}

function checkValidityState(field){ /* ReqJ3 */
    field.classList.remove('valid', 'invalid');
    if (field.checkValidity()) {
        field.classList.add('valid');
    } else {
        field.classList.add('invalid');
    }
}

function validateForm() {/* ReqJ4 */
    const errorBox = document.getElementById('errorBox');
    errorBox.textContent = ''; 
    errorBox.classList.remove('visible');

    const customError = checkCustomRules(); 
    if (customError) {
        errorBox.textContent = customError;
        errorBox.classList.add('visible');
        return false;
    }
    if (!forms.reportValidity()) {
        return false; 
    }

    return true;
}

function checkCustomRules() { /* ReqJ5 */
    let message = document.querySelector('#mensaje');
    if (message.value.match(/\d/)) { 
        message.focus(); /* ReqJ6 */
        return "Hay un número en el mensaje";
    }
    return null;
}

function handlePhoneInput(event) { /* ReqJ7 */ //Se puede hacer no dejando escribir que es mejor
    if(event.target.value.length>9)
        console.log("Más de 9 dígitos, recortando");
        event.target.value = event.target.value.slice(0, 9);
}

function notifyCustomer() { /* ReqJ8 */
    document.body.style.backgroundColor = '#fae75cff';
    setTimeout(() => {
        document.body.style.backgroundColor = '#f7df1e';
    }, 500);
}