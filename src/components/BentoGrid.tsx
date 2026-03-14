import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-6 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "Detaylı Bilgi",
}: {
  name: string;
  className: string;
  background?: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white",
      "transition-all duration-400 ease-out",
      "hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/50",
      "[box-shadow:0_4px_24px_rgba(0,0,0,0.04)]",
      "border border-gray-100",
      className,
    )}
  >
    {background && (
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
        {background}
      </div>
    )}
    <div className="pointer-events-none z-10 flex flex-col h-full gap-4 p-8 relative">
      <div className="bg-gray-50/50 w-fit p-3 rounded-xl border border-gray-100 transition-colors duration-400 group-hover:bg-[#009be1]/5 group-hover:border-[#009be1]/10">
        <Icon className="h-7 w-7 text-neutral-500 transition-colors duration-400 ease-out group-hover:text-[#009be1]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-neutral-800 tracking-tight">
          {name}
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-500/90 font-medium">
          {description}
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 left-8 z-20">
      <Link
        href={href}
        className="pointer-events-auto inline-flex items-center text-sm font-semibold text-neutral-500 transition-colors duration-300 group-hover:text-[#009be1]"
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-neutral-900/5 transition-all duration-300 group-hover:ring-[#009be1]/10" />
  </div>
);
