import { useEffect, useState } from 'react';

function ProductLists({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products in', category);
    setProducts(['Clothings', 'Household']);
  }, [category]);

  return <div>{products.join(' ')}</div>;
}

export default ProductLists;
