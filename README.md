# Amoxtli: sitio web

Sitio de Amoxtli: Markdown Viewer para [Mac](https://github.com/k4rmakoma0/amoxtli-md-viewer), [Windows](https://github.com/k4rmakoma0/amoxtli-windows) y [Linux](https://github.com/k4rmakoma0/amoxtli-linux), en `amoxtli.alananaya.dev`.

HTML y CSS estáticos, sin paso de compilación, dependencias ni analíticas. Cualquier hosting estático sirve con la raíz de este repo.

La landing está disponible en 11 idiomas. Windows se descarga desde [Microsoft Store](https://apps.microsoft.com/detail/9N8WZTSKKDV8). El inglés está en la raíz y cada otro idioma en su carpeta:

| Idioma | Inicio | Privacidad |
|---|---|---|
| Inglés | `/` | `/privacy/` |
| Español | `/es/` | `/es/privacy/` |
| Francés | `/fr/` | `/fr/privacy/` |
| Alemán | `/de/` | `/de/privacy/` |
| Italiano | `/it/` | `/it/privacy/` |
| Portugués (Brasil) | `/pt-br/` | `/pt-br/privacy/` |
| Ruso | `/ru/` | `/ru/privacy/` |
| Japonés | `/ja/` | `/ja/privacy/` |
| Coreano | `/ko/` | `/ko/privacy/` |
| Chino simplificado | `/zh-hans/` | `/zh-hans/privacy/` |
| Chino tradicional | `/zh-hant/` | `/zh-hant/privacy/` |

Para verlo en local:

```bash
python3 -m http.server 8000
```

## Descargas

La descarga directa de Mac y el bundle Flatpak de Linux usan los archivos publicados en GitHub; cada tarjeta también enlaza a la página de versiones. La tarjeta Flatpak ofrece además la instalación desde el repositorio con actualizaciones automáticas. Windows abre Microsoft Store y Snap abre [Snap Store](https://snapcraft.io/amoxtli), con instalación mediante `sudo snap install amoxtli` y actualizaciones automáticas.

- Mac: `Amoxtli-1.2.zip` (v1.2).
- Linux x86_64: `amoxtli-2.1.0-x86_64.flatpak` (v2.1.0). Requiere Flatpak. La descarga directa se actualiza manualmente; la instalación desde el [repositorio Flatpak](https://k4rmakoma0.github.io/amoxtli-linux/amoxtli.flatpakref) recibe actualizaciones automáticas mediante GNOME Software o `flatpak update`.

Los archivos incluyen la versión en su nombre. Al publicar una versión nueva, actualiza los enlaces de descarga en las 11 páginas y, para Linux, el nombre del archivo en el comando de instalación.
