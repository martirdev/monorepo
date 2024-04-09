import { dateFormater } from "@/lib/locale";
import { PropsWithChildren } from "react";

type CommentPropsType = PropsWithChildren<{
  avatar: string;
  userName: string;
  date: string;
  content: string;
}>;

export const Comment = ({
  avatar,
  userName,
  date,
  content,
}: CommentPropsType) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <img
          alt="Avatar"
          className="rounded-full"
          height="32"
          src={`${process.env.AVATAR_URL}/${avatar}`}
          style={{
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          width="40"
        />
        <div>
          <p className="font-semibold">{userName}</p>
          <p className="text-xs text-gray-400">
            {dateFormater(date).fromNow()}
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 text-sm rounded">{content}</div>
    </div>
  );
};
