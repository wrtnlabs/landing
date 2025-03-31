import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/_lib/utils/cn";

const buttonVariants = cva(
  "text-sm rounded-full flex cursor-pointer  px-6 py-[14px] transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-[#002424] text-white hover:bg-[#1F4545]",
        secondary:
          "border border-[#002424] hover:bg-[#002424] hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
