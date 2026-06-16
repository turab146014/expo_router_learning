import { comments } from "../../../data/comments";

export async function GET(_request: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  return Response.json(comment);
}

export async function PATCH(request: Request, { id }: Record<string, string>) {
  const { text } = await request.json();

  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  comment.text = text;

  return Response.json(comment);
}

export async function DELETE(_request: Request, { id }: Record<string, string>) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  if (commentIndex === -1) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  const deletedComment = comments.splice(commentIndex, 1)[0];

  return Response.json(deletedComment);
}
