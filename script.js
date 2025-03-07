/*$(document).ready(function() {
    $('a.nav-link').click(function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        },1000);
    });
});*/

const audio = document.getElementById("audio");
        const video = document.getElementById("introVideo");
        const showMapBtn = document.getElementById("showMapBtn");
        const multimediaModeBtn = document.getElementById("multimediaModeBtn");

        showMapBtn.addEventListener("click", function() {
            audio.play();
        });

        multimediaModeBtn.addEventListener("click", function() {
            // Verificamos si el video o el audio están bloqueados
            if (audio.paused && video.paused) {
                const userResponse = confirm("El audio y video están bloqueados en tu navegador. ¿Quieres permitir su reproducción?");
                if (userResponse) {
                    // Si el usuario acepta, se intentará reproducir el audio y video
                    audio.play();
                    video.play();
                } else {
                    alert("Sin la reproducción de audio y video, algunas funcionalidades no estarán disponibles.");
                }
            } else {
                alert("El audio y video están habilitados.");
            }
        });
