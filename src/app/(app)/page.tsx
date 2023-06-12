import Image from "next/image";

export default function Page() {
  return (
    <main className={"py-14"}>
      <div className={"container max-w-2xl m-auto px-4 flex flex-col gap-6"}>
        <h1 className={"text-2xl font-bold"}>
          Hey, I&apos;m a Senior Software Engineer at Company. I enjoy working
          with Next.js and crafting beautiful front-end experiences.
        </h1>
        <p>
          This portfolio is built with Next.js and a library called next-mdx. It
          allows you to write Markdown and focus on the content of your
          portfolio.
        </p>
        <p>Deploy your own in a few minutes.</p>
      </div>
      <div className={"container max-w-4xl m-auto px-4 mt-20"}>
        <Image src={"/desk.webp"} alt={"my desk"} width={1080} height={720} />
      </div>
    </main>
  );
}
