import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404! Not Found Page",
  description: "This page is not found",
  keywords: ["notfoundpage", "404", "error page"],
};

export default function NotFound() {
  return (
    <>
      <span>404</span>
      <h1>Not Found</h1>
    </>
  );
}
