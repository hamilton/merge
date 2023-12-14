export { Change, diff, presentableDiff, DiffConfig } from "./diff";

export { getChunks, goToNextChunk, goToPreviousChunk } from "./merge";

export { MergeConfig, DirectMergeConfig, MergeView } from "./mergeview";

export {
  unifiedMergeView,
  acceptChunk,
  rejectChunk,
  originalDoc,
  updateOriginalDoc,
} from "./unified";

export { Chunk } from "./chunk";
