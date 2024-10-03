// services/authService.js
export const loginUser = async (data) => {
  const response = await fetch("http://devenvs.hopto.org/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Invalid email or password");
  }
  const result = await response.json();
  return result.token;
};
