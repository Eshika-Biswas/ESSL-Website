# -*- coding: utf-8 -*-
"""
Background removal script for ESSL team photos.
- Removes background from each photo using rembg (AI-based)
- Composites the cutout onto a solid #FFFFFF white background
- Keeps original dimensions and file format (JPEG for .jpeg, PNG for .png)
- Overwrites originals in-place (same filenames/paths)
"""

import os
import sys
from pathlib import Path

# Force UTF-8 output on Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from PIL import Image
import io

# All team photos referenced in Leadership.tsx (relative to public/)
TEAM_PHOTOS = [
    # Executive team
    "golam-mostafa 1.jpeg",
    "partha-biswas.png",
    "mohammad-faisal1.jpeg",
    # Operational team
    "probir kanti biswas.jpeg",
    "sourav debnath shovro.jpeg",
    "H.M Towhid.jpeg",
    "Atiq .jpeg",
    "sedequr Rahman.jpeg",
    "Mohammad Ekramul Hoq.jpeg",
    "akbar Hossain (2).jpeg",
    "faruk ahmed.jpeg",
    "md sahol imam.jpeg",
    "Rifat Raihan.jpeg",
    "Md .hedaet shekh .jpeg",
    "Mushfiqur Rahman Kaoushik.jpeg",
    "anirban shil.jpeg",
    "jahid.jpeg",
    "System Engineer.jpeg",
    "AL- Mamun.jpeg",
    "Ali Akbar  Malla.jpeg",
    "mehedi hasan.jpeg",
]

def process_photo(src_path: Path) -> None:
    """Remove background and composite onto white, save in-place."""
    from rembg import remove

    print(f"  Processing: {src_path.name} ...", end=" ", flush=True)  # noqa

    with open(src_path, "rb") as f:
        input_data = f.read()

    # Determine original size for reference
    with Image.open(src_path) as orig:
        orig_size = orig.size  # (width, height)
        orig_mode = orig.mode

    # AI background removal → RGBA PNG bytes
    output_data = remove(input_data)

    # Load the RGBA cutout
    cutout = Image.open(io.BytesIO(output_data)).convert("RGBA")

    # Create solid white canvas at the same size
    white_bg = Image.new("RGBA", cutout.size, (255, 255, 255, 255))
    white_bg.paste(cutout, (0, 0), mask=cutout)

    # Convert to RGB (no alpha) for JPEG, keep as RGB/RGBA for PNG
    ext = src_path.suffix.lower()
    if ext in (".jpg", ".jpeg"):
        final = white_bg.convert("RGB")
        final.save(src_path, format="JPEG", quality=92, optimize=True)
    else:  # .png
        final = white_bg.convert("RGB")  # white bg → no alpha needed
        final.save(src_path, format="PNG", optimize=True)

    print(f"done  ({orig_size[0]}x{orig_size[1]} -> {cutout.size[0]}x{cutout.size[1]})")


def main():
    team_dir = Path(__file__).parent.parent / "public" / "team"
    if not team_dir.exists():
        print(f"ERROR: Team photo directory not found: {team_dir}")
        sys.exit(1)

    print(f"Team photo directory: {team_dir}")
    print(f"Processing {len(TEAM_PHOTOS)} photos...\n")

    failed = []
    for filename in TEAM_PHOTOS:
        src = team_dir / filename
        if not src.exists():
            print(f"  WARNING: File not found, skipping: {filename}")
            failed.append(filename)
            continue
        try:
            process_photo(src)
        except Exception as e:
            print(f"  ERROR processing {filename}: {e}")
            failed.append(filename)

    print(f"\n[OK] Done. {len(TEAM_PHOTOS) - len(failed)}/{len(TEAM_PHOTOS)} photos processed successfully.")
    if failed:
        print(f"[FAIL] Failed/skipped: {', '.join(failed)}")


if __name__ == "__main__":
    main()
