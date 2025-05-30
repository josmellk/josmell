
# Práctica: Arquitectura Cloud Escalable y Alta Disponibilidad

## Objetivo

Mostrar cómo una aplicación web puede ser escalada horizontalmente y manejar alta disponibilidad.

## Cómo usar

1. Sube este proyecto a un repositorio GitHub.
2. En Render:
   - Crea dos servicios web con este mismo repositorio.
   - Asegúrate de que ambos usan `npm install && npm start` como comando.
   - Render se encargará del balanceo de carga.
3. Accede al frontend en cualquiera de los dos servicios.

## Simulación de fallos

El backend tiene un 30% de probabilidad de responder con error, para simular fallos y observar la alta disponibilidad.

## Estructura

- `/frontend`: HTML, CSS y JS para mostrar el estado del backend.
- `/backend`: Servidor Express que sirve el frontend y expone `/api/status`.
