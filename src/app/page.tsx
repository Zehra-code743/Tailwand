import Image from "next/image";

export default function Home() {
  return (
  
    <div className="h-screen mt-30 bg-yellow-100 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="intro text-center mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Perfume is a liquid that gives people, things, and rooms a good
            smell. It is made of oils which give off scent to the surrounding
            air. The odoriferous compounds that make up a perfume can be
            manufactured synthetically or extracted from plant or animal
            sources.
          </p>
        </div>
        <div className="profilePic flex justify-center">
          <Image src="/image10.png" alt="profile" height={400} width={400} className="rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
}
