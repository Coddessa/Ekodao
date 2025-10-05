import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    const ekopedia = url.searchParams.get('ekopedia')

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { data: null, message: 'Неверный product id' },
        { status: 400, headers }
      )
    }

    if (!ekopedia) {
      return NextResponse.json(
        { data: null, message: 'Не указана коллекция' },
        { status: 400, headers }
      )
    }

    const productItem = await db
      .collection(ekopedia)
      .findOne({ _id: new ObjectId(id) })

    if (!productItem) {
      return NextResponse.json(
        { data: null, message: 'Продукт не найден' },
        { status: 404, headers }
      )
    }

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
    console.error('Ошибка GET /api/products:', error)
    return NextResponse.json(
      { data: null, message: (error as Error).message },
      { status: 500, headers }
    )
  }
}

// OPTIONS для CORS
export async function OPTIONS() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  return NextResponse.json({}, { status: 204, headers })
}
