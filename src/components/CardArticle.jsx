import { Card } from "flowbite-react";
import { useCardArticle } from "../hooks/useCardArticle"; // Import hooks
import { Button } from "flowbite-react";

export default function CardArtikel() {
  const { articles, loading, error } = useCardArticle();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {articles.map((article) => (
        <Card
          key={article.id} // Gunakan id sebagai key
          className="w-[296px] h-[326px] rounded-lg relative"
          renderImage={() => (
            <img
              width={302}
              height={189}
              src={article.thumbnail} // Gambar dari API
              alt={article.title} // Title sebagai alt
              className="rounded-lg"
            />
          )}
        >
          <h5 className="font-roboto-500 text-[18px] items-center text-center relative bottom-[19px]">
            {article.title} {/* Judul dari API */}
          </h5>
          <div className="flex justify-center">
            <Button
              color="light"
              pill
              className="w-[109px] h-[34px] items-center bottom-4 absolute text-primary-500"
            >
              View Detail
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
