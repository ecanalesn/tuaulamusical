// Mes y año actuales en castellano ("septiembre de 2026"), para los avisos de
// "actualizado a ..." de precios y horarios: se recalcula solo en cada visita.
export function currentMonthYear() {
  return new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(new Date())
}
