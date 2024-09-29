import type { Comment } from "@prisma/client";
import { db } from "./db";

export type CreateCommentData = Omit<Comment, "id" | "postedAt">;

export async function createComment({
  slug,
  userId,
  message,
}: CreateCommentData) {
  return await db.comment.create({
    data: { slug, userId, message },
  });
}

export async function getComments(slug: string) {
  return await db.comment.findMany({
    where: { slug },
    orderBy: { postedAt: "desc" },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
}
