const Empleado = require("../models/empleado.model");
const empleadoCtrl = {};

// 1. Dar de alta un empleado empleado (POST)
empleadoCtrl.createEmpleado = async (req, res) => {
  try {
    await Empleado.create(req.body);
    res.status(201).json({ status: "1", msg: "Empleado guardado con éxito." });
  } catch (error) {
    res.status(400).json({ status: "0", msg: "Error al crear empleado.", error: error.message });
  }
};

// 2. Obtener todos los Empleados (GET)
empleadoCtrl.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ status: "0", msg: "Error al obtener empleados." });
  }
};

// 3. Obtener UN Empleado (GET)
empleadoCtrl.getEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) return res.status(404).json({ status: "0", msg: "Empleado no encontrado." });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ status: "0", msg: "Error al obtener el empleado." });
  }
};

module.exports = empleadoCtrl;