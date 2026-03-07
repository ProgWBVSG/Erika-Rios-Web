const fs = require('fs');
const path = require('path');

function replaceColors(file) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Ámbar -> Taupe
    content = content.replace(/bg-amber-50/g, 'bg-brand-taupe-50');
    content = content.replace(/bg-amber-100/g, 'bg-brand-taupe-50');
    content = content.replace(/bg-amber-[2-3]00/g, 'bg-brand-taupe-light');
    content = content.replace(/bg-amber-[4-5]00/g, 'bg-brand-taupe');
    content = content.replace(/bg-amber-[6-9]00/g, 'bg-brand-taupe-dark');

    content = content.replace(/text-amber-[4-5]00/g, 'text-brand-taupe');
    content = content.replace(/text-amber-[6-7]00/g, 'text-brand-taupe-dark');
    content = content.replace(/text-amber-[8-9]00/g, 'text-brand-taupe-dark');

    content = content.replace(/border-amber-[4-6]00/g, 'border-brand-taupe');
    content = content.replace(/border-amber-[1-3]00/g, 'border-brand-taupe-50');

    // Oscuros genéricos -> Olive como marca distintiva, o mantener oscuros si es fondo principal
    // Para botones principales y elementos destacados oscuros, usaremos Olive
    content = content.replace(/bg-stone-900 text-white/g, 'bg-brand-olive-dark text-white');
    content = content.replace(/hover:bg-stone-800/g, 'hover:bg-brand-olive');

    // Cambiar texto de los Headers genéricos oscuros a un Olive súper oscuro para dar ese "tinge" verdoso elegantísimo
    content = content.replace(/text-stone-900/g, 'text-brand-olive-900');
    content = content.replace(/text-stone-800/g, 'text-brand-olive-dark');

    // Para fondos generales color verde oliva muy clarito, en las subpaginas que tenian stone-50 o bg-white
    content = content.replace(/bg-stone-50/g, 'bg-brand-olive-50');

    // Modificadores de la barra de navegación para darle ese verde oliva profundo a la barra activa
    content = content.replace(/text-[#25D366]/g, 'text-[#25D366]');

    // Excepciones donde la palabra "stone" quede raros o que queden color oscuro taupe
    content = content.replace(/text-amber-700/g, 'text-brand-taupe-dark');

    fs.writeFileSync(filePath, content);
}

const files = [
    'src/app/page.tsx',
    'src/app/mentorias/page.tsx',
    'src/app/bienestar/page.tsx',
    'src/app/programas/page.tsx',
];

files.forEach(replaceColors);
console.log('Colors replaced successfully!');
