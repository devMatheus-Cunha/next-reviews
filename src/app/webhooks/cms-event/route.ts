import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { CACHE_TAG_REVIEWS } from "@/lib/reviews";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload.model === "review") {
    revalidateTag(CACHE_TAG_REVIEWS);
    console.log("revalidated:", CACHE_TAG_REVIEWS);
  }
  return NextResponse.json(null, { status: 200 });
}
