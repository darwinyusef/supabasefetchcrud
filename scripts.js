async function obtenerTodos() {
    try {
        fetch('https://eglxewwgvluxmrkgrumu.supabase.co/rest/v1/user?select=*', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnbHhld3dndmx1eG1ya2dydW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1OTM5NDAsImV4cCI6MjAwODE2OTk0MH0.51paB1h8te9yHt5IpeKN5bpHsGjr_hD0EOo6FkhYU6A",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnbHhld3dndmx1eG1ya2dydW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1OTM5NDAsImV4cCI6MjAwODE2OTk0MH0.51paB1h8te9yHt5IpeKN5bpHsGjr_hD0EOo6FkhYU6A"
            }
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            let cuerpoTabla = document.getElementById("tblContenido");
            let salida = "";
            for(let elemento of data){
                salida += `
                    <tr title="${elemento.uuid}">
                        <td>${elemento.id}</td>
                        <td>${elemento.name}</td>
                        <td>${elemento.email}</td>
                    </tr>
                `;
            } 
            cuerpoTabla.innerHTML = salida;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}
