import { createComment } from "@/lib/comments";
import { NextRequest } from "next/server";

type IData = Promise<{
  id: string;
  slug: string;
  user: string;
  message: string;
  postedAt: Date;
}>;

export async function POST(request: NextRequest) {
  const data: any = {};
  createComment(data);
}
