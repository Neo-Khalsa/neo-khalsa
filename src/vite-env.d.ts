/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

// Motion package types - the package exports types for motion/react
// This ensures TypeScript recognizes the subpath export
declare module 'motion/react' {
  // Re-export types from framer-motion for compatibility
  export * from 'framer-motion';
}

// Lucide React types - ensure TypeScript recognizes the module
// The package has built-in types, but this helps with module resolution
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  export type Icon = FC<IconProps>;
  export const Users: Icon;
  export const Briefcase: Icon;
  export const FileText: Icon;
  export const Shield: Icon;
  export const Target: Icon;
  export const Layers: Icon;
  // Re-export all other icons from the package's actual types
  export * from 'lucide-react/dist/lucide-react';
}

