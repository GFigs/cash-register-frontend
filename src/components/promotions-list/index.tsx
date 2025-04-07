import Promotion from "./types";

interface PromotionListProps {
    promotions: Promotion[];
}

const PromotionList = ({ promotions }: PromotionListProps) => {
    if (promotions.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Discounts: </h3>
            <ul className="space-y-1">
                {promotions.map((promo) => (
                    <li key={`${promo.description}`} className="flex justify-between">
                        <span>{promo.description}</span>
                        <span className="text-green-600 font-medium">- {Number(promo.discount).toFixed(2)} €</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PromotionList;