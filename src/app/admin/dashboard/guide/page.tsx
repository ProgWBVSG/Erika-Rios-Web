export default function GuidePage() {
  return (
    <div className="max-w-2xl">

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">Estrategia de Presencia Digital</p>
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight leading-snug">
          Guía de presencia digital
        </h2>
        <p className="mt-4 text-stone-500 text-base leading-relaxed">
          Recomendaciones sobre qué hacer con la web, las redes y los contactos que llegan para sacarle el mayor provecho posible.
        </p>
        <div className="mt-6 h-px bg-stone-100" />
      </div>

      <div className="space-y-12">

        {/* 01 */}
        <Insight number="01" label="Presencia constante">
          <Lead>
            Tu web no genera tráfico sola. Lo que trae personas a ella es tu presencia activa en redes —
            Instagram en particular. La web es donde los convencés; Instagram es donde los encontrás.
          </Lead>
          <Points>
            <Point>
              Publicar <strong>3 veces por semana</strong> en Instagram —Reels cortos de reflexiones, fragmentos de talleres o ideas sobre liderazgo— es lo que más alcance orgánico genera hoy.
            </Point>
            <Point>
              Cada publicación debería terminar con una invitación clara: <em>"Si esto te resonó, escribime por DM"</em> o <em>"El link en bio te lleva al programa"</em>. Sin ese cierre, la gente consume y se va.
            </Point>
            <Point>
              Las reflexiones que escribís en el panel de Arte son contenido listo para Instagram. No hace falta crear desde cero — solo trasladarlo.
            </Point>
          </Points>
          <Note>No necesitás miles de seguidores. Con una audiencia pequeña pero real y contenido consistente, el flujo de consultas aparece solo.</Note>
        </Insight>

        {/* 02 */}
        <Insight number="02" label="Prueba social">
          <Lead>
            Antes de contactarte, casi todos van a buscar si alguien más ya confió en vos. Los testimonios son la respuesta a esa pregunta silenciosa.
          </Lead>
          <Points>
            <Point>
              Pedile a cada cliente que terminó un proceso que te deje 2 o 3 líneas honestas sobre su experiencia. No tienen que ser perfectas — mientras más auténticas, mejor.
            </Point>
            <Point>
              Cargalos en el panel de <strong>Testimonios</strong> con el check "Activo" marcado. Aparecen automáticamente en la homepage, antes de la sección de contacto.
            </Point>
            <Point>
              Actualizalos cada vez que terminás un proceso nuevo. Una web con testimonios recientes transmite que tu trabajo está vivo y activo.
            </Point>
          </Points>
          <Note>Un testimonio real supera a cualquier texto de marketing. Es la voz de alguien que ya estuvo donde está tu próximo cliente.</Note>
        </Insight>

        {/* 03 */}
        <Insight number="03" label="Visibilidad en Google">
          <Lead>
            Tu web ya está configurada técnicamente para Google: títulos, descripciones, datos estructurados y sitemap. Eso es la base. Lo que Google premia con el tiempo es el contenido.
          </Lead>
          <Points>
            <Point>
              Cada reflexión que subís en "Arte" es contenido nuevo que Google puede leer e indexar. Cuanto más extensa y específica sea la reflexión, mayor la chance de que aparezca en búsquedas relacionadas.
            </Point>
            <Point>
              En las descripciones de servicios y el texto de la web, usar frases como <em>"coaching ontológico Argentina"</em>, <em>"liderazgo consciente"</em> o <em>"transformación personal online"</em> de forma natural ayuda al posicionamiento.
            </Point>
            <Point>
              Actualizá la fecha del Programa Estrella cada nueva edición. Un sitio que se actualiza regularmente es un sitio que Google considera relevante.
            </Point>
          </Points>
          <Note>El SEO es lento —los resultados reales se ven entre 3 y 6 meses— pero es el único canal que crece mientras dormís. La constancia en el contenido es la única clave.</Note>
        </Insight>

        {/* 04 */}
        <Insight number="04" label="Gestión de contactos">
          <Lead>
            Cada persona que llena el formulario de tu web queda guardada en el panel de Contactos. Eso significa que ningún lead se pierde, incluso si no respondés WhatsApp al instante.
          </Lead>
          <Points>
            <Point>
              Revisá la sección de <strong>Contactos</strong> una vez por día. Si hay alguien nuevo, escribile ese mismo día — la tasa de cierre baja considerablemente si tardás más de 24 horas.
            </Point>
            <Point>
              Usá las notas internas para registrar qué te dijo, qué servicio le interesa y cuándo volvés a escribirle. Esa información vale mucho cuando tenés varios prospectos al mismo tiempo.
            </Point>
            <Point>
              Actualizá el estado de cada contacto: <em>Contactado</em> cuando les escribís, <em>En proceso</em> cuando tuvieron una charla, <em>Convertido</em> cuando cerraron. Así el Resumen te muestra datos reales.
            </Point>
          </Points>
          <Note>La rapidez en la respuesta es uno de los factores que más influye en el cierre. Si recibís una notificación, respondé antes de que pase una hora.</Note>
        </Insight>

        {/* 05 */}
        <Insight number="05" label="Lectura de métricas">
          <Lead>
            El panel de Resumen te muestra visitas y contactos. Con solo dos números podés entender si algo está funcionando o no.
          </Lead>
          <Points>
            <Point>
              <strong>Visitas sin contactos</strong> indica que las personas llegan pero algo en la web no las convence de escribir. Vale la pena revisar el copy del hero o los textos desde el panel de Contenido.
            </Point>
            <Point>
              <strong>Pocas visitas</strong> indica que el problema no es la web sino el tráfico — hay que reforzar la presencia en redes.
            </Point>
            <Point>
              <strong>Contactos que no cierran</strong> casi siempre tiene que ver con la charla exploratoria o con la propuesta de valor. No con la web.
            </Point>
          </Points>
          <Note>Cinco minutos los lunes alcanza: revisá Resumen, contá contactos nuevos de la semana y decidí si algo necesita ajuste.</Note>
        </Insight>

        {/* Divider */}
        <div className="h-px bg-stone-100" />

        {/* Closing card */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8">
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4">Para empezar esta semana</p>
          <div className="space-y-4">
            {[
              { n: '—', text: 'Pedile un testimonio a alguien con quien hayas trabajado recientemente y cargalo en el panel.' },
              { n: '—', text: 'Verificá que la fecha del Programa Estrella en Contenido sea la próxima real.' },
              { n: '—', text: 'Subí una reflexión de Arte con texto extenso — ese contenido trabaja para el SEO.' },
              { n: '—', text: 'Publicá en Instagram esta semana con el link de la web en bio.' },
              { n: '—', text: 'Revisá Contactos y respondé a cualquiera que haya quedado sin respuesta.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-stone-300 font-light text-lg leading-none mt-0.5 select-none">{item.n}</span>
                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function Insight({ number, label, children }: {
  number: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-8">
      <div className="shrink-0 text-right pt-0.5 w-8">
        <span className="text-xs font-semibold text-stone-300 tabular-nums">{number}</span>
      </div>
      <div className="flex-1 border-l border-stone-100 pl-8">
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">{label}</p>
        {children}
      </div>
    </div>
  )
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-stone-800 text-base leading-relaxed mb-5 font-medium">{children}</p>
  )
}

function Points({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 mb-5">{children}</ul>
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-2 w-1 h-1 rounded-full bg-stone-300 shrink-0" />
      <p className="text-stone-600 text-sm leading-relaxed">{children}</p>
    </li>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-stone-400 text-xs leading-relaxed border-l-2 border-stone-200 pl-4 italic">
      {children}
    </p>
  )
}
