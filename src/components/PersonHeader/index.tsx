import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { TfiAlignRight } from "react-icons/tfi";

export default function PersonHeader() {
  return (
    <header className="w-full pr-6 p-6 flex justify-end mb-8 ">
      <Sheet>
        <SheetTrigger>
          <TfiAlignRight />
        </SheetTrigger>

        <SheetContent>
          <nav>
            <ul className="flex flex-col gap-5 pt-8">
              <li>
                <Link href='/'>Números</Link>
              </li>
              <li>
                <Link href='/ordinalNumbers'>Números Ordinais</Link>
              </li>
              <li>
                <Link href='/alphabet'>Letras</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
