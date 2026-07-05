import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    HTMLAttributes,
    ReactNode,
} from "react";
import { h } from "@/lib/h";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    outline: "border border-border bg-transparent hover:bg-muted",
    ghost: "bg-transparent hover:bg-muted",
};

const buttonBase =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export function Button({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) {
    return h(
          "button",
      { className: cn(buttonBase, variantClasses[variant], className), ...props },
          children,
        );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    href: string;
    children?: ReactNode;
}

export function LinkButton({
    variant = "primary",
    className,
    children,
    ...props
}: LinkButtonProps) {
    return h(
          "a",
      { className: cn(buttonBase, variantClasses[variant], className), ...props },
          children,
        );
}

export function Card({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return h(
          "div",
      { className: cn("glass-card rounded-xl p-6", className), ...props },
          children,
        );
}

export function Badge({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLSpanElement>) {
    return h(
          "span",
      {
              className: cn(
                        "inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground",
                        className,
                      ),
              ...props,
      },
          children,
        );
}
