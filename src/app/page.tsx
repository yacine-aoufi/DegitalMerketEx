import MaxWidthWrapper from "@/components/MaxWidthWrapperr";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
// import { Link } from "lucide-react";
import Link from "next/link";
const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happpy? We offer a 30-day refund guarantee.  ",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "We've plaged 1% of sales to the preservation and restoration of the natural enviroment.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className=" mb-10 text-3xl font-bold  tracking-tight text-gray-900 sm:text-6xl">
            Your merketplace for high-quality{" "}
            <span className="text-blue-600"> digital assets.</span>
          </h1>
          <p className=" my-6 text-lg max-w-prose text-muted-foreground">
            Welcom to DzPixelMarket. evry asset on our platform os verified by
            our team to ensure the heighest quality standars
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/products">
              Browse trending
            </Link>
            <Button variant="ghost"> Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO : List of prodcuts */}
        <ProductReel query={{sort:"desc",limit:4}} href="/products" title="Brand new"/>
      </MaxWidthWrapper>

      <section className="border-t border-gray-300 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((p) => (
              <div
                key={p.name}
                className="text-center md:flex md:items-start md:text-left lg:text-center lg:block"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<p.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
