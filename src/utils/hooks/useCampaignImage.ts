import { useEffect, useState } from "react";

import { campaignImageUrl } from "@/utils/firebase";
import { staticPath } from "@/utils/pathpida/$path";

export const useCampaignImage = (campaignId: string | undefined | null) => {
  const [imageUrl, setImageUrl] = useState<string>(staticPath.noimg_png);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!campaignId) {
      return;
    }
    campaignImageUrl(campaignId).then((res) => {
      if (res.url) {
        setImageUrl(res.url);
      }
      setLoading(false);
    });
  }, [campaignId]);

  return { imageUrl, loading };
};
