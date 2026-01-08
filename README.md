# Portfolio - Figma Frame Replication

This project contains 1:1 visual copies of selected Figma frames, stacked vertically on a single page.

## Frame Mapping

1. **Frame 1** (`MacBook Pro 14" - 57`, node-id: `281:445`)
   - Component: `components/Frame1Section.tsx`
   - Section ID: `frame-1`
   - Contains: Header with "JASPER SCHMINKE" and navigation, image on left, "Hey there." text on right

2. **Frame 2** (`MacBook Pro 14" - 60`, node-id: `291:482`)
   - Component: `components/Frame2Section.tsx`
   - Section ID: `frame-2`
   - Contains: Header with "JASPER SCHMINKE" and navigation, quote text below

## Page Structure

The main page (`app/page.tsx`) renders both sections vertically:
- Frame 1 section (top)
- Frame 2 section (bottom)

Each section maintains the exact dimensions from Figma: 1512px × 982px (MacBook Pro 14" frame size).

## Setup

```bash
npm install
npm run dev
```

The page will be available at `http://localhost:3000`.

