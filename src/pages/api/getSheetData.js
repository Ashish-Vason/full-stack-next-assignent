import connectDB from '../../lib/mongodb';
import ExcelData from '../../models/ExcelSchema';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sheetName } = req.query; // Get sheet name from query parameter

  if (!sheetName) {
    return res.status(400).json({ error: 'Sheet name is required' });
  }

  await connectDB();

  try {
    const sheetData = await ExcelData.findOne({ sheetName });

    if (!sheetData) {
      return res.status(404).json({ error: `Sheet "${sheetName}" not found` });
    }

    res.status(200).json({ success: true, data: sheetData.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
