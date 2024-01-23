import { IProduct } from "@/data/products";
import { faker } from "@faker-js/faker"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Plus, RefreshCcw, RotateCcw, Truck } from "lucide-react";

const ProductPolicy = ({ product }: { product: IProduct }) => (<Collapsible >
    <CollapsibleTrigger className="flex w-full justify-between items-center py-3 mb-2">
        <span>Shipping & Returns</span>
        <Plus size={14} /></CollapsibleTrigger>
    <CollapsibleContent className="grid grid-cols-1 gap-2 rounded-lg bg-gray-100">
        <div className="flex flex-col gap-1 text-sm  p-4">
            <div className="flex items-center gap-1 font-semibold"><Truck size={14} />Fast delivery</div>
            <span className="text-xs">Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.</span>
        </div>
        <div className="flex flex-col gap-1 text-sm p-4">
            <div className="flex items-center gap-1 font-semibold"><RefreshCcw size={14} />Simple exchanges</div>
            <span className="text-xs">Is the fit not quite right? No worries - we'll exchange your product for a new one.</span>
        </div>
        <div className="flex flex-col gap-1 text-sm p-4">
            <div className="flex items-center gap-1 font-semibold"><RotateCcw size={14} />Easy returns</div>
            <span className="text-xs">Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free.</span>
        </div>
    </CollapsibleContent>
</Collapsible>)

export default ProductPolicy;