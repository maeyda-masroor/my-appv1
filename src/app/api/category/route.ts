import { NextResponse } from 'next/server';
import data from '../../data/prodcut.json';

export async function GET() {
    return NextResponse.json(data);
}