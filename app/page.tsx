import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen flex gap-96">
        <div className="left h-screen">
          <h1>Hello World!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi id, ea unde deserunt possimus voluptatum quae eligendi explicabo. Animi repellat rerum cum corrupti debitis incidunt reiciendis, veniam molestias voluptates.</p>
          <button>Learn More</button>
        </div>
        <div className="right h-screen ">
          <h3>Hi, Abc</h3>
          <h1>How is it going?</h1>
          <div className="w-80 h-80 rounded-3xl bg-yellow-200 absolute"></div>
          <div className="w-80 h-80 rounded-3xl bg-green-200 absolute deg-40"></div>
          <div className="w-80 h-80 rounded-3xl bg-blue-300 absolute deg-50"></div>
          <div className="w-80 h-80 rounded-3xl bg-purple-400 absolute deg-10"></div>
          <div className="w-80 h-80 rounded-3xl bg-pink-400 absolute deg-30"></div>
          <div className="w-80 h-80 rounded-3xl bg-orange-400 absolute deg-20 ">
            <h1>hello</h1>
          </div>

        </div>
      </div>
    </main>
  );
}
