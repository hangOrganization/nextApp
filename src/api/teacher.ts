// export const baseUrl = "http://192.168.0.107:8080";
// export const baseUrl = "http://localhost:8080";
export const baseUrl = "http://182.92.217.183:9000";

export async function getTeacherList() {
  try {
    const res = await fetch(baseUrl + "/tutor/allTutors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    return data;
  } catch {
    // alert("网络错误");
  }
}
