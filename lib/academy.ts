import { schools, tracks, skillCourses, trackGuidance } from '@/data/academy';

export { schools, tracks, skillCourses, trackGuidance };

export const skillCatalog = Object.fromEntries(
  skillCourses.map((course) => [course.slug, course]),
);

export const getSchool = (slug: string) =>
  schools.find((school) => school.slug === slug);

export const getTrack = (slug: string) =>
  tracks.find((track) => track.slug === slug);

export const schoolTracks = (slug: string) => {
  const school = getSchool(slug);
  if (!school) return [];

  return school.roleSlugs.flatMap(
    (roleSlug) => tracks.find((track) => track.slug === roleSlug) ?? [],
  );
};
