interface ApiResponse {
  teams: any[];
  elements: any[];
}

export const fetchTeamData = async (): Promise<ApiResponse> => {
  const url = "https://cors-proxy-90954623675.europe-west1.run.app/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
