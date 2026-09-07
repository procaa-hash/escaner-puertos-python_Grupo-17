# Manual de Uso: Escáner de Puertos

Este manual detalla los pasos para ejecutar y utilizar el escáner de puertos de forma correcta.

## 1. Requisitos para ejecutar el programa
- Un ordenador con Windows, macOS o Linux.
- Python 3.x instalado.
- Visual Studio Code.

## 2. Instalación de Python
Si no tienes Python instalado, descárgalo desde [python.org](https://www.python.org/downloads/) e instálalo. Asegúrate de marcar la casilla "Add Python to PATH" durante la instalación.

## 3. Preparación del proyecto
Descarga los archivos del proyecto y guárdalos en una carpeta llamada `scanner-puertos-python`.

## 4. Cómo abrir el proyecto en Visual Studio Code
1. Abre Visual Studio Code.
2. Ve a `Archivo` > `Abrir carpeta...` (o `File` > `Open Folder...`).
3. Selecciona la carpeta `scanner-puertos-python`.

## 5. Cómo iniciar la aplicación
1. En Visual Studio Code, abre una nueva terminal (`Terminal` > `Nueva terminal`).
2. Ejecuta el siguiente comando:
   ```bash
   python scanner_puertos.py
   ```
   *(Nota: en algunos sistemas puede ser necesario usar `python3 scanner_puertos.py`)*

*[Espacio para insertar captura de la ejecución inicial del programa]*

## 6. Cómo ingresar la dirección IP
El programa solicitará que ingreses una IP. Debe ser una dirección IPv4 válida.
Ejemplo: `127.0.0.1` (localhost) o la IP de tu máquina virtual.

*[Espacio para insertar captura de la IP utilizada]*

## 7. Cómo ingresar el puerto inicial
Se solicitará "Desde:". Ingresa un número entero entre 1 y 65535 que represente el inicio del escaneo.
Ejemplo: `1`

## 8. Cómo ingresar el puerto final
Se solicitará "Hasta:". Ingresa el puerto donde terminará el escaneo. Debe ser mayor o igual al inicial y máximo 65535.
Ejemplo: `100`

*[Espacio para insertar captura del rango de puertos]*

## 9. Cómo ejecutar el escaneo
Una vez ingresados los datos correctamente, el programa mostrará el mensaje "Escaneando..." y comenzará el proceso automáticamente.

*[Espacio para insertar captura del escaneo en progreso]*

## 10. Cómo interpretar los resultados
El programa irá listando en pantalla los puertos que encuentre abiertos. Al final, mostrará un resumen indicando cuántos puertos analizó en total y cuántos estaban abiertos.

*[Espacio para insertar captura de los puertos encontrados (y el resumen)]*

## 11. Qué significa un puerto abierto
Un puerto abierto indica que hay un servicio (una aplicación o programa) escuchando en ese puerto específico y aceptando conexiones en el equipo escaneado.

## 12. Qué hacer si no se encuentran puertos abiertos
Si el programa finaliza y muestra el mensaje "No se encontraron puertos abiertos en el rango analizado", significa que no hay servicios escuchando en esos puertos específicos o un firewall (cortafuegos) está bloqueando las conexiones. Es un comportamiento normal dependiendo del rango escaneado y la configuración del equipo.

## 13. Uso responsable del programa
El uso de esta herramienta debe ser estrictamente ético y académico.
- **Solo escanea** equipos propios (como `127.0.0.1`), máquinas virtuales configuradas por ti, o laboratorios provistos por la universidad.
- **No escanees** IPs públicas, páginas web, ni redes de terceros sin su autorización por escrito.

---

### Registro de Resultados
*(Completa esta tabla con los resultados obtenidos en tu práctica real)*

| Elemento | Resultado |
|----------|-----------|
| IP utilizada | [IP utilizada] |
| Rango de puertos | [rango utilizado] |
| Puertos abiertos | [puertos encontrados] |
| Observaciones | [observaciones] |
