import { IncomingForm } from 'formidable';
import * as XLSX from 'xlsx';
import fs from 'fs';
import connectDB from '../../lib/mongodb';
import ExcelData from '../../models/ExcelSchema';

// Disable Next.js default bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Upload and Process File
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await connectDB();

  const form = new IncomingForm({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'File upload failed' });
    }

    const filePath = files.file[0].filepath;
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    let storedData = [];

    for (const sheet of workbook.SheetNames) {
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

      const newData = new ExcelData({ sheetName: sheet, data: sheetData });
      // await newData.save();
      // Upsert data (if sheetName exists → update, otherwise insert)
      await ExcelData.findOneAndUpdate(
        { sheetName: sheet }, // Search by sheetName
        { data: newData }, // Update data
        { upsert: true, new: true } // Create new if not found
      );
      storedData.push({ sheet, data: sheetData });
    }

    res
      .status(201)
      .json({ message: 'File uploaded and data stored', storedData });
  });
}
