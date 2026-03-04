import { Project } from "../types/Project";

import projects from "@/app/data/projects.json";

export function getProjectData(): Project[] {
  return projects as Project[];
}