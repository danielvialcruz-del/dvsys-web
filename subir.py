# subir_todo.py
import os
import subprocess

# Cambia esto por tu mensaje o déjalo así
mensaje = input("¿Qué cambios hiciste? (ej: Arreglé Clientes): ") or "Actualización rápida"

# Los 3 comandos git
comandos = [
    ["git", "add", "."],
    ["git", "commit", "-m", mensaje],
    ["git", "push"]
]

print("Subiendo todo a GitHub...\n")

for cmd in comandos:
    print(f"Ejecutando: {' '.join(cmd)}")
    resultado = subprocess.run(cmd, cwd=r"C:\dvsys_web\web")
    if resultado.returncode != 0:
        print("¡ERROR! Revisa la terminal.")
        input("Presiona Enter para cerrar...")
        exit()

print("\n¡TODO SUBIDO CORRECTAMENTE!")
print("En 40 segundos Vercel recompila y tu formulario aparece.")
input("Presiona Enter para cerrar...")