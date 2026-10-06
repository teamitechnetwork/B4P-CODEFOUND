from pathlib import Path

import fitz


source = Path(
    "attached_assets/B4P_CODEFOUND_10_Years_Report_(1)_1791321714319.pdf"
)
output = Path(".agents/outputs/growth-report-page-1.png")
output.parent.mkdir(parents=True, exist_ok=True)

with fitz.open(source) as document:
    print(f"Pages: {document.page_count}")
    print(f"PDF metadata title: {document.metadata.get('title')}")
    page = document[0]
    print(f"First page dimensions: {page.rect.width:.1f} × {page.rect.height:.1f} pt")
    image = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    image.save(output)
    print(f"Rendered first page: {output} ({image.width} × {image.height})")
