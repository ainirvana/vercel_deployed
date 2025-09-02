import mongoose from 'mongoose'

const LibraryItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: String,
  city: String,
  country: String,
  dates: [String],
  labels: String,
  notes: String,
  transferOptions: [String],
  basePrice: Number,
  currency: { type: String, default: 'USD' },
  availableFrom: Date,
  availableUntil: Date,
  variants: String,
  multimedia: [String], // Array of file URLs
  startDate: String,
  endDate: String,
  // Flexible field for any additional data
  extraFields: { type: mongoose.Schema.Types.Mixed, default: {} }
}, {
  timestamps: true,
  strict: false // Allows additional fields not defined in schema
})

export default mongoose.models.LibraryItem || mongoose.model('LibraryItem', LibraryItemSchema)
