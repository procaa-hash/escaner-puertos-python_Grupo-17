import socket
import ipaddress
import sys

def validar_ip(ip: str) -> bool:
    """
    Valida si la dirección IP proporcionada tiene un formato válido.
    """
    try:
        ipaddress.ip_address(ip)
        return True
    except ValueError:
        return False

def validar_puertos(inicio: str, fin: str) -> tuple:
    """
    Valida que los puertos sean números enteros y estén en el rango correcto (1-65535).
    También verifica que el puerto inicial no sea mayor al final.
    Retorna una tupla (inicio_int, fin_int) si es válido, o (None, None) si no lo es.
    """
    try:
        p_inicio = int(inicio)
        p_fin = int(fin)
        
        if p_inicio < 1 or p_inicio > 65535 or p_fin < 1 or p_fin > 65535:
            print("Error: Los puertos deben estar entre 1 y 65535.")
            return None, None
            
        if p_inicio > p_fin:
            print("Error: El puerto inicial no puede ser mayor que el puerto final.")
            return None, None
            
        return p_inicio, p_fin
    except ValueError:
        print("Error: Por favor, ingrese números enteros válidos para los puertos.")
        return None, None

def escanear_puerto(ip: str, puerto: int) -> bool:
    """
    Intenta establecer una conexión TCP en un puerto específico de una IP.
    Retorna True si el puerto está abierto, False si está cerrado o hay error.
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.5)
    
    try:
        resultado = s.connect_ex((ip, puerto))
        return resultado == 0
    except (socket.timeout, socket.error):
        return False
    finally:
        s.close()

def main():
    print("========================")
    print("   ESCÁNER DE PUERTOS   ")
    print("========================\n")
    
    while True:
        ip = input("IP: ")
        if validar_ip(ip):
            break
        print("Error: Dirección IP no válida. Intente nuevamente.\n")

    while True:
        inicio = input("Desde: ")
        fin = input("Hasta: ")
        
        puerto_inicio, puerto_fin = validar_puertos(inicio, fin)
        if puerto_inicio is not None and puerto_fin is not None:
            break
        print("Intente nuevamente.\n")

    print("\nEscaneando...\n")

    puertos_abiertos = []
    total_analizados = 0

    for puerto in range(puerto_inicio, puerto_fin + 1):
        total_analizados += 1
        
        if escanear_puerto(ip, puerto):
            print(f"Puerto {puerto} - ABIERTO")
            puertos_abiertos.append(puerto)

    print("\nRESUMEN")
    print("-------")
    
    if not puertos_abiertos:
        print("No se encontraron puertos abiertos en el rango analizado.")
        
    print(f"Puertos analizados: {total_analizados}")
    print(f"Puertos abiertos: {len(puertos_abiertos)}")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nEscaneo cancelado por el usuario.")
        sys.exit(0)
