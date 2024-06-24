import Image from "next/image";
import RootLayout from "@/components/layout";

export default function Home() {
  return (
      <RootLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h1>Home Page</h1>
          </div>
        </main>
      </RootLayout>
  );
}
