'use server';

import { Beer } from '@/types/beer';

export async function fetchBeers(page: number, perPage: number = 24) {
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as Beer[];
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching beers from ${apiUrl}`);
  }
}
