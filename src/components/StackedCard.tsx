import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface StackedCardProps {
  name: string;
  description: string;
  image: string;
  className?: string;
}

export const StackedCard = ({
  name,
  description,
  image,
  className,
}: StackedCardProps) => {
  return (
    <div className={cn("relative group w-full h-[240px] sm:h-[260px]", className)}>
      {/* 3rd background card (furthest back) */}
      <div 
        className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" 
      />
      
      {/* 2nd background card */}
      <div 
        className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-100 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" 
      />
      
      {/* 1st foreground card (main content) */}
      <div 
        className="absolute inset-0 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col z-10 transition-all duration-500 ease-out group-hover:translate-y-[-2px] group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] overflow-hidden"
      >
         {/* Radial gradient adjusted for premium light theme */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_200px_at_50%_120%,rgba(0,155,225,0.04),transparent)] pointer-events-none" />
         
         <div className="relative z-10 flex flex-col gap-3 h-full">
             <div className="w-20 h-20 flex items-center justify-center transition-all duration-500 group-hover:drop-shadow-[0_8px_20px_rgba(0,155,225,0.25)]">
                 <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-125"
                 />
             </div>
             <div className="mt-4">
                 <h3 className="text-lg sm:text-[19px] font-bold text-gray-900 leading-tight">
                    {name}
                 </h3>
                 <p className="mt-3 text-sm sm:text-[15px] text-gray-500 line-clamp-4 leading-relaxed font-medium">
                    {description}
                 </p>
             </div>
         </div>
      </div>
    </div>
  );
};
