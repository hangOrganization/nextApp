import { baseUrl } from "./teacher";

export async function getCompanyInfo() {
  try {
    const res = await fetch(baseUrl + "/company/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    return data;
  } catch {
    alert("网络错误");
  }
}
