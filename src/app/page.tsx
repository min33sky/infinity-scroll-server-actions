import { fetchBeers } from '@/actions/products.action';
import Beers from '@/components/Beers';
import LoadMore from '@/components/LoadMore';

export default async function Home() {
  const beer = await fetchBeers(1);

  if (!beer || beer.length === 0) {
    return <div className="text-xl font-bold">Sorry, no beers found!</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8 h-full max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Infinite Beer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Beers beers={beer} />
        <LoadMore />
      </div>
    </main>
  );
}
