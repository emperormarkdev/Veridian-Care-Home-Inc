/**
 * ⚠️ PLACEHOLDER IMAGES — REPLACE BEFORE LAUNCH ⚠️
 *
 * Every file in /src/assets/photos is currently a random stock photo
 * (downloaded from picsum.photos), NOT a real photo of Veridian Care Home,
 * its residents, or its staff.
 *
 * To swap one in: save your real photo over the matching file in
 * /src/assets/photos using the SAME filename below — no code changes
 * needed. The export name tells you where each photo is used on the site.
 */

import ctaBackgroundImg from '../assets/photos/cta-background.jpg'
import galleryDiningImg from '../assets/photos/gallery-dining.jpg'
import galleryGardenImg from '../assets/photos/gallery-garden.jpg'
import galleryHallwayImg from '../assets/photos/gallery-hallway.jpg'
import galleryLoungeImg from '../assets/photos/gallery-lounge.jpg'
import heroPortraitImg from '../assets/photos/hero-portrait.jpg'
import highlightCommunityImg from '../assets/photos/highlight-community.jpg'
import highlightPersonalizedCareImg from '../assets/photos/highlight-personalized-care.jpg'
import highlightTeamImg from '../assets/photos/highlight-team.jpg'
import missionPortraitImg from '../assets/photos/mission-portrait.jpg'
import visionPortraitImg from '../assets/photos/vision-portrait.jpg'

export const PLACEHOLDER_IMAGE_NOTICE =
  'REPLACE ME — stock placeholder, not a real Veridian photo'

export const heroPortrait = heroPortraitImg

export const missionPortrait = missionPortraitImg
export const visionPortrait = visionPortraitImg

export const highlightPhotos = {
  personalizedCare: highlightPersonalizedCareImg,
  community: highlightCommunityImg,
  team: highlightTeamImg,
}

export const galleryPhotos = [
  { src: galleryGardenImg, alt: 'Residents enjoying the garden courtyard' },
  { src: galleryDiningImg, alt: 'Shared dining space at Veridian' },
  { src: galleryLoungeImg, alt: 'A quiet reading lounge' },
  { src: galleryHallwayImg, alt: 'Sunlit hallway at Veridian' },
]

export const ctaBackground = ctaBackgroundImg
