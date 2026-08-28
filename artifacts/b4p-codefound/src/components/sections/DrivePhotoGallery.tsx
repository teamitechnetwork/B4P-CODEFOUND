import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { featuredDrivePhotos, type DrivePhoto } from '@/data/drivePhotos';

type DrivePhotoGalleryProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  photos?: DrivePhoto[];
  linkHref?: string;
  linkLabel?: string;
  variant?: 'home' | 'editorial';
};

export function DrivePhotoGallery({
  eyebrow = 'From the field',
  title = 'People, place, and shared purpose.',
  description = 'A closer look at the conversations, learning, and collective action behind B4P CODEFOUND’s work.',
  photos = featuredDrivePhotos,
  linkHref = '/what-we-do',
  linkLabel = 'Explore our work',
  variant = 'home',
}: DrivePhotoGalleryProps) {
  return (
    <section className={`drive-photo-section drive-photo-section--${variant}`} aria-labelledby="drive-photo-title">
      <div className="page-container">
        <div className="drive-photo-section__intro">
          <div>
            <span className="section-heading__eyebrow">{eyebrow}</span>
            <h2 id="drive-photo-title">{title}</h2>
          </div>
          <div>
            <p>{description}</p>
            <Link className="text-link" href={linkHref}>
              {linkLabel} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="drive-photo-grid">
          {photos.map((photo, index) => (
            <figure className={`drive-photo-card drive-photo-card--${(index % 3) + 1}`} key={photo.id}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                width={photo.width ?? 1200}
                height={photo.height ?? 800}
                srcSet={photo.srcSet}
                sizes={photo.sizes}
              />
              <figcaption>
                <span>{photo.day}</span>
                <small>{photo.caption}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}