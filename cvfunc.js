// Cargar html2canvas y jsPDF desde un CDN
const script1 = document.createElement("script");
script1.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(script2);

// Esperar a que se carguen las librerías
script1.onload = script2.onload = function () {
    document.getElementById("download-pdf").addEventListener("click", function () {
        const element = document.getElementById("cv-content");

        // Capturar el contenido del CV como imagen
        html2canvas(element, {
            scale: 2, // Aumentar la escala para mejor calidad
            logging: true,
            useCORS: true,
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");

            // Crear un PDF con jsPDF
            const pdf = new jspdf.jsPDF("p", "mm", "a4");
            const imgWidth = 210; // Ancho de A4 en mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("CV_John_Doe.pdf"); // Descargar el PDF
        });
    });
};