'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { Beer } from '@/types/beer';
import { useInView } from 'react-intersection-observer';
import { fetchBeers } from '@/actions/products.action';
import Beers from './Beers';

export default function LoadMore() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const loadMoreBeers = useCallback(async () => {
    // Once the page 8 is reached repeat the process all over again
    await delay(2000);
    const newPage = page === 8 ? 1 : page + 1;
    const newBeers = (await fetchBeers(newPage)) ?? [];
    setBeers((prev) => [...prev, ...newBeers]);
    setPage(newPage);
  }, [page]);

  useEffect(() => {
    if (inView) {
      loadMoreBeers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Beers beers={beers} />
      <div
        ref={ref}
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
      >
        <Spinner />
      </div>
    </>
  );
}
