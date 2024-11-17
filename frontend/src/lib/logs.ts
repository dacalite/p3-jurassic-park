import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { AuditLog } from './types'

export function generatePDF({ logEntries }: { logEntries: AuditLog[] }) {
  const doc = new jsPDF()

  // Título del PDF
  doc.setFontSize(16)
  doc.text('Registro de Actividades - Jurassic Park', 14, 20)

  // Configurar las columnas y formatear los datos
  const columns = [
    { header: 'ID', dataKey: 'id' },
    { header: 'Mensaje', dataKey: 'message' },
    { header: 'Isla', dataKey: 'island' },
    { header: 'Nivel', dataKey: 'level' },
    { header: 'Fecha y Hora', dataKey: 'timestamp' },
  ]

  // Generar tabla
  autoTable(doc, {
    startY: 30,
    head: [columns.map((col) => col.header)],
    body: logEntries.map((entry) => [
      entry.id,
      entry.message,
      entry.island,
      entry.level,
      entry.timestamp,
    ]),
    styles: {
      fontSize: 10,
    },
    headStyles: {
      fillColor: [22, 160, 133],
      textColor: 255,
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
  })

  // Descargar PDF
  doc.save('logs_jurassic_park.pdf')
}
