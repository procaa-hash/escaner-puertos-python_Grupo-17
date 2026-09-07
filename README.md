# Escáner de Puertos en Python

## Descripción
Este proyecto consiste en un escáner de puertos TCP básico desarrollado en Python. Permite a los estudiantes comprobar qué puertos se encuentran abiertos en un rango específico para una dirección IP determinada.

## Objetivo
Desarrollar una aplicación básica en Python que permita realizar un escaneo de puertos TCP de un equipo autorizado e identificar los puertos abiertos, promoviendo el uso responsable de herramientas digitales e Inteligencia Artificial, cumpliendo con la práctica "G002-S04-TICS-ENLINEA-EN LÍNEA-SEGURIDAD INFORMÁTICA-C1".

## Tecnologías Utilizadas
- **Lenguaje:** Python 3.x
- **Librería principal:** `socket` (Biblioteca estándar de Python)
- **Entorno de desarrollo:** Visual Studio Code
- **Control de versiones:** GitHub

## Requisitos para ejecutar el programa
- Tener Python 3 instalado en el sistema.
- Acceso a una terminal o línea de comandos.

## Instalación
1. Clona este repositorio o descarga los archivos.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. No es necesario instalar librerías externas ya que se utiliza únicamente la biblioteca estándar.

## Cómo ejecutar el programa
Abre tu terminal en Visual Studio Code y ejecuta el siguiente comando:
```bash
python scanner_puertos.py
```

## Ejemplo de uso
```
ESCÁNER DE PUERTOS
========================

IP: 127.0.0.1
Desde: 1
Hasta: 100

Escaneando...

Puerto 80 - ABIERTO

RESUMEN
-------
Puertos analizados: 100
Puertos abiertos: 1
```

## Funcionamiento general
1. El programa solicita una dirección IP y valida que su formato sea correcto.
2. Solicita el puerto inicial y final, asegurando que sean números válidos entre 1 y 65535, y que el rango sea lógico.
3. Utiliza conexiones TCP mediante `socket` para intentar conectarse a cada puerto dentro del rango.
4. Si la conexión es exitosa, se muestra en pantalla como "ABIERTO".
5. Al finalizar, muestra un resumen del total de puertos analizados y los que fueron encontrados abiertos.

## Uso responsable y ético
**ADVERTENCIA:** Este programa fue diseñado estrictamente con fines educativos. 
Únicamente debe utilizarse contra:
- Su propio equipo (localhost/127.0.0.1).
- Una máquina virtual propia.
- Un laboratorio autorizado.
- Una IP sobre la que tenga autorización explícita.

No realice escaneos masivos en redes públicas o sobre equipos sin autorización.

## Estructura del proyecto
```
scanner-puertos-python/
│
├── scanner_puertos.py
├── README.md
└── MANUAL_USO.md
```
