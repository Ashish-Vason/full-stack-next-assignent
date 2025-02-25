import mongoose from 'mongoose';

const ExcelDataSchema = new mongoose.Schema({
  sheetName: String,
  data: Array,
});

export default mongoose.models.ExcelData ||
  mongoose.model('ExcelData', ExcelDataSchema);
