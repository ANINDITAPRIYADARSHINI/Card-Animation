import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen flex gap-96">
        <div className="left h-screen">
          <h2>hi</h2>
        </div>
        <div className="right h-screen ">
          <h1>hello</h1>
        </div>
      </div>
    </main>
  );
}
