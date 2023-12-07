import { previewReviewResponseDTO } from "../dtos/store.dto";
import { getPreviewReview } from "../models/store.dao";

export const getReview = async (storeId, query) => {
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, storeId)
  );
};
