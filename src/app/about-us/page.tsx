import Image from "next/image";
import Link from "next/link";

type IData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const data: IData[] = [
  {
    id: 1,
    title: "The Art of Perfume",
    description: "Explore the intricate world of fragrance creation.",
    imageUrl: "/luxury1.png",
  },
  {
    id: 2,
    title: "Top 10 Perfumes of 2023",
    description: "Discover the most popular scents of this year.",
    imageUrl: "/luxury2.png",
  },
  {
    id: 3,
    title: "Choosing Your Signature Scent",
    description: "Learn how to select the perfect fragrance for you.",
    imageUrl: "/luxury3.png",
  },
  {
    id: 4,
    title: "The History of Perfume",
    description: "Dive into the rich history of perfume-making.",
    imageUrl: "/luxury4.png",
  },
  {
    id: 5,
    title: "Perfume Tips and Tricks",
    description: "Essential tips to make your fragrance last longer.",
    imageUrl: "/luxury5.png",
  },
  {
    id: 6,
    title: "The Science of Smell",
    description: "Understanding how fragrance affects our emotions.",
    imageUrl: "/luxury6.png",
  },
];

export default function Blogs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {data.map((idata) => (
        <div key={idata.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative pb-2/3">
            <Image
              src={idata.imageUrl}
              alt={idata.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">{idata.title}</h2>
          <p className="text-gray-600 mt-2">{idata.description}</p>
          <Link href={`/blogs/${idata.id}`}>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none transition-colors">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
