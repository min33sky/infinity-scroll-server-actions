import { Beer } from '@/types/beer';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from './ui/card';
import Image from 'next/image';

interface Props {
  beers: Beer[];
}

export default function Beers({ beers }: Props) {
  return (
    <>
      {beers.map((beer) => (
        <Card key={beer.id}>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Image
              src={beer.image_url}
              alt={beer.name}
              width={1000}
              height={1000}
              className="object-contain h-48 rounded-lg"
            />
          </CardContent>
          <CardFooter className="text-center flex flex-col p-4">
            <CardTitle className="my-2">{beer.name}</CardTitle>
            <CardDescription>{beer.tagline}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
