import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    personas: '2',
    fecha: '',
    hora: '21:00',
    pizzaFav: 'Muzzarella',
    sinTacc: false,
    notas: ''
  });

  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservaConfirmada(formData);
  };

  return (
    <div className="contenedor">
      <h1>🍕 Pizzería Don Julio</h1>
      <h2>Reserva de Mesa</h2>

      {!reservaConfirmada ? (
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nombre y Apellido:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Uriel Bejarano"
              required
            />
          </div>

          <div className="campo">
            <label>Teléfono / WhatsApp:</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. 11 1234-5678"
              required
            />
          </div>

          <div className="filadoble">
            <div className="campo">
              <label>Personas:</label>
              <select name="personas" value={formData.personas} onChange={handleChange}>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="4">4 personas</option>
                <option value="6">6 personas</option>
                <option value="8">8+ personas</option>
              </select>
            </div>

            <div className="campo">
              <label>Horario:</label>
              <select name="hora" value={formData.hora} onChange={handleChange}>
                <option value="20:00">20:00 hs</option>
                <option value="21:00">21:00 hs</option>
                <option value="22:00">22:00 hs</option>
                <option value="23:00">23:00 hs</option>
              </select>
            </div>
          </div>

          <div className="campo">
            <label>Fecha de reserva:</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Pizza preferida:</label>
            <select name="pizzaFav" value={formData.pizzaFav} onChange={handleChange}>
              <option value="Muzzarella">Muzzarella Clásica</option>
              <option value="Napolitana">Napolitana con Ajo</option>
              <option value="Fugazzeta">Fugazzeta Rellena</option>
              <option value="Calabresa">Calabresa</option>
              <option value="Especial Don Julio">Especial Don Julio</option>
            </select>
          </div>

          <div className="campo campo-checkbox">
            <label>
              <input
                type="checkbox"
                name="sinTacc"
                checked={formData.sinTacc}
                onChange={handleChange}
              />
              Opción Sin TACC / Sin Gluten
            </label>
          </div>

          <div className="campo">
            <label>Notas especiales:</label>
            <textarea
              name="notas"
              rows="2"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Aclaraciones sobre la reserva..."
            />
          </div>

          <button type="submit">Confirmar Reserva 🍕</button>
        </form>
      ) : (
        <div className="tarjeta-confirmacion">
          <h3>🎉 ¡Reserva Confirmada!</h3>
          <p><strong>Cliente:</strong> {reservaConfirmada.nombre}</p>
          <p><strong>Teléfono:</strong> {reservaConfirmada.telefono}</p>
          <p><strong>Fecha y Hora:</strong> {reservaConfirmada.fecha} a las {reservaConfirmada.hora} hs</p>
          <p><strong>Mesa para:</strong> {reservaConfirmada.personas} personas</p>
          <p><strong>Pizza elegida:</strong> {reservaConfirmada.pizzaFav}</p>
          {reservaConfirmada.sinTacc && <p>🌾 <strong>Menú Sin TACC solicitado</strong></p>}
          {reservaConfirmada.notas && <p><strong>Notas:</strong> {reservaConfirmada.notas}</p>}

          <button onClick={() => setReservaConfirmada(null)} className="btn-volver">
            Hacer otra reserva
          </button>
        </div>
      )}
    </div>
  );
}

export default App;