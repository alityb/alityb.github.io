import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Ali_Tayeb_CV.pdf');
    const fileBuffer = await readFile(filePath);

    if (!fileBuffer) {
      throw new Error('File buffer is empty');
    }

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Disposition': 'inline; filename="Ali_Tayeb_CV.pdf"',
        'Content-Type': 'application/pdf',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse(JSON.stringify({ error: 'Error serving PDF', details: error.message }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}