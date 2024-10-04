const swiper = new Swiper('.swiper', {
    effect: 'creative',
    autoheight: true,
    creativeEffect: {
        prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -1000],
        },
        next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
        },
    },
    speed: 500,
    autoplay: {
        delay: 2000,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Contador
function startCountdown(targetDate) {
    // Actualizar el contador cada segundo
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en los elementos correspondientes
        document.getElementById("dias").textContent = days.toString().padStart(2, '0');
        document.getElementById("horas").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutos").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("segundos").textContent = seconds.toString().padStart(2, '0');

        // Si la cuenta atrás ha terminado, detener el intervalo
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("dias").textContent = "00";
            document.getElementById("horas").textContent = "00";
            document.getElementById("minutos").textContent = "00";
            document.getElementById("segundos").textContent = "00";
            alert("¡La cuenta regresiva ha terminado!");
        }
    }, 1000);
}

// Establecer la fecha objetivo (formato: Año, Mes (0-11), Día, Hora, Minuto, Segundo)
const countdownDate = new Date("2025-03-01T16:00:00").getTime();

// Iniciar la cuenta atrás
startCountdown(countdownDate);


//animaciones

 // Crear una instancia del Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Deja de observar el elemento después de que se ha animado
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Ajusta el umbral según sea necesario
});

// Selecciona todos los elementos h2 y los observa
document.querySelectorAll('h2').forEach(h2 => {
    observer.observe(h2);
});
observer.observe(document.querySelector('#texto_principal'));