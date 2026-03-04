import { Tool } from "./Tool";

export interface Project {
  name: string
  description: string
  image: string
  link: string
  stack: Tool[]
}