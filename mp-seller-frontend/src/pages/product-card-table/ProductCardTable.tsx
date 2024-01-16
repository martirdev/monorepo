import { memo } from "react";
import ProductCardList from "../../widgets/product/product-card-list/ProductCardList";

const ProductCardTable = memo(function ProductCardTable() {
    return (
        <div className="w-full items-center justify-center">
            <ProductCardList />
        </div>
    );
});

export default ProductCardTable;
