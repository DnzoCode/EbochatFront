import axios from 'axios';

// Crea una instancia de Axios con la configuración deseada
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/', // URL base para todas las solicitudes
  timeout: 10000, // Tiempo máximo de espera para una solicitud en milisegundos
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido para las solicitudes
    // 'Authorization': 'Bearer token', // Token de autorización si es necesario
  },
});

export default axiosInstance;