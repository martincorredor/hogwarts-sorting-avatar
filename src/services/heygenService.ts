import axios from "axios";

const API_KEY = import.meta.env.VITE_HEYGEN_API_KEY;
const BASE_URL = "https://api.heygen.com";

interface VideoResponse {
  data: { video_id: string };
}

export const createVideo = async (message: string): Promise<string> => {
  const response = await axios.post<VideoResponse>(
    `${BASE_URL}/v2/video/generate`,
    {
      caption: false,
      dimension: { width: 1280, height: 720 },
      video_inputs: {
        character: {
            avatar_id: "Abigail_expressive_2024112501",
        },
        voice: {
            voice_id: "73c0b6a2e29d4d38aca41454bf58c955",
            emotion: "friendly",
        },
        background: {
            value: "#070a12",
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      }
    }
  );

  return response.data.data.video_id;
};

export const getVideoStatus = async (
  videoId: string
): Promise<{ status: string; video_url?: string }> => {
  const response = await axios.get(`${BASE_URL}/v1/video_status.get?video_id=${videoId}`, {
    headers: {
      accept: "application/json",
      "x-api-key": API_KEY
    }
  });

  return response.data.data;
};
