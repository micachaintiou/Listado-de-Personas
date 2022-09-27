const personas = [
    new Persona('Micaela', 'Chaintiou'),
    new Persona('Carla', 'Lara'),
]; //Definimos el arreglo de tipo persona de manera inicial

function mostrarPersonas(){ //Itera todos los arreglos y luego los muestra
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona); //Recorre y se muestra los objetos de tipo persona
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`; //Esto va a hacer que se cree una cadena del tipo persona
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion que agregar');
    }
}

