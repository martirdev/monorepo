import { useParams } from "next/navigation";

export const useProject = () => useParams<{ project: string }>().project;
