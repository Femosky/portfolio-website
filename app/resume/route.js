import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
    const file = readFileSync(join(process.cwd(), 'public/resume.pdf'));
    return new NextResponse(file, {
        headers: {
            'Content-Type': 'application/pdf',
        },
    });
}
