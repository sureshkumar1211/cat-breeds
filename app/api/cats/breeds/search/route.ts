import { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams;
  const searchTerm = queryParams.get("q");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CAT_API_BASE_URL}/breeds/search?q=${searchTerm}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PRIVATE_CAT_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return Response.json({ status: 200, data: response.data });
  } catch (error: AxiosError | any) {
    return Response.json({
      status: error?.status || 500,
      error: {
        message: error?.message || "Server Error",
      },
    });
  }
}
