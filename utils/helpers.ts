import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Import all thumbnails
import Eyewitness from "@/public/images/thumbnails/eyewitness/thumbnail.webp";
import EyewitnessDashboard from "@/public/images/thumbnails/eyewitness/eyewitness-2.png";
import EyewitnessAddPost from "@/public/images/thumbnails/eyewitness/eyewitness-1.png";
import SimplHome from "@/public/images/thumbnails/simpl-home/SimplHome.webp";
import SimplHome1 from "@/public/images/thumbnails/simpl-home/SimplHome-1.png";
import SimplHome2 from "@/public/images/thumbnails/simpl-home/SimplHome-2.png";
import SimplHome3 from "@/public/images/thumbnails/simpl-home/SimplHome-3.png";
import SimplHome4 from "@/public/images/thumbnails/simpl-home/SimplHome-4.png";
import ParkingBooking from "@/public/images/thumbnails/parking-booking/thumbnail.webp";
import Parking1 from "@/public/images/thumbnails/parking-booking/parking-1.png";
import Parking2 from "@/public/images/thumbnails/parking-booking/parking-2.png";
import Parking3 from "@/public/images/thumbnails/parking-booking/parking-3.png";
import Parking4 from "@/public/images/thumbnails/parking-booking/parking-4.png";
import TaskManager from "@/public/images/thumbnails/task-manager/taskmanager.webp";
import TaskManager1 from "@/public/images/thumbnails/task-manager/taskmanager-1.png";
import TaskManager2 from "@/public/images/thumbnails/task-manager/taskmanager-2.png";
import TaskManager3 from "@/public/images/thumbnails/task-manager/taskmanager-3.png";
import TaskManager4 from "@/public/images/thumbnails/task-manager/taskmanager-4.png";
import GNSSPredictor from "@/public/images/thumbnails/gnss-predictor/GnssAI.webp";
import GNSSPredictor1 from "@/public/images/thumbnails/gnss-predictor/GnssAI-1.png";
import GNSSPredictor2 from "@/public/images/thumbnails/gnss-predictor/GnssAI-2.png";
import GNSSPredictor3 from "@/public/images/thumbnails/gnss-predictor/GnssAI-3.png";
import GNSSPredictor4 from "@/public/images/thumbnails/gnss-predictor/GnssAI-4.png";
import NotesSaaS from "@/public/images/thumbnails/notes-saas/notessaas.webp";
import Nxtwave from "@/public/images/thumbnails/nxtwave/Bhasha.webp";
import Bhasha1 from "@/public/images/thumbnails/nxtwave/Bhasha-1.png";

// Shared thumbnail mapping
export const thumbnails: Record<string, StaticImageData> = {
  Eyewitness,
  SimplHome,
  ParkingBooking,
  TaskManager,
  GNSSPredictor,
  NotesSaaS,
  Nxtwave,
  Bhasha: Nxtwave, // Bhasha project uses the Nxtwave image
};

export type ProjectGallery = {
  thumbnail: StaticImageData;
  images: StaticImageData[];
};

export const projectGalleries: Record<string, ProjectGallery> = {
  Eyewitness: { thumbnail: Eyewitness, images: [EyewitnessDashboard, EyewitnessAddPost] },
  SimplHome: { thumbnail: SimplHome, images: [SimplHome1, SimplHome2, SimplHome3, SimplHome4] },
  ParkingBooking: { thumbnail: ParkingBooking, images: [Parking1, Parking2, Parking3, Parking4] },
  TaskManager: { thumbnail: TaskManager, images: [TaskManager1, TaskManager2, TaskManager3, TaskManager4] },
  GNSSPredictor: { thumbnail: GNSSPredictor, images: [GNSSPredictor1, GNSSPredictor2, GNSSPredictor3, GNSSPredictor4] },
  NotesSaaS: { thumbnail: NotesSaaS, images: [] },
  Nxtwave: { thumbnail: Nxtwave, images: [Bhasha1] },
  Bhasha: { thumbnail: Nxtwave, images: [Bhasha1] }, // Bhasha project uses the Nxtwave image
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
