# CSS Stylesheets

This directory contains the CSS stylesheets for the AI/ML Projects Portfolio.

## Files

### `style.css`
The main global stylesheet that includes:
- **Tailwind CSS Framework** - Utility-first CSS framework for responsive design
- **Google Fonts** - Inter (body text) and Playfair Display (headings)
- **Color Variables** - Theme colors for light and dark modes
- **Custom Components** - Reusable component styles
- **Base Styles** - Global typography and element styling

## How It Works

The project uses **Tailwind CSS 4** with a utility-first approach:

1. **Tailwind Directives**: The CSS imports Tailwind's core directives:
   - `@tailwind base` - Base element styles
   - `@tailwind components` - Component classes
   - `@tailwind utilities` - Utility classes

2. **CSS Variables**: Custom properties for theming:
   - `--primary`, `--secondary`, `--accent` - Color scheme
   - `--background`, `--foreground` - Text colors
   - `--border`, `--input`, `--ring` - UI element colors
   - `--radius` - Border radius values

3. **Dark Mode**: Automatic dark theme support via `.dark` class

## Customization

To customize styles:

1. **Update Colors**: Modify CSS variables in the `:root` and `.dark` selectors
2. **Add Components**: Use `@layer components` to define custom component classes
3. **Adjust Spacing**: Modify the `--radius` and other spacing variables
4. **Change Fonts**: Update the Google Fonts import at the top

## Usage in Components

Styles are applied using Tailwind utility classes in React components:

```tsx
<div className="bg-background text-foreground p-4 rounded-lg border border-border">
  Content
</div>
```

## Build Process

The CSS is processed during the build:
1. Tailwind scans React components for class names
2. Generates only the CSS needed (tree-shaking)
3. Minifies and optimizes for production
4. Outputs optimized CSS bundle

## References

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Google Fonts](https://fonts.google.com)

