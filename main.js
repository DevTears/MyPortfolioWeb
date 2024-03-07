window.onload = function() {
  var myModal = new bootstrap.Modal(document.getElementById('selectLanguageModal'));
  myModal.show();
}

// function cambiarIdioma(idioma) {
  // Aquí deberías tener lógica para cambiar el contenido de la página al idioma seleccionado
  // Puedes cambiar textos, imágenes, enlaces, etc., según el idioma seleccionado
  
  // Ejemplo: cambiar el texto de un elemento con id "titulo"
  //if (idioma === 'es') {
    //document.getElementById('titulo').innerText = '¡Hola Mundo!';
  //} else if (idioma === 'en') {
    //document.getElementById('titulo').innerText = 'Hello World!';
  //}
//}

let mouseX = 0;
let mouseY = 0;

// Actualiza la posición del mouse
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
});

// Actualiza la rotación del cubo en función de la posición del mouse
function updateCubeRotation() {
  const cube = document.getElementById('cube');
  const rotationX = mouseY * 90;
  const rotationY = mouseX * 90;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// Renderiza el cubo continuamente
function animate() {
  updateCubeRotation();
  requestAnimationFrame(animate);
}

// Inicia la animación al cargar la página
animate();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // ajusta la cantidad de partículas
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // ajusta el color de las partículas
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }
});
AOS.init({
  duration: 800,  // Duración de la animación en milisegundos
  offset: 100,    // Desplazamiento antes de que comience la animación
  easing: 'ease-in-out',  // Tipo de función de interpolación
  once: true 
});

document.getElementById('miFormulario').addEventListener('submit', function(e) {
  e.preventDefault();

  // Verifica la longitud del mensaje
  var mensaje = document.getElementById('mensaje').value;
  if (mensaje.length < 20) {
    alert('El mensaje debe tener al menos 20 caracteres.');
    return;
  }

  // Envía el formulario a Formspree
  enviarFormulario();
});

function enviarFormulario() {
  // Obtén los datos del formulario
  var formulario = document.getElementById('miFormulario');
  var datos = new FormData(formulario);

  // Usa Fetch API para enviar el formulario a Formspree
  fetch('https://formspree.io/f/xnqkkbov', {
    method: 'POST',
    body: datos,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    // Muestra un mensaje de éxito al usuario
    alert('Correo enviado con éxito. En los próximos días se le responderá por el correo adjunto.');

    // Recarga la página
    setTimeout(function() {
      location.reload();
    }, 0);
  }).catch(error => {
    console.error('Error al enviar el formulario', error);
  });
}