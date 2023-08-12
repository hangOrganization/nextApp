export const baseUrl = "http://192.168.0.105:8080";

export async function getTeacherList() {
  try {
    const res = await fetch(baseUrl + "/tutor/allTutors", {
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
