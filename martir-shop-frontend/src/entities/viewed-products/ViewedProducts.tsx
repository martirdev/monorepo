import {memo} from 'react';
import {Link} from 'react-router-dom';

import {LABELS} from './consts';
import {VievedProductType} from './types';

const ViewedProducts = memo<VievedProductType>(function ViewedProducts({products}) {
  return (
    <div className="flex gap-5 overflow-auto">
      <div className="flex aspect-square h-60 flex-col items-center justify-center gap-1 italic">
        <span>{LABELS.VIEWED_ITEMS}</span>
        <span className="text-small">{LABELS.ADDITIONAL_VIEWED_ITEMS_TEXT}</span>
      </div>
      {products.map(product => (
        <div key={product.link} className="h-60 flex-shrink-0">
          <Link to={product.link} target="_blank" rel="noreferrer">
            <img src={product.image} alt={product.name} className="aspect-square h-full" />
          </Link>
        </div>
      ))}
    </div>
  );
});

export {ViewedProducts};
