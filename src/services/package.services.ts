export async function getPackages() {
    try {
      const response = await fetch("/api/mocks");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching packages:", error);
      return [{ name: "Mock Package" }]; // Fallback data
    }
  }