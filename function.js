let judador_1 = {
    celdas: []
}; 

let judador_2 = {
    celdas: []
}; 

const condiciones = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
]; 

let turno = false; 

let clicks = 0; 


function marcar(value) {
    let celda = document.getElementById('cell_' + value);
    celda.onclick = null; //Desabilitamos el evento click de la celda

    //Asignamos la celda al jugador correspondiente
    if(!turno) {
        tache(celda);
        judador_1.celdas.push(value);
        turno = true;
    } else {
        bolita(celda);
        judador_2.celdas.push(value);
        turno = false;
    }

    clicks++;

    if(clicks >= 5) {
        if(turno) {
            if(validar(judador_1)) {
                Swal.fire({
                    title: 'Gana Jugador 1!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            }
        } else {

            if(validar(judador_2)) {
                Swal.fire({
                    title: 'Gana Jugador 2!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            }
        }
    }
}

function validar(jugador) {
    let celdas_escogidas = jugador.celdas; 
    

    for(let i = 0; i < condiciones.length; i++) {
        let chances = 0; 
        celdas_escogidas: 
        for(let j = 0; j < celdas_escogidas.length; j++) {
            if(condiciones[i].includes(celdas_escogidas[j])) {
                chances++; 
                if(chances==3) {
                    return true;
                }
                continue celdas_escogidas;
            } 
        }
    }

    return false;
}


function tache(celda) {
    const miImagen = document.createElement('img');
    miImagen.src = 'https://cdn-icons-png.flaticon.com/512/747/747953.png';
    celda.appendChild(miImagen);
}

function bolita(celda) {
    const miImagen = document.createElement('img');
    miImagen.src = 'https://cdn-icons-png.flaticon.com/512/3964/3964477.png';
    celda.appendChild(miImagen);
}

function reiniciar() {
    window.location.reload();
}