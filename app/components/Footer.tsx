import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ShroudSoft</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transformamos ideas innovadoras en soluciones digitales excepcionales.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
  <h3 className="text-lg font-bold mb-4">Contacto</h3>
  <p className="text-gray-600 dark:text-gray-400">
    info.shroudsoft@gmail.com<br />
    +57 3153212205<br />
    Medellín, Colombia
  </p>
  
</div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ShroudSoft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}