import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'

// Preflight для CORS
export async function OPTIONS() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  return NextResponse.json({}, { status: 204, headers })
}

// GET — получить продукт по коллекции и id
export async function GET(
  req: Request,
  { params }: { params: { collection: string; id: string } }
) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  try {
    const { collection, id } = params

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { data: null, message: 'Неверный product id' },
        { status: 400, headers }
      )
    }

    if (!collection) {
      return NextResponse.json(
        { data: null, message: 'Не указана коллекция' },
        { status: 400, headers }
      )
    }

    const client = await clientPromise
    const db = client.db()
    const productItem = await db
      .collection(collection)
      .findOne({ _id: new ObjectId(id) })

    if (!productItem) {
      return NextResponse.json(
        { data: null, message: 'Продукт не найден' },
        { status: 404, headers }
      )
    }

    // Формат для React Admin
    const data = {
      ...productItem,
      id: productItem._id.toString(),
      images:
        productItem.images?.map((src: string) => ({
          url: src,
          desc: productItem.name,
        })) || [],
    }

    return NextResponse.json({ data }, { status: 200, headers })
  } catch (error) {
    console.error('Ошибка GET /api/ekopedia/:collection/:id:', error)
    return NextResponse.json(
      { data: null, message: (error as Error).message },
      { status: 500, headers }
    )
  }
}
