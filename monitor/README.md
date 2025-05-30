# Arquitectura Cloud Escalable con Alta Disponibilidad

Este proyecto incluye dos servicios backend desplegados en Render y un frontend estático que monitoriza su estado.

## Estructura

- `backend-1/`: Primer backend con Express.
- `backend-2/`: Segundo backend con Express.
- `monitor/`: Sitio estático que consulta el estado de los dos backends.

## Despliegue

1. Subir esta carpeta a GitHub.
2. Crear dos servicios web en Render para `backend-1` y `backend-2`.
3. Crear un sitio estático en Render apuntando a la carpeta `monitor`.

Cada backend debe tener definida una variable de entorno `INSTANCE_NAME`.

## URLs usadas en el monitor:

- https://cloud-backend-1-bkny.onrender.com/api/status
- https://cloud-backend-2-i6bn.onrender.com/api/status