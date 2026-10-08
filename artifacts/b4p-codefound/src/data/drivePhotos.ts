export type DrivePhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  day: 'Day Two' | 'Day Three';
  sourceFolder: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
};

const dayTwoFiles = [
  '2-01-img-20251213-wa0017.jpg',
  '2-02-img-20251213-wa0018.jpg',
  '2-03-img-20251213-wa0019.jpg',
  '2-04-img-20251213-wa0020.jpg',
  '2-05-img-20251213-wa0022.jpg',
  '2-06-img-20251213-wa0023.jpg',
  '2-07-img-20251213-wa0024.jpg',
  '2-08-img-20251213-wa0025.jpg',
  '2-09-img-20251213-wa0026.jpg',
  '2-10-img-20251213-wa0027.jpg',
  '2-11-img-20251213-wa0028.jpg',
  '2-12-img-20251213-wa0029.jpg',
  '2-13-img-20251213-wa0030.jpg',
  '2-14-img-20251213-wa0031.jpg',
  '2-15-img-20251213-wa0032.jpg',
  '2-16-img-20251213-wa0033.jpg',
  '2-17-img-20251213-wa0034.jpg',
  '2-18-img-20251213-wa0035.jpg',
];

const dayThreeFiles = [
  '3-01-img-20251213-wa0107.jpg',
  '3-02-img-20251213-wa0109.jpg',
  '3-03-img-20251213-wa0113.jpg',
  '3-04-img-20251213-wa0114.jpg',
  '3-05-img-20251213-wa0116.jpg',
  '3-06-img-20251213-wa0117.jpg',
  '3-07-img-20251213-wa0120.jpg',
  '3-08-img-20251213-wa0126.jpg',
  '3-09-img-20251213-wa0127.jpg',
  '3-10-img-20251213-wa0128.jpg',
  '3-11-img-20251213-wa0129.jpg',
  '3-12-img-20251213-wa0130.jpg',
  '3-13-img-20251213-wa0131.jpg',
  '3-14-img-20251213-wa0132.jpg',
  '3-15-img-20251213-wa0133.jpg',
  '3-16-img-20251213-wa0134.jpg',
  '3-17-img-20251213-wa0135.jpg',
  '3-18-img-20251213-wa0136.jpg',
];

function createPhotos(files: string[], day: DrivePhoto['day']): DrivePhoto[] {
  const folder = day === 'Day Two'
    ? 'B4P CODEFOUND Day Two Pictures'
    : 'B4P CODEFOUND Day Three Pictures';

  return files.map((file, index) => ({
    id: `${day.toLowerCase().replace(' ', '-')}-${String(index + 1).padStart(2, '0')}`,
    src: `/images/drive/conference/${file}`,
    alt: `B4P CODEFOUND participants and facilitators during the ${day} conference`,
    caption: `B4P CODEFOUND conference photography · ${day}`,
    day,
    sourceFolder: folder,
  }));
}

export const drivePhotos: DrivePhoto[] = [
  ...createPhotos(dayTwoFiles, 'Day Two'),
  ...createPhotos(dayThreeFiles, 'Day Three'),
];

const featuredPhotoSpecs = [
  { photo: drivePhotos[0], width: 1600, height: 1200 },
  { photo: drivePhotos[3], width: 1200, height: 1600 },
  { photo: drivePhotos[4], width: 1200, height: 1600 },
  { photo: drivePhotos[12], width: 1600, height: 1200 },
  { photo: drivePhotos[17], width: 1600, height: 900 },
  { photo: drivePhotos[18], width: 1200, height: 1600 },
  { photo: drivePhotos[22], width: 1600, height: 1200 },
  { photo: drivePhotos[27], width: 900, height: 1600 },
  { photo: drivePhotos[32], width: 1200, height: 1600 },
].filter((item): item is { photo: DrivePhoto; width: number; height: number } => Boolean(item.photo));

export const featuredDrivePhotos: DrivePhoto[] = featuredPhotoSpecs.map(({ photo, width, height }) => {
  const sourceBase = photo.src.replace(/\.jpg$/i, '');
  return {
    ...photo,
    width,
    height,
    srcSet: `${sourceBase}-640.jpg 640w, ${sourceBase}-960.jpg 960w, ${photo.src} ${width}w`,
    sizes: '(max-width: 600px) 82vw, (max-width: 900px) 50vw, 33vw',
  };
});