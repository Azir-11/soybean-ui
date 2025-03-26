// @unocss-include
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

export const chipVariants = tv({
  slots: {
    root: 'relative',
    content: `absolute flex justify-center items-center whitespace-nowrap rounded-full transform`
  },
  variants: {
    color: {
      primary: {
        content: 'bg-primary text-primary-foreground'
      },
      destructive: {
        content: 'bg-destructive text-destructive-foreground'
      },
      success: {
        content: 'bg-success text-success-foreground'
      },
      warning: {
        content: 'bg-warning text-warning-foreground'
      },
      info: {
        content: 'bg-info text-info-foreground'
      },
      carbon: {
        content: 'bg-carbon text-carbon-foreground'
      },
      secondary: {
        content: 'bg-secondary text-secondary-foreground'
      },
      accent: {
        content: 'bg-accent text-accent-foreground'
      }
    },
    size: {
      xs: {
        content: `min-h-2 px-1 text-[8px] leading-relaxed`
      },
      sm: {
        content: `min-h-2.5 px-1.25 text-[9px] leading-relaxed`
      },
      md: {
        content: `min-h-3 px-1.5 text-[10px] leading-relaxed`
      },
      lg: {
        content: `min-h-3.5 px-1.75 text-[11px] leading-relaxed`
      },
      xl: {
        content: `min-h-4 px-2 text-[12px] leading-relaxed`
      },
      '2xl': {
        content: `min-h-5 px-2.5 text-[13px] leading-relaxed`
      }
    },
    position: {
      'top-right': {
        content: 'right-0 top-0 translate-x-1/2 -translate-y-1/2'
      },
      'bottom-right': {
        content: 'right-0 bottom-0 translate-x-1/2 translate-y-1/2'
      },
      'top-left': {
        content: 'left-0 top-0 -translate-x-1/2 -translate-y-1/2'
      },
      'bottom-left': {
        content: 'left-0 bottom-0 -translate-x-1/2 translate-y-1/2'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    position: 'top-right'
  }
});

type ChipVariants = VariantProps<typeof chipVariants>;

export type ChipPosition = NonNullable<ChipVariants['position']>;

export type ChipSlots = keyof typeof chipVariants.slots;
