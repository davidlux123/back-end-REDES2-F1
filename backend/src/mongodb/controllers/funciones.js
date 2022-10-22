import mongoose from "mongoose";

const funcionSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    enlace: { type: String, required: true }
});

const funciones = mongoose.model("funcionpublica", funcionSchema);

const getAll = (req, res) => {
    funciones.find()
                .then((data) => res.status(200).json(data))
                .catch((error) => res.status(500).json({ message: error }));
}

export default getAll;