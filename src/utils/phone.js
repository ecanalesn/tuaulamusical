// Validación de teléfonos para los formularios (Contacto y Matrícula).
//
// Se aceptan:
//  - Teléfonos españoles de 9 cifras que empiezan por 6, 7, 8 o 9,
//    con o sin prefijo +34 / 0034 (p. ej. "600 123 456", "+34 600123456").
//  - Teléfonos extranjeros con prefijo internacional (+ o 00) y entre 8 y 15 cifras.
// Se permiten espacios, guiones, puntos y paréntesis como separadores.

export const PHONE_ERROR =
  'Introduce un teléfono válido: 9 cifras (por ejemplo, 600 123 456) o con prefijo internacional (+34…).'

export function isValidPhone(value) {
  const raw = String(value || '').trim()
  if (!/^[+\d\s().-]+$/.test(raw)) return false

  let digits = raw.replace(/[\s().-]/g, '')
  if (digits.startsWith('00')) digits = '+' + digits.slice(2)

  if (digits.startsWith('+34')) digits = digits.slice(3)
  else if (digits.startsWith('+')) return /^\+\d{8,15}$/.test(digits)

  return /^[6789]\d{8}$/.test(digits)
}

// Marca el campo como válido o no para que el navegador bloquee el envío
// y muestre el aviso junto al campo. Si el campo es opcional y está vacío, es válido.
export function checkPhoneInput(input, { required = true } = {}) {
  if (!input) return true
  const value = input.value.trim()
  const ok = value === '' ? !required : isValidPhone(value)
  // Vacío y obligatorio: dejamos el aviso estándar de "required" del navegador
  input.setCustomValidity(ok || value === '' ? '' : PHONE_ERROR)
  return ok
}
