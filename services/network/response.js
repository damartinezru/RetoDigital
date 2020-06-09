class response {
    constructor(resultado, entidad, mensajes) {
        this.resultado = resultado;
        this.entidad = entidad;
        this.mensajes = mensajes;
    }

}

exports.success = (req, res, resp, status) => {
    let miRespuesta = Array.isArray(resp) ? resp : [resp];
    let resultado = new response(true,miRespuesta, []);
    res.status(status || 200).send(resultado);

}

exports.error = (req,res,mensaje,status,log) => {
    let resultado = new response(false, [], mensaje);
    console.log(log);
    res.status(status || 500).send(resultado);
}