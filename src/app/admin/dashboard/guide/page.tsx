export default function GuidePage() {
  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">📋 Guía de Crecimiento Web</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Todo lo que podés hacer desde tu panel y desde tus redes para que la web empiece a traer clientes.
        </p>
      </div>

      {/* SECTION: SEO */}
      <Card color="blue" emoji="🔍" title="SEO — Lo que ya funciona (y lo que podés potenciar)">
        <p className="text-gray-600 text-sm mb-4">
          Tu web ya está optimizada técnicamente: tiene títulos, descripciones, datos estructurados para Google y un sitemap automático. Eso es la base. Lo que Google premia a largo plazo es el <strong>contenido relevante y frecuente</strong>.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <CheckItem>
            <strong>Publicá reflexiones regularmente.</strong> Cada obra que subís en "Arte" es una página indexable. Agregá reflexiones largas y descriptivas — Google las lee y las posiciona.
          </CheckItem>
          <CheckItem>
            <strong>Usá palabras clave naturales.</strong> En las descripciones de servicios, mencioná frases como "coaching ontológico Argentina", "liderazgo consciente", "transformación personal online". Sin forzar, como si le explicaras a alguien.
          </CheckItem>
          <CheckItem>
            <strong>Testimonios = contenido único.</strong> Agregá testimonios reales en el panel — aparecen en la homepage y Google los valora como prueba social.
          </CheckItem>
          <CheckItem>
            <strong>El programa tiene fecha.</strong> Actualizá la fecha del "Programa Estrella" desde Contenido cada vez que abrás una nueva edición — eso mantiene el sitio fresco para Google.
          </CheckItem>
        </ul>
        <Tip>Los resultados de SEO se ven entre 3 y 6 meses. Es lento pero gratis y dura. Constancia gana a velocidad.</Tip>
      </Card>

      {/* SECTION: CONVERSION */}
      <Card color="green" emoji="🎯" title="Conversión — Que quien entra, escriba">
        <p className="text-gray-600 text-sm mb-4">
          La web ya tiene los elementos clave de conversión. Estos son los hábitos que los potencian:
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <CheckItem>
            <strong>Testimonios actualizados.</strong> Son lo primero que busca alguien que duda. Pedile a cada cliente que terminó un proceso que te deje 2-3 líneas. Cargalas en "Testimonios" — aparecen automáticamente en la home.
          </CheckItem>
          <CheckItem>
            <strong>Actualizá la fecha del programa.</strong> "Cupos disponibles" y una fecha próxima real generan urgencia real. Una fecha vencida hace el efecto contrario.
          </CheckItem>
          <CheckItem>
            <strong>Respondé el WhatsApp rápido.</strong> El formulario guarda el lead en "Contactos" y te llega notificación. La tasa de cierre cae mucho si tardás más de 2 horas en responder el primer mensaje.
          </CheckItem>
          <CheckItem>
            <strong>Actualizá el texto del hero.</strong> Si algo no está resonando, cambialo desde "Contenido". No necesitás desarrollador — podés probar distintos títulos y ver cuál genera más contactos.
          </CheckItem>
        </ul>
        <Tip>El botón de WhatsApp flotante en la web convierte muy bien. Si alguien llega y tiene dudas, ese botón es el puente directo.</Tip>
      </Card>

      {/* SECTION: CRM */}
      <Card color="indigo" emoji="👤" title="CRM — Gestioná tus leads sin perder ninguno">
        <p className="text-gray-600 text-sm mb-4">
          Cada persona que llena el formulario queda guardada en "Contactos". Así no perdés ningún lead aunque no respondas WhatsApp al instante.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <CheckItem>
            <strong>Revisá "Contactos" todos los días.</strong> Entrá, mirá si hay nuevos leads y cambiá su estado a "Contactado" cuando les escribís.
          </CheckItem>
          <CheckItem>
            <strong>Usá las notas internas.</strong> Anotá qué te dijo, cuándo te va a responder, qué servicio le interesa. Eso te salva cuando tenés varios prospects al mismo tiempo.
          </CheckItem>
          <CheckItem>
            <strong>Marcá "Convertido" cuando cerrás.</strong> Así podés ver en "Resumen" cuántos leads convierte tu web en clientes reales — y medir si algo está funcionando.
          </CheckItem>
        </ul>
        <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-xs text-indigo-700">
          <strong>Pipeline sugerido:</strong> Nuevo → respondiste = Contactado → tuvieron charla exploratoria = En proceso → cerró = Convertido → no responde más = Descartado
        </div>
      </Card>

      {/* SECTION: INSTAGRAM */}
      <Card color="rose" emoji="📱" title="Instagram — La fuente de tráfico más rápida">
        <p className="text-gray-600 text-sm mb-4">
          Para un perfil como el tuyo, Instagram bien usado trae más tráfico que el SEO en el corto plazo. La web es el cierre; Instagram es la puerta.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <CheckItem>
            <strong>Link en bio → tu web.</strong> Siempre. Y cambialo cuando tenés algo activo (nuevo programa, nueva fecha).
          </CheckItem>
          <CheckItem>
            <strong>Frecuencia mínima: 3 posts por semana.</strong> Reels cortos (30-60 seg) de reflexiones, tips de liderazgo o fragmentos de tus talleres tienen el mayor alcance orgánico hoy.
          </CheckItem>
          <CheckItem>
            <strong>CTA en cada post.</strong> Terminá cada contenido con una acción: "Si esto te resonó, escribime por DM" o "Link en bio para ver el programa". Sin CTA, la gente no actúa.
          </CheckItem>
          <CheckItem>
            <strong>Stories todos los días.</strong> No tienen que ser perfectas. Una frase, una pregunta al público, un detrás de escena de un taller. Mantienen presencia sin producción.
          </CheckItem>
          <CheckItem>
            <strong>Usá las reflexiones de tus obras.</strong> Lo que escribís en el panel de Arte puede ser exactamente el copy de un post. No hay que crear contenido nuevo — solo trasladarlo.
          </CheckItem>
        </ul>
        <Tip>No necesitás muchos seguidores. Con 500 seguidores reales y contenido consistente podés tener un flujo de clientes estable. Calidad de audiencia &gt; cantidad.</Tip>
      </Card>

      {/* SECTION: ANALYTICS */}
      <Card color="amber" emoji="📊" title="Métricas — Qué mirar y cada cuánto">
        <p className="text-gray-600 text-sm mb-4">
          Desde el panel "Resumen" podés ver visitas y leads. Estas son las únicas métricas que importan por ahora:
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <CheckItem>
            <strong>Visitas semanales.</strong> Si suben después de postear en Instagram, la estrategia está funcionando.
          </CheckItem>
          <CheckItem>
            <strong>Leads nuevos por semana.</strong> Si hay visitas pero no hay leads, el problema es la web (el copy no convence). Si no hay visitas, el problema es el tráfico (las redes).
          </CheckItem>
          <CheckItem>
            <strong>Conversión de leads a clientes.</strong> Si cerrás 1 de cada 5 leads, estás bien. Si cerrás menos, el problema es la charla exploratoria o el precio.
          </CheckItem>
        </ul>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100 text-xs text-amber-800">
          <strong>Revisión semanal sugerida (5 min):</strong> Lunes → mirá Resumen → ¿cuántas visitas? → ¿cuántos leads? → ¿alguno sin responder? → actualizá estados en CRM.
        </div>
      </Card>

      {/* SECTION: QUICK WINS */}
      <Card color="teal" emoji="⚡" title="Acciones rápidas de esta semana">
        <p className="text-gray-600 text-sm mb-3">Si tenés que empezar por algo, que sea esto:</p>
        <ol className="space-y-2 text-sm text-gray-700 list-none">
          {[
            'Pedile a 2 o 3 clientes pasados un testimonio corto y cargalos en "Testimonios".',
            'Actualizá la fecha del Programa Estrella en "Contenido" si ya tenés la próxima fecha.',
            'Subí al menos 1 obra con reflexión larga en "Arte" — más contenido, más SEO.',
            'Posteá en Instagram con link en bio a la web al menos 3 veces esta semana.',
            'Revisá "Contactos" — ¿hay algún lead sin responder?',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}

function Card({ color, emoji, title, children }: {
  color: 'blue' | 'green' | 'indigo' | 'rose' | 'amber' | 'teal'
  emoji: string
  title: string
  children: React.ReactNode
}) {
  const border = {
    blue:   'border-blue-200 bg-blue-50/30',
    green:  'border-green-200 bg-green-50/30',
    indigo: 'border-indigo-200 bg-indigo-50/30',
    rose:   'border-rose-200 bg-rose-50/30',
    amber:  'border-amber-200 bg-amber-50/30',
    teal:   'border-teal-200 bg-teal-50/30',
  }[color]

  const heading = {
    blue:   'text-blue-800',
    green:  'text-green-800',
    indigo: 'text-indigo-800',
    rose:   'text-rose-800',
    amber:  'text-amber-800',
    teal:   'text-teal-800',
  }[color]

  return (
    <div className={`rounded-xl border p-6 ${border}`}>
      <h3 className={`text-base font-semibold mb-4 ${heading}`}>
        {emoji} {title}
      </h3>
      {children}
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
      <span>{children}</span>
    </li>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 p-3 bg-white/70 rounded-lg border border-stone-200 text-xs text-stone-600">
      💡 <strong>Tip:</strong> {children}
    </div>
  )
}
