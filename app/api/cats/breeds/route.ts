import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/apiConstants";
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams;
  const pageNumber = queryParams.get("page") || DEFAULT_PAGE_NUMBER;
  const pageLimit = queryParams.get("limit") || DEFAULT_PAGE_LIMIT;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CAT_API_BASE_URL}/breeds?page=${pageNumber}&limit=${pageLimit}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PRIVATE_CAT_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json({ status: 200, data: response.data });
  } catch (error: any) {
    return Response.json({
      status: 500,
      error: {
        message: error?.message || "Server Error",
      },
    });
  }
}
