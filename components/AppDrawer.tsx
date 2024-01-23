"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useStore } from "./provider/StoreProvider";
import { AppLanguage } from "./AppLanguage";

const AppDrawer = observer(() => {
  const store = useStore();
  if (!store) {
    return <div>Empty Store</div>;
  }
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className={buttonVariants({
          size: "icon",
          variant: "outline",
        })}
      >
        <Menu size={16} />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <ul className="divide-y grow">
          <li className="py-2">
            <Link href="/shop" className="text-sm hover:text-primary">
              Shop
            </Link>
          </li>
          <li className="py-2">
            <Link href="/" className="text-sm hover:text-primary">
              Blogs
            </Link>
          </li>
          <li className="py-2">
            <Link href="/" className="text-sm hover:text-primary">
              Contact Us
            </Link>
          </li>
          <li className="py-2">
            <AppLanguage language={store?.uiSettingStore.language} />
          </li>
        </ul>
        <SheetFooter className="grid grid-cols-2 gap-2">
          <Link href="/checkout">
            <Button className="w-full flex items-center gap-1">
              <ShoppingCart size={14} /> Cart ({store?.cartStore.totalQuantity})
            </Button>
          </Link>

          <Button className="w-full" variant="outline">
            Logout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
});

export default AppDrawer;
