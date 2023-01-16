import React from "react";
import { useQuery } from "@tanstack/react-query";
import sanityCLient from "config/sanity";
import { booksQuery } from "@acme/sanity-schema";
import { api } from "utils/api";

import type { GetBooksQuery } from "@acme/sanity-schema";

const Books: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();

  const { data: books } = useQuery<GetBooksQuery>(
    ["get-books"],
    async () => {
      return sanityCLient.request(booksQuery);
    },
    {
      enabled: !!session?.user,
    },
  );

  if (!session) return null;

  return (
    <div className="container mx-auto mt-3 flex w-full flex-wrap justify-center gap-4">
      {books?.allBook.map((i) => {
        return (
          <div
            key={i._id}
            className="flex w-full flex-col gap-y-3 rounded-2xl border-2 border-black p-3 text-center md:w-5/12"
          >
            <span className="text-2xl font-bold">{i.title}</span>
            <span className="text-xl font-semibold">{i.author}</span>
            <p>{i.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
